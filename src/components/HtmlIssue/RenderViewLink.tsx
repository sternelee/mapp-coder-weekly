import Taro from '@tarojs/taro'
import { Text, Image } from '@tarojs/components'
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
    node.tag === 'text' ? <Text onClick={() => onClick(attrs.href)}>{node.text}</Text> : <Image className={node.attrs.class || 'img'} src={node.attrs.src} mode='scaleToFill' />
  )
}

RenderViewLink.options = {
  addGlobalClass: true
}

export default RenderViewLink