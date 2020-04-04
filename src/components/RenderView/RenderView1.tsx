import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import RenderViewImg from './RenderViewImg'
import RenderView2 from './RenderView2'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView1 (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  if (tag === 'a') return <RenderViewLink onClick={(src) => onClick(src)} attrs={attrs} nodes={nodes} />
  if (tag === 'img') return <RenderViewImg attrs={attrs} nodes={nodes} />
  if (tag === 'text') return <Text className={`${tag} ${attrs.class || ''}`} style={attrs.style}>{text}</Text>
  return (
    <View className={`${tag} ${attrs.class || ''}`} style={attrs.style}>
      {
        ['a', 'text','img'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView2 key={index} tag={node.tag} attrs={node.attrs} onClick={(src) => onClick(src)} nodes={node.nodes} text={node.text || ''} />)
      }
    </View>
  )
}

RenderView1.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderView1.options = {
  addGlobalClass: true
}

export default RenderView1