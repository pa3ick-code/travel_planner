import { Href, useRouter } from 'expo-router';
import { Text, type TextProps } from 'react-native';


export type ThemedTextProps = TextProps & {
  layout?: string,
  routeTo?: Href<string | object>,
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'error';
};

export function ThemedText({
  style,
  layout,
  routeTo,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const router = useRouter();

  return (
    <Text
       className={`${getTextClasses(type)} ${layout} `}
       onPress={() => {
        type === "link" && router.replace(routeTo!);
       }}
      {...rest}
    />
  );
}

const getTextClasses = (type: string) => {
  switch (type) {
    case 'title':
      return 'text-4xl font-outfit-bold ';
    case 'defaultSemiBold':
      return 'text-base leading-6 font-outfit-semibold';
    case 'subtitle':
      return 'text-2xl font-outfit-bold';
    case 'link':
      return 'text-base leading-7 text-[#0a7ea4]';
    case 'error':
      return 'text-sm text-red-500 font-outfit-regular'
    default:
      return 'text-base leading-6 font-outfit-regular';
  }
};
