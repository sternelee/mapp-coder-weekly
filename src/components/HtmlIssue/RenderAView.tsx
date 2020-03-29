import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import { TextType } from './Node'

interface Props {
  onClick: (href: string) => void
  attrs: {
    [key: string]: string
  }
  nodes: TextType[]
}
function RenderAView (props: Props) {
  const { onClick, attrs, nodes } = props
  if (!nodes) return null
  const node = nodes[0]
  return (
    <Text onClick={() => onClick(attrs.href)} className={attrs.class || 'a'} style={attrs.style || ''}>{node.text}</Text>
  )
}

export default RenderAView