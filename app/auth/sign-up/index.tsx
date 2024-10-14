import React from 'react'
import { useForm } from 'react-hook-form';
import { registerSchema, signUpSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSignUp } from '@/constants/forms';
import { RHFInputs } from '@/components/FormField';
import { imageMap } from '@/constants/images';
import { signUpAuth } from '@/config/authHandler';
import { ButtonUi, ImageUI } from '@/components/ui';
import { ParallelScroll, ThemedText, ThemedView } from '@/components/Theme';
import { useRouter } from 'expo-router';


export default function index() {
  const router = useRouter();
  const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<signUpSchema>({
      mode: 'all',
      resolver: zodResolver(registerSchema),
      defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
    });

    const onSubmit = handleSubmit(async ({email, password, firstName, lastName}) => {
      const auth = await signUpAuth({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      if (auth) { 
        router.replace('/(tabs)/trips')
      }
    });

  return (
      <ParallelScroll type='container'>
        <ThemedText type='title' layout='mt-5 text-3xl'>Create account</ThemedText>
        <ThemedText layout='text-neutral-400 my-3 w-[300px] font-outfit-medium text-lg'>
          Plan Your Dream Trip with Ease and Convenience. Sign Up Now!
        </ThemedText>
        <ThemedView type='plain' >

          <ThemedView type='plain' layout='mt-5'>
            {
            formSignUp?.map( ({id, name, label, error, errMessage}: any) => (
              <ThemedView type='plain' key={id}>
                <RHFInputs 
                  control={control} 
                  name={name} 
                  label={label}
                  error={error(errors)} 
                  errMessage={errMessage(errors)}
                  otherStyle='mb-3 rounded-3xl'
                />
              </ThemedView>
            ))}
          </ThemedView>

          <ButtonUi 
            title='Create account'
            containerStyle='mt-5'
            bgColor='bg-blue-500'
            action={ onSubmit }
          />

          <ThemedText layout='text-center font-outfit-regular mt-4'>
            Already have an account? 
            <ThemedText type='link' routeTo='/auth/sign-in' layout='font-outfit-semibold text-blue-500 underline'> Sign in</ThemedText>
          </ThemedText>

            {/* or */}
          <ThemedView type='plain' layout='flex-row justify-center items-center my-4'>
            <ThemedView type='plain' layout='h-[1px] w-20 bg-neutral-300 mr-3'/>
            <ThemedText layout='text-center font-outfit-medium text-neutral-300'>Or</ThemedText>
            <ThemedView type='plain' layout='h-[1px] w-20 bg-neutral-300 ml-3'/>
          </ThemedView>

          {/* Sign up with google */}
          <ButtonUi 
            title='Continue to Google'
            leftIcon={(<ImageUI source={imageMap.google} size='icon' otherStyles='absolute left-5'/>)}
            containerStyle='flex-row relative border-2 border-neutral-300 '
          />
        </ThemedView>
      </ParallelScroll>
  )
}