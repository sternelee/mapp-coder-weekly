import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import IconFont from '../../components/iconfont'
import { WeeklyStoreInterface } from '../../store/weekly'
import parseHTML from '../../utils/parse'

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
    navigationBarTitleText: '',
    navigationStyle: 'custom'
  }

  state = {
    isAside: false,
    top: 0,
    topH: 0,
    nodes: []
  }

  onShareAppMessage (ops) {
    const { category, categorys } = this.props.weeklyStore
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    const title = categorys[category - 1].title
    return {
      title: `${title}`,
      path: `pages/index/index?cid=${category}`,
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
    const { weeklyStore } = this.props
    const query = this.$router.params
    const cid = query.cid || '1'
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
    if (!weeklyStore.cTitle) {
      await weeklyStore.getCategorys()
    }
    weeklyStore.category = Number(cid)
    await this.getIssues(cid, 0)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getIssues = async (cid, id = 0) => {
    Taro.showLoading({
      title: 'Loading . . .'
    })
    const content = await this.props.weeklyStore.getIssues(cid, id)
    Taro.hideLoading()
    if (!content) {
      return Taro.showToast({
        title: '没有数据',
        duration: 1000
      })
    }
    const nodes = parseHTML(content)
    this.setState({
      nodes
    })
  }

  onCategory = async (cid) => {
    console.log(cid)
    this.setState({
      isAside: false,
      nodes: []
    })
    await this.props.weeklyStore.setCategory(cid)
    await this.getIssues(cid, 0)
  }

  onAside = () => {
    const { isAside } = this.state
    console.log('isAside', isAside)
    this.setState({
      isAside: !isAside
    })
  }

  onPage = async (p) => {
    const { category } = this.props.weeklyStore
    await this.getIssues(category, p)
  }

  onTarget = (src, text) => {
    console.log(src, text)
    const isUnsubscribe = /Unsubscribe/i.test(text)
    const isOnweb = /Read on the Web/i.test(text)
    this.props.weeklyStore.setTarget(src)
    if (isUnsubscribe || isOnweb) {
      Taro.setClipboardData({
        data: src,
        success: () => {
          Taro.showToast({
            title: '复制成功',
            duration: 1000
          })
        }
      })
    } else {
      const id = src.match(/\/([\d]+)\//)[1]
      Taro.navigateTo({
        url: `/pages/post/index?cid=${this.props.weeklyStore.category}&id=${id}`
      })
    }
  }

  // onBtnCn = (ev) => {
  //   const { content, content_cn } = this.props.weeklyStore.issue
  //   const bol = ev.detail.value
  //   this.props.weeklyStore.setCN(bol)
  //   if (bol && !content_cn) {
  //     Taro.showToast({
  //       title: '本文还未翻译',
  //       duration: 1000
  //     })
  //   } else if (bol && content_cn) {
  //     const nodes = parseHTML(content_cn)
  //     this.setState({
  //       nodes
  //     })
  //   } else {
  //     const nodes = parseHTML(content)
  //     this.setState({
  //       nodes
  //     })
  //   }
  // }

  onUnsubscribe = () => {
    const { cTitle } = this.props.weeklyStore
    Taro.requestSubscribeMessage({
      tmplIds: ['wIZ5aqHfmpQK87nN6SiA4rv97fcTUPIUz_1_LESWcnM'],
      success: (res) => {
        console.log(res)
      }
    })
    // Taro.showToast({
    //   title: `${cTitle}-订阅成功`,
    //   duration: 1000
    // })
  }

  render () {
    const { top, topH, isAside, nodes } = this.state
    const { categorys, category, issue, cTitle } = this.props.weeklyStore
    const asidePd = top + topH
    const cIndex = category - 1
    const mainColor = categorys.length ? categorys[cIndex].color : ''
    const maxId = categorys.length ? categorys[cIndex].maxId : 0
    const curId = Number(issue.pid)
    return (
      <View className='index'>
        <View className='header' onClick={this.onAside} style={{background: mainColor, padding: `${top}px 0 ${top}px 10px`, height: `${topH}px`}}>
          <View>
            <IconFont name='caidan' size={50} color='#fff' />
          </View>
          <Text className='title'>{cTitle}</Text>
        </View>
        <View className='title' style={{padding: '0 10px'}}>
          { issue.title }
        </View>
        <View className='menu'>
          <Text onClick={this.onPage.bind(this, curId - 1)}>« Prev</Text>
          {
            curId < maxId &&
            <Text onClick={this.onPage.bind(this, curId + 1)}>Next »</Text>
          }
        </View>
        <View className='issue'>
        { nodes.length &&
          nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={this.onTarget} nodes={node.nodes} />)
        }
        </View>
        <View className={isAside ? 'aside' : 'aside hide'}>
          <View className='inner' style={{paddingTop: `${asidePd}px`}}>
            <View className='aside-tool'>
              <View onClick={this.onAside}>
                <IconFont name='caidan' size={80} color={mainColor} />
              </View>
              {/* <View className='btn-cn'>
                <Text style={{marginRight: '6px'}}>CN</Text>
                <Switch color={mainColor} checked={isCN} onChange={this.onBtnCn} />
              </View> */}
            </View>
            {
              categorys.map((v, index) =>
                <View className={index === cIndex ? 'category on' : 'category'} key={index} onClick={this.onCategory.bind(this, v.cid)} style={{background: index === cIndex ? mainColor : ''}}>
                  <Image src={`cloud://leeapps-b71pw.6c65-leeapps-b71pw-1255591994/weekly/c${index + 1}.png`} mode='scaleToFill' />
                  <Text>{v.title}</Text>
                </View>
              )
            }
            <Button onClick={this.onUnsubscribe}>订阅</Button>
          </View>
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
