import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import RenderBlockView5 from './RenderBlockView5'
import { NodeType } from './Node'

// 不支持自循环

function RenderBlockView4 (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  if (!tag) return null
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.length &&
        nodes.map((node, index) => {
          if (node.tag === 'a') return <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />
          else if (node.tag === 'img') return <RenderImgView  key={index} attrs={node.attrs} />
          else if (node.tag !== 'text') return <RenderBlockView5 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
          else return null
          // else return <RenderBlockView5 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
        })
      }
    </View>
  )
}

RenderBlockView4.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

export default RenderBlockView4