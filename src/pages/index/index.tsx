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
    html: '<h1>htmltowxml</h1>'
  }



  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    const REG_STYLE = /( style="[^"]+")/ig;
    const REG_TARGET = /( target="[^"]+")/ig;
    const REG_CLASS = /( class="[^"]+")/ig;
    const REG_TABLE = /<(\/)?table[^>]*>/ig;
    const REG_TBODY = /<(\/)?tbody>/ig;
    const REG_TR = /<(\/)?tr>/ig;
    const REG_TD = /<(\/)?td[^>]*>/ig;
    const REG_NOTES = /<![^>]+->/ig;
    const REG_N = /\n/g;
    Taro.request({
      url: 'http://fe.leeapps.cn/weekly/issues?id=430&category=2'
    }).then(res => res.data.data)
      .then(data => {
        // console.log(data)
        const datas = data[0]
        let html = datas.content
        html = html.replace(REG_TABLE,'').replace(REG_STYLE, '').replace(REG_TARGET,'').replace(REG_NOTES,'').replace(REG_TBODY,'').replace(REG_TR,'').replace(/td>/ig, 'div>').replace(/<td[^>]*>/ig, '<div').replace(REG_N, '')
        console.log(html)
        this.setState({
          html: html
        })
      })
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

  onTapLink = (src) => {
    console.log(src)
  }

  render () {
    const { html } = this.state
    return (
      <View className='index'>
        <htmltowxml text={html} padding={20} bindWxmlTagATap={this.onTapLink}></htmltowxml>
      </View>
    )
  }
}

export default Index  as ComponentType
