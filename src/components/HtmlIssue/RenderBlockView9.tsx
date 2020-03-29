import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import { NodeType } from './Node'

// 不支持自循环

function RenderBlockView9 (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  if (!tag) return null
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.length &&
        nodes.map((node, index) => {
          if (node.tag === 'a') return <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />
          else if (node.tag === 'img') return <RenderImgView  key={index} attrs={node.attrs} />
          else return null
        })
      }
    </View>
  )
}

RenderBlockView9.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

export default RenderBlockView9