import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Href, useRouter } from 'expo-router'

type ButtonUiProps = {
    routeTo: Href<string | object>,
    icon?: any,
    color?: string,
    textColor?: string,
    title?: string,
    size?: 'full' | 'medium' | 'short'
}

export default function ButtonUi({
    routeTo,
    icon,
    color,
    textColor,
    title = 'Enter text here',
    size = 'full',
}: ButtonUiProps) {
    const  router = useRouter()

  return (
    <TouchableOpacity
        onPress={()=> router.replace(routeTo)}
        className={`
            ${size === 'full' && 'w-full'}
            ${size === 'medium' && 'w-1/2'}
            ${size === 'short' && 'w-1/4'}
            ${color}
            h-12 justify-center items-center rounded-full bg-neutral-900 dark:bg-neutral-200
        `}
    >
      <Text className={`${textColor} text-neutral-200 dark:text-neutral-900 text-base font-outfit-Regular`}> { title } {icon} </Text>
    </TouchableOpacity>
  )
}