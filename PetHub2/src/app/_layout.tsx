import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from "@expo-google-fonts/lexend";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { PetProvider } from "@/context/PetContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Lexend_400Regular,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </PetProvider>
  );
}