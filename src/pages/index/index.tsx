import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import IconFont from '../../components/iconfont'
import parseHTML from '../../utils/parse'

import './index.styl'

const colors = ['rgb(253, 238, 9)', '#9d3979', '#6ca743', '#202362', '#43b667']

type PageStateProps = {
  counterStore: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps
}

@inject('counterStore')
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
    title: '',
    nodes: [],
    aside: false,
    categorys: [],
    category: 5,
    pid: 299,
    top: 0,
    topH: 0
  }



  componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    console.log(menuBtn)
    this.setState({
      top: menuBtn.top + 2,
      topH: menuBtn.height
    })
    this.getCategorys()
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    this.getIssues()
  }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  getCategorys = () => {
    Taro.request({
      url: 'http://127.0.0.1:3000/weekly/categorys'
    }).then(res => res.data.data)
      .then(data => {
        this.setState({
          categorys: data
        })
      })
  }

  getIssues = () => {
    Taro.showLoading({
      title: '数据加载中'
    })
    const { category, pid } = this.state
    Taro.request({
      url: `http://127.0.0.1:3000/weekly/issues?id=${pid}&category=${category}`
    }).then(res => res.data.data)
      .then(data => {
        if (data[0]) {
          this.parseIssue(data[0])
        } else {
          this.getRSS()
        }
      })
  }

  getRSS = () => {
    const { pid, category } = this.state
    Taro.showLoading({
      title: '正在爬取中'
    })
    Taro.request({
      url: `http://127.0.0.1:3000/weekly/rss?id=${pid}&category=${category}`
    }).then(res => res.data.data)
      .then(data => {
        this.parseIssue(data)
      })
  }

  parseIssue = (data) => {
    Taro.hideLoading()
    const nodes = parseHTML(data.content).filter(v => v.nodes.length)
    this.setState({
      title: data.title,
      nodes
    })
  }

  onCategory = (id) => {
    this.setState({
      pid: 0,
      category: id
    }, () => this.getIssues())
  }

  onAside = () => {
    const { aside } = this.state
    this.setState({
      aside: !aside
    }
    )
  }

  onPage = (p) => {
    const { pid } = this.state
    this.setState({
      pid: pid + p
    }, () => this.getIssues())
  }

  onTarget = (src) => {
    console.log(src)
  }

  render () {
    const { top, topH, title, categorys, category, aside, nodes } = this.state
    const asidePd = top + topH
    return (
      <View className='index'>
        <View className='header' style={{background: colors[category - 1], padding: `${top}px 0 ${top}px 10px`, height: `${topH}px`}}>
          <View onClick={this.onAside}>
            <IconFont name='caidan' size={50} color='#fff' />
          </View>
          <Text className='title'>{categorys[category-1].title}</Text>
        </View>
        <View className='menu'>
          <Text onClick={this.onPage.bind(this, -1)}>« Prev</Text>
          <Text onClick={this.onPage.bind(this, 1)}>Next »</Text>
        </View>
        <View className='title'>
          { title }
        </View>
        {
          nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={this.onTarget} nodes={node.nodes} />)
        }
        <View className={aside ? 'aside' : 'aside hide'} onClick={this.onAside}>
          <View className='inner' style={{paddingTop: `${asidePd}px`}}>
            <View className='category topic'>每日周报</View>
            {
              categorys.map(v => 
                <View className={v.id === category ? 'category on' : 'category'} key={v.id} onClick={this.onCategory.bind(this, v.id)} style={{background: v.id === category ? colors[v.id - 1] : ''}}>
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
