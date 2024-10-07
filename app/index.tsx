
import ButtonUi from "@/components/ui/ButtonUi";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <Image source={ require('../assets/images/banner.jpg') } className="w-full h-2/3" />

      <View className=" bg-white dark:bg-neutral-950 px-5 pt-17 -mt-20 h-1/3 rounded-tr-3xl rounded-tl-3xl justify-center items-center ">
        <Text className="font-outfit-semibold text-2xl text-center pb-2">Plan. Book. Explore.</Text>
        <Text className="text-center font-outfit-regular text-sm pb-7">
          Discover new destinations, book flights and hotels, and organize your trips all in one place. Plan Your Dream Trip with Ease and Convenience Today.
        </Text>

        <ButtonUi title="Get Started" routeTo="/(tabs)/trips"/>
      </View>
    </View>
  );
}
