import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';

import { AuthForm } from '@/components';

const Auth = () => {
  return (
    <View className={styles.wrapper}>
      <Stack.Screen options={{
        headerShadowVisible: false,
        headerTitle: '',
        headerBackVisible: false,
      }}/>

      <View className={styles.logoWrapper}>
        <Image source={require('@/assets/images/logo.png')} className={styles.logo}/>
        <Text className={styles.logoTitle}> Travel Planner</Text>
      </View>

      <View>
        <Text className={styles.welcomeMain}>Welcome Back</Text>
        <Text className={styles.welcomeSub}>You've been missed!</Text>
      </View>

      <View>
          <AuthForm />
      </View>
    </View>
  );
}

export default Auth;

const styles = {
  wrapper: 'bg-white flex-grow flex-shrink basis-o bg-white px-5',
  logoWrapper:  'flex-row justify-center items-end gap-2 mb-10',
  logo: 'w-10 h-10 ',
  logoTitle: 'font-outfit-bold text-2xl',
  welcomeMain: 'text-4xl font-outfit-bold text-zinc-400',
  welcomeSub: 'text-2xl font-outfit-medium text-zinc-400 mt-2 mb-10',
}
