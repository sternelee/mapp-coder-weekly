import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

// 微信小程序 不支持自循环

function RenderView (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  return (
    <View className={`${tag} ${attrs.class || ''}`} style={attrs.style}>
      {
        tag === 'a' && <RenderViewLink onClick={(src) => onClick(src)} attrs={attrs} nodes={nodes} />
      }
      {
        tag === 'img' && <Image className={attrs.class || 'img'} src={attrs.src} mode='aspectFit' />
      }
      {
        tag === 'text' && <Text>{text}</Text>
      }
      {
        ['a', 'text','img'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={(src) => onClick(src)} nodes={node.nodes} text={node.text || ''} />)
      }
    </View>
  )
}

RenderView.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

RenderView.options = {
  addGlobalClass: true
}

export default RenderView