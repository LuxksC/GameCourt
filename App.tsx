import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { useFonts } from 'expo-font'

import * as SplashScreen from 'expo-splash-screen'


import { SignIn } from './src/screens/SignIn';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

// esse componente manda o usuário para SplashScreen do aplicativo
// usamos como forma de só rodar o app após o carregamento das fontes
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <Background onLayout={onLayoutRootView}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {/* <SignIn/> */}
      {/* <Home/> */}
      <Routes/>
    </Background>
  );
}
