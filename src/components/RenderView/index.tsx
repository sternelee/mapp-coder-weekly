import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import RenderView0 from './RenderView0'
import { NodeType } from './Node'

import './index.styl'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  return (
    <View className={`${tag} ${attrs.class || ''}`} style={attrs.style}>
      {
        tag === 'a' && <RenderViewLink onClick={(src) => onClick(src)} attrs={attrs} nodes={nodes} />
      }
      {
        tag === 'text' && <Text>{text}</Text>
      }
      {
        ['a', 'text','img'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView0 key={index} tag={node.tag} attrs={node.attrs} onClick={(src) => onClick(src)} nodes={node.nodes} text={node.text || ''} />)
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