import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { WeeklyStoreInterface } from '../../store/weekly'
import IconFont from '../../components/iconfont'
import { fixUrl } from '../../utils/index'

import './index.styl'

type PageStateProps = {
  weeklyStore: WeeklyStoreInterface
}

interface Index {
  props: PageStateProps
}

@inject('weeklyStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '详情页',
    navigationStyle: 'custom',
    usingComponents: {
      wemark: '../../wemark/wemark'
    }
  }
  state = {
    md: '',
    title: '',
    top: 0,
    topH: 0,
    url: ''
  }

  onShareAppMessage (ops) {
    const query = this.$router.params
    const { title } = this.state
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: `${title}`,
      path: `pages/post/index?tab=${query.tab}&id=${query.id}`,
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }

  componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
  }

  async componentDidShow () {
    const { weeklyStore } = this.props
    if (!weeklyStore.cTitle) {
      await weeklyStore.getCategorys()
    }
    const query = this.$router.params
    const tab = Number(query.tab || 0)
    weeklyStore.tab = tab
    weeklyStore.cid = weeklyStore.categorys[tab].cid
    weeklyStore.cTitle = weeklyStore.categorys[tab].title
    Taro.showLoading({
      title: 'Loading ...'
    })
    const data = await this.props.weeklyStore.getPost(query.id)
    const url = data.url
    Taro.hideLoading()
    if (!data.content) {
      Taro.showToast({
        title: '无法拉取数据',
        duration: 1000
      }).then(() => {
        Taro.setClipboardData({
          data: this.props.weeklyStore.targetPost,
          success: () => {
            Taro.showToast({
              title: '原文链接已复制',
              duration: 1000
            }).then(() => this.onHome())
          }
        })
      })
      return
    }
    const content = fixUrl(data.content, url)
    this.setState({
      title: data.title,
      url: data.url,
      md: content
    })
  }

  onHome = () => {
    const len = Taro.getCurrentPages().length
    if (len > 1) {
      Taro.navigateBack()
    } else {
      Taro.navigateTo({
        url: '/pages/index/index?tab=' + this.props.weeklyStore.tab
      })
    }
  }

  onCopyUrl = () => {
    const { url } = this.state
    Taro.setClipboardData({
      data: url,
      success: () => {
        Taro.showToast({
          title: '原文链接已复制',
          duration: 1000
        })
      }
    })
  }

  render () {
    const { md, title, top, topH } = this.state
    const { categorys, cTitle, tab } = this.props.weeklyStore
    const issue = categorys.length ? categorys[tab] : {title: '', color: ''}
    const mainColor = issue.color
    return (
      <View className='post'>
        <View className='header' onClick={this.onHome} style={{background: mainColor, padding: `${top}px 0 ${top - 30}px 10px`, height: `${topH}px`}}>
          <View>
            <IconFont name='home' size={50} color='#fff' />
          </View>
          <Text className='title'>{cTitle}</Text>
        </View>
        <View className='title' style={{padding: '10px', background: mainColor}} onClick={this.onCopyUrl}>
          <Text>
            { title }
          </Text>
        </View>
        <View className='content'>
          <wemark md={md} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}

export default Index