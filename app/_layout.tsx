import {
  Kanit_400Regular, Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (


    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#063197"
        },
        headerTitleStyle: {
          fontFamily: "kanit_700bold",
          fontSize: 20,
          color: '#fff'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="run"
        options={{
          title: 'Run tracker',
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          title: 'Add run',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Run detail',
        }}
      />
    </Stack>
  );
}
