import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import RenderBlockView3 from './RenderBlockView1'
import { NodeType, InlineTags } from './Node'

// 不支持自循环

function RenderBlockView2 (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.filter(v => v.tag === 'a').map((node, index) => <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />)
      }
      {
        nodes.filter(v => v.tag === 'img').map((node, index) => <RenderImgView  key={index} attrs={node.attrs} />)
      }
      {
        nodes.filter(v => v.tag === 'text').map((node, index) => <Text key={index}>{node.text}</Text>)
      }
      {
        nodes.filter(v => InlineTags.indexOf(v.tag) < 0).map((node, index) => <RenderBlockView3 key={index} onClick={onClick} tag={node.tag} attrs={attrs} nodes={node.nodes} />)
      }
    </View>
  )
}

RenderBlockView2.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderBlockView2.options = {
  addGlobalClass: true
}

export default RenderBlockView2