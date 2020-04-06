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
    cid: 1,
    md: '',
    title: '',
    top: 0,
    topH: 0
  }

  onShareAppMessage (ops) {
    const query = this.$router.params
    const { title } = this.state
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: `程序猿周报-${title}`,
      path: `pages/post/index?cid=${query.cid}&id=${query.id}`,
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

  async componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
    const query = this.$router.params
    Taro.showLoading({
      title: 'Loading ...'
    })
    const data = await this.props.weeklyStore.getPost(query.cid, query.id)
    const url = data.url
    const content = fixUrl(data.content, url)
    this.setState({
      cid: Number(query.cid) || 1,
      title: data.title,
      md: content
    })
    Taro.hideLoading()
  }

  onHome = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render () {
    const { md, cid, title, top, topH } = this.state
    const { colors, categorys } = this.props.weeklyStore
    const mainColor = colors[cid - 1]
    return (
      <View className='post'>
        <View className='header' onClick={this.onHome} style={{background: mainColor, padding: `${top}px 0 ${top}px 10px`, height: `${topH}px`}}>
          <View>
            <IconFont name='home' size={50} color='#fff' />
          </View>
          <Text className='title'>{categorys[cid - 1].title}</Text>
        </View>
        <View className='title' style={{padding: '10px', background: mainColor}}>
          { title }
        </View>
        <View className='content'>
          <wemark md={md} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}

export default Index