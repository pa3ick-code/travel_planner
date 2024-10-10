import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Outfit-Light': require('./../assets/fonts/Outfit-Light.ttf'),
    'Outfit-Regular': require('./../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-SemiBold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-ExtraBold': require('./../assets/fonts/Outfit-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if(!loaded && !error) { return null };
  
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
}
