import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import RenderViewImg from './RenderViewImg'
import RenderView9 from './RenderView9'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView8 (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  return (
    <View className={`${tag} ${attrs.class || ''}`} style={attrs.style}>
      {
        tag === 'a' && <RenderViewLink onClick={(src) => onClick(src)} attrs={attrs} nodes={nodes} />
      }
      {
        tag === 'img' && <RenderViewImg attrs={attrs} nodes={nodes} />
      }
      {
        tag === 'text' && <Text>{text}</Text>
      }
      {
        ['a', 'text','img'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView9 key={index} tag={node.tag} attrs={node.attrs} onClick={(src) => onClick(src)} nodes={node.nodes} text={node.text || ''} />)
      }
    </View>
  )
}

RenderView8.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderView8.options = {
  addGlobalClass: true
}

export default RenderView8