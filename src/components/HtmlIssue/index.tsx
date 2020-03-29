import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RenderBlockView from './RenderBlockView'
import { NodeType } from './Node'

interface Props {
  nodes: NodeType[]
  onClick: (src) => void
}
function HtmlIssue (props: Props) {
  const { nodes } = props
  console.log('nodes', nodes)
  return (
    <View className='issue'>
      {nodes.map((node, index) => <RenderBlockView key={index} nodes={node.nodes} attrs={node.attrs} tag={node.tag} onClick={(src) => props.onClick(src)} />)}
    </View>
  )
}

HtmlIssue.defaultProps = {
  nodes: []
}

export default HtmlIssue