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
  if (tag === 'a') return <RenderViewLink onClick={onClick} attrs={attrs} nodes={nodes} />
  if (tag === 'img') return <RenderViewImg attrs={attrs} nodes={nodes} />
  return <Text className={`${tag} ${attrs.class || ''}`} style={attrs.style}>{text}</Text>
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