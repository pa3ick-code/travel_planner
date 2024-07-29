import { Icon } from '@expo/vector-icons/build/createIconSet';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
    title: string,
    handlePress?: ()=>void,
    color?: 'dark' | 'light' | 'blue',
    classname?: string,
    icon?: any,
    disable?: boolean
}

const Button = ({title, icon, handlePress, color, classname, disable}: ButtonProps) => {
  return (
    <TouchableOpacity 
      className={`
          ${color === 'dark'? styles.btndark
          :color === 'light'? styles.btnlight
          :color === 'blue'? styles.btnblue
          :styles.btndark}

          ${classname}
          ${icon && styles.btn}
      `} 
      onPress={handlePress}
      disabled={disable}
    >

        <Text 
          className={`
            ${styles.btnText} 
            ${color === 'dark'? 'text-white' 
              : color === 'light'?  
              'text-zinc-700 font-outfit-semibold'
              :'text-white'}`
            }
        >
          {title}
        </Text>
        {icon && icon}

    </TouchableOpacity>
  );
}

export default Button;


const styles = {
    btn: 'flex-row justify-center item-center gap-x-2 mx-auto  w-full',
    btndark: 'bg-black rounded-xl py-4 ',
    btnlight: 'bg-white rounded-xl py-4 border border-zinc-400' ,
    btnblue: 'bg-blue-500 rounded-xl py-4',
    btnText: 'font-outfit-medium text-center',
}
