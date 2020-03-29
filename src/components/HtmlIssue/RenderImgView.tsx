import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

interface Props {
  attrs: {
    [key: string]: string
  }
}
function RenderImgView (props: Props) {
  const { attrs } = props
  if (!attrs) return null
  return (
    <Image className={attrs.class || 'img'} src={attrs.src} mode='scaleToFill' />
  )
}

RenderImgView.options = {
  addGlobalClass: true
}

export default RenderImgView