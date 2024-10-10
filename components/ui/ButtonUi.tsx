import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Href, useRouter } from 'expo-router'

type ButtonUiProps = {
  bgColor?: string,
  routeTo?: Href<string | object>,
  rightIcon?: React.JSX.Element,
  leftIcon?: React.JSX.Element,
  containerStyle?: string,
  textStyle?: string,
  title?: string,
  size?: 'full' | 'medium' | 'short'
  action?: any,
}

export default function ButtonUi({
  bgColor,
  routeTo,
  action,
  rightIcon,
  leftIcon,
  containerStyle,
  textStyle,
  title = 'Enter text here',
  size = 'full',
}: ButtonUiProps) {
    const  router = useRouter()

  return (
    <TouchableOpacity
        onPress={ !!routeTo? ()=> router.replace(routeTo) : ()=> action() }
        className={`
            ${size === 'full' && 'w-full'}
            ${size === 'medium' && 'w-1/2'}
            ${size === 'short' && 'w-1/4'}
            ${containerStyle}
            ${bgColor? bgColor : 'bg-black'}
            h-12 rounded-xl drop-shadow-lg px-5 justify-center items-center
        `}
        style={{}}
    >
      { leftIcon && leftIcon }
      <Text className={`${textStyle} ${!textStyle && 'text-base'} font-outfit-regular text-center text-white`}> { title } </Text>
      {rightIcon && rightIcon }
    </TouchableOpacity>
  )
}