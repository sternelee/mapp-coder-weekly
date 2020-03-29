import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import RenderTextView from './RenderTextView'
import RenderBlockView0 from './RenderBlockView0'
import { NodeType } from './Node'

// 不支持自循环

function RenderBlockView (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  if (!tag) return null
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.length &&
        nodes.map((node, index) => {
          if (node.tag === 'a') return <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />
          else if (node.tag === 'img') return <RenderImgView  key={index} attrs={node.attrs} />
          else if (node.tag !== 'text') return <RenderBlockView0 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
          else return null
          // else if (node.tag === 'text') return <RenderTextView text={node.text} />
          // else return <RenderBlockView0 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
        })
      }
    </View>
  )
}

RenderBlockView.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

export default RenderBlockView