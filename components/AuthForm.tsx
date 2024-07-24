import { Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Button from './ui/Button';

const AuthForm = () => {
  return (
    <View className={styles.wrapper}>

        <View>
          <Text className={styles.inputTitle}>Email</Text>
          <TextInput 
            placeholder='example@gmail.com'
            className={styles.input}
            placeholderTextColor='#c2c2c2'
          />
        </View>

        <View>
          <Text className={styles.inputTitle}>Password</Text>
          <TextInput 
            placeholder='password'
            className={styles.input}
            placeholderTextColor='#c2c2c2'
            secureTextEntry
          />
        </View>

        <View className={styles.btnContainer}>
          <Button title='Sign in' classname='mb-5'/>
          <Button 
            title='Sign in with Google' 
            classname='mb-5' 
            color='light'
            icon={<AntDesign name="google" size={18} color="black"/>}
          />
        </View>

    </View>
  );
}

export default AuthForm;

const styles = {
  wrapper: 'gap-6',
  input: 'bg-zinc-100 p-3 rounded-xl text-zinc-700 font-outfit border-zinc-200 border' ,
  button: '',
  inputTitle: 'text-zinc-700 font-outfit text-sm mb-1',
  btnContainer: ''
}