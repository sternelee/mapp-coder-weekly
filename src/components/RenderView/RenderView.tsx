import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import RenderViewLink from './RenderViewLink'
import { NodeType } from './Node'

type Props = NodeType & {
  text?: string
  onClick: (src) => void
}

function RenderView (props: Props) {
  const { tag, attrs, nodes, onClick, text = '' } = props
  return (
    <View className={`${tag} ${attrs.class || ''}`}>
      {
        tag === 'a' && <RenderViewLink onClick={(src) => onClick(src)} attrs={attrs} nodes={nodes} />
      }
      {
        tag === 'text' && <Text>{text}</Text>
      }
      {
        ['a', 'text'].indexOf(tag) < 0 && nodes.map((node, index) => <RenderView key={index} tag={node.tag} attrs={node.attrs} onClick={(src) => onClick(src)} nodes={node.nodes} text={node.text || ''} />)
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