import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import RenderBlockView9 from './RenderBlockView9'
import { NodeType } from './Node'

// 不支持自循环

function RenderBlockView8 (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  if (!tag) return null
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.length &&
        nodes.map((node, index) => {
          if (node.tag === 'a') return <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />
          else if (node.tag === 'img') return <RenderImgView  key={index} attrs={node.attrs} />
          // else return <RenderBlockView9 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
          else if (node.tag !== 'text') return <RenderBlockView9 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
          else return null
        })
      }
    </View>
  )
}

RenderBlockView8.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

export default RenderBlockView8