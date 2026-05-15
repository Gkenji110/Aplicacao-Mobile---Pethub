import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOnboard() {
      const onboard = await AsyncStorage.getItem("onboard");

      if (onboard === "feito") {
        router.replace("/dashboard");
      }

      setLoading(false);  
    }

    loadOnboard();
  }, []);

  async function onboardCompleted() {
    await AsyncStorage.setItem("onboard", "feito");
    router.replace("/dashboard");
  }

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-surface">
        <ActivityIndicator size={64} color="#02C39A" />
      </View>
    );
  }

  return (
    <SafeAreaView className="p-8 flex-1 items-center bg-surface gap-4">
      <View className="flex-1 items-center justify-center gap-6 w-full">
        <Text className="text-6xl">🐾</Text>
        <Text className="text-5xl font-black tracking-tighter text-on-surface uppercase font-headline">
          PetHub
        </Text>
        <Text className="text-xl text-on-surface-variant text-center font-body">
          Acompanhe a saúde do seu pet de forma contínua e preventiva.
        </Text>
      </View>

      <TouchableOpacity
        onPress={onboardCompleted}
        className="bg-primary w-full rounded-full py-4"
      >
        <Text className="text-2xl text-center font-bold text-white font-headline">
          Começar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardScreen;