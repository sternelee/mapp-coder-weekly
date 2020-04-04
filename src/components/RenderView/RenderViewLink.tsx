import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import RenderViewImg from './RenderViewImg'
import { NodeType } from './Node'

interface Props {
  onClick: (href: string) => void
  attrs: {
    [key: string]: string
  }
  nodes: NodeType[]
}
function RenderViewLink (props: Props) {
  const { onClick, attrs, nodes } = props
  if (!nodes) return null
  const node = nodes[0]
  return (
    node.tag === 'text' ? <Text onClick={() => onClick(attrs.href)} className={attrs.class || 'a'} style={attrs.style}>{node.text}</Text> : <RenderViewImg attrs={node.attrs} nodes={node.nodes} />
  )
}

RenderViewLink.options = {
  addGlobalClass: true
}

export default RenderViewLink