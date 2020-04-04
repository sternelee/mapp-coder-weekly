import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Switch } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import IconFont from '../../components/iconfont'
import { WeeklyStoreInterface } from '../../store/weekly'
import parseHTML from '../../utils/parse'

import './index.styl'

const colors = ['rgb(253, 238, 9)', '#9d3979', '#6ca743', '#202362', '#43b667', '#6fccdd', '#da1f26', '#4e8bc9', '#076b8d', '#f15a24']

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

  async componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
    this.props.weeklyStore.getCategorys()
    await this.getIssues(1, 0)
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

  onBtnCn = (ev) => {
    const { content, content_cn } = this.props.weeklyStore.issue
    const bol = ev.detail.value
    this.props.weeklyStore.setCN(bol)
    if (bol && !content_cn) {
      Taro.showToast({
        title: '本文还未翻译',
        duration: 1000
      })
    } else if (bol && content_cn) {
      const nodes = parseHTML(content_cn)
      this.setState({
        nodes
      })
    } else {
      const nodes = parseHTML(content)
      this.setState({
        nodes
      })
    }
  }

  render () {
    const { top, topH, isAside, nodes } = this.state
    const { categorys, category, issue, isCN } = this.props.weeklyStore
    const asidePd = top + topH
    const cIndex = category - 1
    const mainColor = colors[cIndex]
    const maxId = categorys.length ? categorys[category].maxId : 0
    const curId = Number(issue.pid)
    return (
      <View className='index'>
        <View className='header' style={{background: mainColor, padding: `${top}px 0 ${top}px 10px`, height: `${topH}px`}}>
          <View onClick={this.onAside}>
            <IconFont name='caidan' size={50} color='#fff' />
          </View>
          <Text className='title'>{categorys[cIndex].title}</Text>
        </View>
        <View className='title' style={{padding: '0 10px'}}>
          { issue.title }
        </View>
        <View className='menu'>
          <Text onClick={this.onPage.bind(this, curId - 1)}>« Prev</Text>
          {
            curId< maxId &&
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
              <View className='btn-cn'>
                <Text style={{marginRight: '6px'}}>CN</Text>
                <Switch color={mainColor} checked={isCN} onChange={this.onBtnCn} />
              </View>
            </View>
            {
              categorys.map((v, index) =>
                <View className={index === cIndex ? 'category on' : 'category'} key={index} onClick={this.onCategory.bind(this, v.cid)} style={{background: index === cIndex ? mainColor : ''}}>
                  <Image src={`cloud://leeapps-b71pw.6c65-leeapps-b71pw-1255591994/weekly/c${index + 1}.png`} mode='scaleToFill' />
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
