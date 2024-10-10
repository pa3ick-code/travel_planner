import { Image } from 'react-native'

type ImageUIProps =  {
    source: any;
    type?: "absolute" | "relative"
    size?: "default" | "small" | "medium" | "big" | "icon"
    otherStyles?: string
}

export default function ImageUI({
  source,
  type = 'relative',
  otherStyles,
  size = "default"
}: ImageUIProps) {
  return (
    <Image 
      source={ type === 'absolute'? { uri: source } : source } 
      className={`
        ${size === 'icon' && 'w-5 h-5 object-cover' }
        ${size === 'small' && 'w-20 h-20 object-cover' }
        ${size === 'medium' && 'w-40 h-40 object-cover' }
        ${size === 'big' && 'w-60 h-60 object-cover' }
        ${size === 'default' && 'w-40 h-40 object-cover' }
        ${otherStyles}
      `}
    />
  )
}