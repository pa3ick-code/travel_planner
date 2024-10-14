
import { ThemedText } from "@/components/Theme/ThemedText";
import ThemedView from "@/components/Theme/ThemedView";
import ButtonUi from "@/components/ui/ButtonUi";
import { auth } from "@/config/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import {  View, Image, ActivityIndicator } from "react-native";


export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/(tabs)/trips')
      } else {
        console.log("User is not signed in");
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    loading === true? (
      <ThemedView type="flexCenter">
        <ActivityIndicator size={30} color='#0a0a0a'/>
      </ThemedView>
    ):(
      <ThemedView>
        <Image source={ require('../assets/images/banner.jpg') } className="w-full h-2/3" />

        <View className=" bg-white px-5 pt-17 -mt-20 h-[43%] rounded-tr-3xl rounded-tl-3xl justify-center items-center" >
          <ThemedText type="subtitle" layout="py-2">Plan. Book. Explore.</ThemedText>
          <ThemedText layout="text-center pb-8 text-neutral-500">
            Discover new destinations, book flights and hotels, and organize your trips all in one place. Plan Your Dream Trip with Ease and Convenience Today.
          </ThemedText>

          <ButtonUi 
            title="Get Started" 
            routeTo="/auth/sign-up" 
            textStyle="font-outfit-medium text-base"
            bgColor="bg-blue-500"
            containerStyle="justify-center items-center"
          />
        </View>
      </ThemedView>
    )
  );
}
