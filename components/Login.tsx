import { useRouter } from 'expo-router';
import { View, Text, Image} from 'react-native';

import Button from './ui/Button';

const Login = () => {
    const  router = useRouter();
  return (
    <View>
      <Image 
        source={require('@/assets/images/login.jpg')} 
        className={styles.image}
    />
     
     <View className={styles.textContainer}>
        <Text className={styles.title}>Travel Planner</Text>
        <Text className={styles.desc}>Experience the future of travel planning. Login to 
            access personalized itineraries, expert recommendations, and seamless booking.
        </Text>

        <Button
          title='Get started'
          handlePress={()=> router.push('/auth')}
        />
     </View>
    </View>
  );
}

export default Login;


// Styles
const styles = {
    image: 'w-full h-[540px] object-cover',
    textContainer: 'rounded-t-3xl -mt-10 bg-white py-10 px-5 h-full',
    title: 'font-outfit-xbold text-3xl text-center mt-10',
    desc: 'font-outfit text-center mb-14 mt-2 text-sm text-zinc-500 text-sm',
}
