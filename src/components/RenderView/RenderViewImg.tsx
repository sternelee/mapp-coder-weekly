import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { TextType } from './Node'

interface Props {
  attrs: {
    [key: string]: string
  }
  nodes: TextType[]
}

function RenderViewImg (props: Props) {
  const { attrs, nodes } = props
  let style = attrs.style
  if (attrs.width) {
    style += `width:${attrs.width}px;`
  }
  if (attrs.height) {
    style += `height:${attrs.height}px;`
  }
  const node = nodes.length ? nodes[0] : null
  return (
    <View className={attrs.class || 'img'}>
      <Image style={style} src={attrs.src} mode='aspectFit' />
      {
        node &&
        <Text>{node.text}</Text>
      }
    </View>
  )
}

RenderViewImg.defaultProps = {
  attrs: {},
  nodes: []
}

RenderViewImg.options = {
  addGlobalClass: true
}

export default RenderViewImg