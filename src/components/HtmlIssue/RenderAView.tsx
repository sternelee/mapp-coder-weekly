import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { NodeType } from './Node'
import RenderImgView from './RenderImgView'

interface Props {
  onClick: (href: string) => void
  attrs: {
    [key: string]: string
  }
  nodes: NodeType[]
}
function RenderAView (props: Props) {
  const { onClick, attrs, nodes } = props
  if (!nodes) return null
  return (
    <View className={attrs.class || 'a'} style={attrs.style}>
      {
        nodes.filter(v => v.tag === 'img').map((node, index) => <RenderImgView  key={index} attrs={node.attrs} />)
      }
      {
        nodes.filter(v => v.tag === 'text').map((node, index) => <Text onClick={() => onClick(attrs.href)} key={index}>{node.text}</Text>)
      }
    </View>
    // <Text onClick={() => onClick(attrs.href)} className={attrs.class || 'a'} style={attrs.style || ''}>{node.text}</Text>
  )
}

RenderAView.options = {
  addGlobalClass: true
}

export default RenderAView