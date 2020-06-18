import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import IconFont from '../../components/iconfont'
import { WeeklyStoreInterface } from '../../store/weekly'
import parseHTML from '../../utils/parse'

import './index.styl'

const SubscribeIds = ['wIZ5aqHfmpQK87nN6SiA4iov86Uy8X05yEDnp-qdgpo', 'wIZ5aqHfmpQK87nN6SiA4kPdtBsIjrbfRZM83eDmSeY', 'wIZ5aqHfmpQK87nN6SiA4okb5JDOfYQphiaRKH3gUvA']

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

  state: {
    isAside: boolean
    top: number
    // topH: number
    nodes: any[]
    count: number
    isSubscribe: boolean
    cids: number[]
    openid: string
    tids: string[]
  } = {
    isAside: false,
    top: 0,
    // topH: 0,
    nodes: [],
    count: 0,
    isSubscribe: false,
    cids: [],
    openid: '',
    tids: []
  }

  onShareAppMessage (ops) {
    const { tab, categorys, cid } = this.props.weeklyStore
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    const title = categorys[tab].title
    return {
      title: `${title}`,
      path: `pages/index/index?cid=${cid}`,
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
    const cid = Number(query.cid || 1)
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    // const device = Taro.getSystemInfoSync()
    // console.log(device)
    // console.log(menuBtn)
    this.setState({
      top: menuBtn.top + 2,
      // topH: menuBtn.height
    })
    if (!weeklyStore.cTitle) {
      await weeklyStore.getCategorys()
    }
    const cids = weeklyStore.categorys.map(v => Number(v.cid))
    const tab = cids.indexOf(cid)
    weeklyStore.tab = tab
    weeklyStore.cid = cid
    weeklyStore.cTitle = weeklyStore.categorys[tab].title
    await this.getIssues(0)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.checkSetting()
  }

  componentDidHide () { }

  getIssues = async (id = 0) => {
    Taro.showLoading({
      title: 'Loading . . .'
    })
    const content = await this.props.weeklyStore.getIssues(id)
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

  onCategory = async (index) => {
    console.log(index)
    this.setState({
      isAside: false,
      nodes: []
    })
    await this.props.weeklyStore.setCategory(index)
    await this.getIssues(0)
  }

  onAside = () => {
    const { isAside } = this.state
    console.log('isAside', isAside)
    this.setState({
      isAside: !isAside
    })
  }

  onPage = async (p) => {
    await this.getIssues(p)
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
        url: `/pages/post/index?cid=${this.props.weeklyStore.cid}&id=${id}`
      })
    }
  }
  checkSetting = () => {
    Taro.getSetting({
      withSubscriptions: true,
      success: (res: any) => {
        console.log(res)
        if (res.subscriptionsSetting) {
          const subs: any = res.subscriptionsSetting
          const tids = SubscribeIds.filter(v => subs[v] && subs[v] === 'accept')
          this.setState({
            tids,
            count: tids.length
          })
        }
      }
    })
    Taro.getStorage({
      key: 'cids',
      success: (res) => {
        this.setState({
          cids: res.data
        })
      }
    })
    try {
      const openid = Taro.getStorageSync('openid')
      this.setState({
        openid
      })
    } catch(e) {
      this.onLogin()
    }
  }

  onLogin = () => {
    Taro.login({
      success: (res) => {
        Taro.request({
          url: `https://api.leeapps.cn/koa/auth?js_code=${res.code}`
        }).then(result => {
          console.log(result)
          this.setState({
            openid: result.data.openid
          })
          Taro.setStorage({
            key: 'openid',
            data: result.data.openid
          })
        })
      }
    })
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

  onSubscribe = () => {
    const { isSubscribe } = this.state
    if (isSubscribe) {
      this.onSubscribeOk()
    } else {
      this.setState({
        isSubscribe: true
      })
    }
  }

  onCheck = (id) => {
    let { cids } = this.state
    const cid = Number(id)
    if (cids.includes(cid)) {
      cids = cids.filter(v => v != cid)
    } else {
      cids.push(cid)
    }
    this.setState({
      cids
    })
  }

  onSubscribeOk = async () => {
    const { cids } = this.state;
    this.setState({
      isSubscribe: false
    })
    await Taro.setStorage({
      key: 'cids',
      data: cids
    })
    this.onReuestMessage()
  }

  onReuestMessage = () => {
    const { tids } = this.state
    if (tids.length) {
      return this.saveSubscribe()
    }
    Taro.requestSubscribeMessage({
      tmplIds: [SubscribeIds[0]],
      success: (res) => {
        console.log(res)
        const _tids = SubscribeIds.filter(v => res[v] && res[v] === 'accept')
        if (tids.length === 0) return
        this.setState({
          tids: _tids
        }, () => this.saveSubscribe())
      }
    })
  }

  saveSubscribe = () => {
    const { openid, cids, tids } = this.state
    Taro.request({
      method: 'POST',
      url: 'https://api.leeapps.cn/koa/weekly/subscribe',
      data: {
        openid,
        cids,
        tids
      }
    }).then(result => {
      if (result.data && result.data.code === 0) {
        Taro.showToast({
          title: `订阅成功`,
          icon: 'success',
          duration: 1000
        })
      } else {
        Taro.showToast({
          title: `订阅失败,请重试`,
          duration: 1000
        })
      }
    })
  }

  render () {
    const { top, isAside, nodes, count, isSubscribe, cids } = this.state
    const { categorys, tab, issue, cTitle } = this.props.weeklyStore
    // const asidePd = top + topH
    const mainColor = categorys.length ? categorys[tab].color : ''
    const maxId = categorys.length ? categorys[tab].maxId : 0
    const curId = Number(issue.pid)
    console.log('更新 侧边栏')
    return (
      <View className='index'>
        <View className='header' onClick={this.onAside} style={{background: mainColor, padding: `${top}px 0 0 10px`, height: `35px`}}>
          <View>
            <IconFont name='caidan' size={50} color='#fff' />
          </View>
          <Text className='title'>{cTitle}</Text>
        </View>
        <View className='title' style={{padding: '10px'}}>
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
          <View className='inner'>
            <View className='aside-tool' onClick={this.onAside} style={{marginTop: `${top}px`}}>
              <View>
                <IconFont name='caidan' size={80} color={mainColor} />
              </View>
              {
                isSubscribe &&
                <Text className='subscribe-tip' style={{color: mainColor}}>建议保持订阅通知</Text>
              }
              {/* {
                !isSubscribe &&
                <Text className='subscribe-tip'>更多请联系客服</Text>
              } */}
              {/* <View className='btn-cn'>
                <Text style={{marginRight: '6px'}}>CN</Text>
                <Switch color={mainColor} checked={isCN} onChange={this.onBtnCn} />
              </View> */}
            </View>
            {
              categorys.map((v, index) =>
                <View className={index === tab ? 'category on' : 'category'} key={index} style={{background: index === tab ? mainColor : ''}}>
                  <Image onClick={this.onCategory.bind(this, index)} src={v.img} mode='scaleToFill' />
                  <Text onClick={this.onCategory.bind(this, index)}>{v.title}</Text>
                  {
                    isSubscribe &&
                    <View className='check' onClick={this.onCheck.bind(this, v.cid)}>
                      <IconFont name={cids.includes(Number(v.cid)) ? 'check1' : 'check'} size={50} color={index === tab ? '#fff' : mainColor} />
                    </View>
                  }
                </View>
              )
            }
            <View className='footer'>
              {/* <View className='contact'>
                <Button openType='contact' type='primary' size='mini'>交流</Button>
              </View> */}
              <View className='subscribe'>
                <Button openType='contact' size='mini' style={{background: mainColor, color: '#fff'}}>建议</Button>
                <Button style={{marginLeft: '10px', background: mainColor, fontWeight: count > 0 ? 'normal' : 600, color: '#fff'}} onClick={this.onSubscribe} size='mini'>{isSubscribe ? '确定订阅' : (count > 0 ? '已订阅' : '订阅更新')}</Button>
                {/* <View className='tip' style={{color: mainColor}}></View>
                  <Text>通知剩余: </Text>
                  <Text className='time'>{count}</Text>
                  <Text>次</Text>
                </View> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
