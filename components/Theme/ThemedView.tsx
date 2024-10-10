import { View, type ViewProps } from 'react-native'

type ThemedViewProps = ViewProps & {
    layout?: string,
    type?: 'default' | 'flexCenter' | 'container' | 'plain'
}

export default function ThemedView({
    style,
    layout,
    type = 'default',
    ...otherProps
}: ThemedViewProps){
   return  <View className={`${getViewClasses(type)} ${layout}`} {...otherProps} />
}


const getViewClasses = (type: string) => {
    switch (type) {
        case 'flexCenter':
            return 'justify-center items-center';
        case 'container':
            return `px-5 pt-20 flex-1 bg-white`;
        case 'plain':
            return '';
        default:
            return 'flex-1 bg-white'
    }
}