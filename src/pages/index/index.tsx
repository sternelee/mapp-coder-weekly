import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import IconFont from '../../components/iconfont'
import { WeeklyStoreInterface } from '../../store/weekly'

import './index.styl'

const colors = ['rgb(253, 238, 9)', '#9d3979', '#6ca743', '#202362', '#43b667', 'rgb(253, 238, 9)', '#9d3979', '#6ca743', '#202362', '#43b667', 'rgb(253, 238, 9)', '#9d3979', '#6ca743', '#202362', '#43b667']

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
    pid: 481,
    top: 0,
    topH: 0
  }

  componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
    this.props.weeklyStore.getCategorys()
    this.props.weeklyStore.getIssues(1)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // getRSS = () => {
  //   const { pid, category } = this.state
  //   Taro.showLoading({
  //     title: '正在爬取中'
  //   })
  //   Taro.request({
  //     url: `http://127.0.0.1:3000/weekly/rss?id=${pid}&category=${category}`
  //   }).then(res => res.data.data)
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

  onCategory = (cid) => {
    this.onAside()
    this.props.weeklyStore.setCategory(cid)
    this.props.weeklyStore.getIssues(cid)
  }

  onAside = () => {
    const { isAside } = this.state
    this.setState({
      isAside: !isAside
    })
  }

  onPage = (p) => {
    const { pid } = this.state
    this.setState({
      pid: pid + p
    })
  }

  onTarget = (src) => {
    Taro.setClipboardData({
      data: src,
      success: () => {
        Taro.showToast({
          title: '复制成功',
          duration: 1000
        })
      }
    })
  }

  render () {
    const { top, topH, isAside } = this.state
    const { categorys, category, issue, nodes } = this.props.weeklyStore
    const asidePd = top + topH
    const cIndex = category - 1
    const mainColor = colors[cIndex]
    return (
      <View className='index'>
        <View className='header' style={{background: mainColor, padding: `${top}px 0 ${top}px 10px`, height: `${topH}px`}}>
          <View onClick={this.onAside}>
            <IconFont name='caidan' size={50} color='#fff' />
          </View>
          <Text className='title'>{categorys[cIndex].title}</Text>
        </View>
        <View className='title'>
          { issue.title }
        </View>
        <View className='menu'>
          <Text onClick={this.onPage.bind(this, -1)}>« Prev</Text>
          <Text onClick={this.onPage.bind(this, 1)}>Next »</Text>
        </View>
        {
          nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={this.onTarget} nodes={node.nodes} />)
        }
        <View className={isAside ? 'aside' : 'aside hide'}>
          <View className='inner' style={{paddingTop: `${asidePd}px`}}>
            <View onClick={this.onAside} style={{margin: '0 0 20px 20px'}}>
              <IconFont name='caidan' size={50} color={mainColor} />
            </View>
            {
              categorys.map((v, index) =>
                <View className={index === cIndex ? 'category on' : 'category'} key={index} onClick={this.onCategory.bind(this, v.cid)} style={{background: index === cIndex ? mainColor : ''}}>
                  <Image src={v.img} mode='scaleToFill' />
                  <Text>{v.title}</Text>
                </View>
              )
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
