import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import RenderViewImg from './RenderViewImg'
import RenderView8 from './RenderView8'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView7 (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  if (tag === 'a') return <RenderViewLink onClick={onClick} attrs={attrs} nodes={nodes} />
  if (tag === 'img') return <RenderViewImg attrs={attrs} nodes={nodes} />
  if (tag === 'text') return <Text className={`${tag} ${attrs.class || ''}`} style={attrs.style}>{text}</Text>
  return (
    <View className={`${tag} ${attrs.class || ''}`} style={attrs.style}>
      {
        ['a', 'text','img'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView8 key={index} tag={node.tag} attrs={node.attrs} onClick={onClick} nodes={node.nodes} text={node.text || ''} />)
      }
    </View>
  )
}

RenderView7.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderView7.options = {
  addGlobalClass: true
}

export default RenderView7