import { ScrollView, type ScrollViewProps } from 'react-native'

type ParallelScrollProps = ScrollViewProps & {
    layout?: string,
    type?: 'default' | 'flexCenter' | 'container' | 'plain'
}

export default function ParallelScroll({
    style,
    layout,
    type = 'default',
    ...otherProps
}: ParallelScrollProps){
   return  <ScrollView className={`${getViewClasses(type)} ${layout}`} {...otherProps} />
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