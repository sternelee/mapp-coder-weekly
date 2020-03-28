import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.styl'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
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
    navigationBarTitleText: '首页',
    usingComponents: {
      'htmltowxml': 'plugin://htmltowxml/view'
    }
  }

  state = {
    title: '',
    html: '',
    aside: false,
    categorys: [],
    category: 2,
    pid: 430
  }



  componentWillMount () { 
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
      url: 'http://192.168.3.48:3000/weekly/categorys'
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
      url: `http://192.168.3.48:3000/weekly/issues?id=${pid}&category=${category}`
    }).then(res => res.data.data)
      .then(data => {
        if (data[0]) {
          this.parseData(data[0])
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
      url: `http://192.168.3.48:3000/weekly/rss?id=${pid}&category=${category}`
    }).then(res => res.data.data)
      .then(data => {
        this.parseData(data)
      })
  }

  parseData = (data) => {
    console.log(data)
    Taro.hideLoading()
    const REG_STYLE = /( style="[^"]+")/ig;
    const REG_TARGET = /( target="[^"]+")/ig;
    const REG_CLASS = /( class="[^"]+")/ig;
    const REG_TABLE = /<(\/)?table[^>]*>/ig;
    const REG_TBODY = /<(\/)?tbody>/ig;
    const REG_TR = /<(\/)?tr>/ig;
    const REG_TD = /<(\/)?td[^>]*>/ig;
    const REG_NOTES = /<![^>]+->/ig;
    const REG_N = /\n/g;
    let html = data.content
    html = html.replace(REG_TABLE,'').replace(REG_TARGET,'').replace(REG_NOTES,'').replace(REG_TBODY,'').replace(REG_TR,'').replace(/td>/ig, 'div>').replace(/<td[^>]*>/ig, '<div').replace(REG_N, '').replace('640', '320')
    // console.log(html)
    this.setState({
      title: data.title,
      html: html
    })
  }

  onCategory = (id) => {
    this.setState({
      pid: 'latest',
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

  tabLink = (src) => {
    console.log(src)
  }

  render () {
    const { title, html, categorys, aside } = this.state
    return (
      <View className='index'>
        <View className='menu'>
          <Button onClick={this.onAside}>菜单</Button>
          <Button onClick={this.onPage.bind(this, -1)}>上一篇</Button>
          <Button onClick={this.onPage.bind(this, 1)}>下一篇</Button>
        </View>
        <View className='title'>
          { title }
        </View>
        {
          html &&
          <htmltowxml text={html} padding={20} bindWxmlTagATap={this.tabLink}></htmltowxml>
        }
        <View className={aside ? 'aside' : 'aside hide'}>
          {
            categorys.map(v => 
              <View className='category' key={v.id} onClick={this.onCategory.bind(this, v.id)}>
                  {v.title}
              </View>
            )
          }
          <View className='footer'>
            <Button onClick={this.onAside}>收回</Button>
          </View>
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
