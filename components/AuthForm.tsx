import { Text, TextInput,  View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from './ui/Button';
import useStore from '@/states/store';
import { FormField, FormSchema } from '@/schema/authFormSchema';
import { createAccount, SignInAuth } from '@/config/firebaseAuth';

const AuthForm = () => {
  // States from store
  const isMember = useStore((state)=> state.isMember);
  const updateIsMember = useStore((state)=> state.updateIsMember);

  //Form Schema
  const {
    control, 
    handleSubmit,
    setError, 
    formState:{errors, isSubmitting}
  } = useForm<FormField>({
    resolver: zodResolver(FormSchema)
  });

  //handlers
  const handleReg = ()=>{updateIsMember(!isMember)}

  const onSubmit:  SubmitHandler<FormField> = (data)=>{
    console.log(JSON.stringify(data));
    // const {email, password, fullname, phone} = data;
    // if(!isMember){ 
    //   await createAccount(email, password); 
    //   return;
    // }

    // if(isMember){
    //   await SignInAuth(email, password); 
    //   return;
    // }
  }
  
  return (
    <View  className='gap-6 mb-5'>

        {!isMember && (
          <View>
            <Text className={styles.inputTitle}>Fullname</Text>
            <Controller
            control={control}
            name='fullname'
            rules={{ required: !isMember? true:false, }}
            render={({field: {onChange, onBlur, value}})=>(
                <TextInput 
                  placeholder='John Doe'
                  className={styles.input}
                  placeholderTextColor='#c2c2c2'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}      
          />
          {errors.fullname && (<Text className={styles.inputError}>{errors.fullname.message}</Text>)}
        </View>
        )}

        {!isMember && (
          <View>
            <Text className={styles.inputTitle}>Phone</Text>
            <Controller
            control={control}
            rules={{ required: !isMember? true:false, }}
            name='phone'
            render={({field: {onChange, onBlur, value}})=>(
                <TextInput 
                  keyboardType='numeric'
                  placeholder='080xxxxxxxx'
                  className={styles.input}
                  placeholderTextColor='#c2c2c2'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}      
          />
          {errors.phone && (<Text className={styles.inputError}>{errors.phone.message}</Text>)}
        </View>
        )}

        <View>
          <Text className={styles.inputTitle}>Email</Text>
          <Controller
            control={control}
            name='email'
            rules={{ required: true, }}
            render={({field: { onChange, onBlur, value}})=>(
                <TextInput 
                  placeholder='example@gmail.com'
                  className={styles.input}
                  placeholderTextColor='#c2c2c2'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}   
          />
          {errors.email && (<Text className={styles.inputError}>{errors.email.message}</Text>)}
        </View>

        <View>
          <Text className={styles.inputTitle}>Password</Text>
          <Controller
            control={control}
            name='password'
            rules={{ required: 'Email is required', }}
            render={({field: {onChange, onBlur, value}})=>(
                <TextInput 
                  placeholder='Password'
                  className={styles.input}
                  placeholderTextColor='#c2c2c2'
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}      
          />
          {errors.password && (<Text className={styles.inputError}>{errors.password.message}</Text>)}
        </View>

        {/* Action buttons */}
        <View>
          <Button 
            title={isMember? 'Sign in': 'Register'} 
            classname='mb-5 mt-10'
            handlePress={handleSubmit(onSubmit)}
            // disable={errors? true:false}
          />
          
          <Button 
            title={`${isMember? 'Sign in': 'Register'} with Google` }
            classname='mb-2' 
            color='light'
            icon={<AntDesign name="google" size={18} color="black"/>}
          />

        </View>

        <Text className='text-center text-xs'>
          {isMember? "Don't have an account?": "Have an accout?" }
          <Text 
            className='underline font-outfit-semibold py-3' onPress={handleReg}>{isMember? ' Register ' : ' Sign in '}</Text>
        </Text>

    </View>
  );
}

export default AuthForm;

const styles = {
  input: 'bg-zinc-100 p-3 rounded-xl text-zinc-700 font-outfit border-zinc-200 border' ,
  inputTitle: 'text-zinc-700 font-outfit text-sm mb-1',
  inputError: 'text-red-500 text-xs mt-1'
}