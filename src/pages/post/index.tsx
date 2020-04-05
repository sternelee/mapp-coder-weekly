import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import RenderView from '../../components/RenderView'
import parseHTML from '../../utils/parse'
import { WeeklyStoreInterface } from '../../store/weekly'

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
    navigationBarTitleText: '详情页'
  }
  state = {
    nodes: []
  }

  async componentWillMount () {
    const query = this.$router.params
    console.log(query)
    Taro.showLoading({
      title: 'Loading ...'
    })
    const data = await this.props.weeklyStore.getPost(query.cid, query.id)
    const nodes = parseHTML(data.content)
    this.setState({
      nodes
    })
    Taro.hideLoading()
    console.log(data)
  }

  onTarget = (src, text) => {
    console.log(src, text)
  }

  render () {
    const { nodes } = this.state
    return (
      <View className='post'>
        { 
          nodes.length &&
          nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={this.onTarget} nodes={node.nodes} />)
        }
      </View>
    )
  }
}

export default Index