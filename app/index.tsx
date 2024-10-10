
import { ThemedText } from "@/components/Theme/ThemedText";
import ThemedView from "@/components/Theme/ThemedView";
import ButtonUi from "@/components/ui/ButtonUi";
import {  View, Image } from "react-native";

export default function Index() {
  return (
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
  );
}
