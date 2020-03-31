import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'

interface Props {
  text: string
}
function RenderTextView (props: Props) {
  const { text } = props
  return (
    <Text>{text}</Text>
  )
}

export default RenderTextView