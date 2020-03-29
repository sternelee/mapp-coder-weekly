import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import RenderAView from './RenderAView'
import RenderImgView from './RenderImgView'
import RenderBlockView4 from './RenderBlockView4'
import { NodeType } from './Node'

// 不支持自循环

function RenderBlockView3 (props: NodeType & {onClick: (src) => void}) {
  const { tag, attrs, nodes, onClick } = props
  if (!tag) return null
  return (
    <View className={tag} style={attrs.style}>
      {
        nodes.length &&
        nodes.map((node, index) => {
          console.log('node 类型', typeof node)
          if (node.tag === 'a') return <RenderAView key={index} onClick={(src) => onClick(src)} attrs={node.attrs} nodes={node.nodes} />
          else if (node.tag === 'img') return <RenderImgView  key={index} attrs={node.attrs} />
          else if (node.tag !== 'text') return <RenderBlockView4 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
          else return <Text>{ JSON.stringify(node)}</Text>
          // else return <RenderBlockView4 key={index} onClick={onClick} tag={tag} attrs={attrs} nodes={nodes} />
        })
      }
    </View>
  )
}

RenderBlockView3.defaultProps = {
  tag: '',
  nodes: [],
  attrs: {}
}

export default RenderBlockView3