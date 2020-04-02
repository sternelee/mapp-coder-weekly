import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import RenderViewImg from './RenderViewImg'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView9 (props: Props) {
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
    </View>
  )
}

RenderView9.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderView9.options = {
  addGlobalClass: true
}

export default RenderView9