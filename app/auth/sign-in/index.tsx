import { RHFInputs } from '@/components/FormField';
import { ParallelScroll, ThemedText, ThemedView } from '@/components/Theme';
import ButtonUi from '@/components/ui/ButtonUi';
import ImageUI from '@/components/ui/ImageUI';
import { signInAuth } from '@/config/authHandler';
import { formSignIn } from '@/constants/forms';
import { imageMap } from '@/constants/images';
import { loginSchema, signInSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form'

export default function index() {
  const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<signInSchema>({
      mode: 'all',
      resolver: zodResolver(loginSchema),
    });

    const onSubmit = handleSubmit(async({email, password}) => {
      const auth = await signInAuth({
              email: email,
              password: password,
            });

      if (auth) { 
        router.replace('/(tabs)/trips')
      }
    })

  return (
    <ParallelScroll type='container'>
        <ThemedText type='title' layout='text-5xl mt-5'>Welcome back!</ThemedText>
        <ThemedText layout='font-outfit-medium text-base'>Your travel, simplified</ThemedText>

        <ThemedView type='plain' layout='mt-10'>
          <ThemedView type='plain' layout='mt-5'>
            {
            formSignIn?.map( ({id, name, label, error, errMessage}: any) => (
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
            title='Sign in'
            containerStyle='mt-5'
            bgColor='bg-blue-500'
            action={ onSubmit }
          />

          <ThemedText layout='text-center font-outfit-regular mt-4'>
            Don&apos;t have an account? 
            <ThemedText type='link' routeTo='/auth/sign-in' layout='font-outfit-semibold text-blue-500 underline'> Sign up</ThemedText>
          </ThemedText>

            {/* or */}
          <ThemedView type='plain' layout='flex-row justify-center items-center my-4'>
            <ThemedView type='plain' layout='h-[1px] w-20 bg-neutral-300 mr-3'/>
            <ThemedText layout='text-center font-outfit-medium text-neutral-300'>Or</ThemedText>
            <ThemedView type='plain' layout='h-[1px] w-20 bg-neutral-300 ml-3'/>
          </ThemedView>

          {/* Sign up with google */}
          <ButtonUi 
            routeTo={'/'}
            title='Continue to Google'
            leftIcon={(<ImageUI source={imageMap.google} size='icon' otherStyles='absolute left-5'/>)}
            containerStyle='flex-row relative border-2 border-neutral-300'
          />
        </ThemedView>
    </ParallelScroll>
  )
}