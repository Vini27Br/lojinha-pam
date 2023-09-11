import React from 'react';

import { useFonts, ComicNeue_400Regular,
   ComicNeue_400Regular_Italic,
    ComicNeue_700Bold_Italic  }
     from '@expo-google-fonts/comic-neue';

import { SafeAreaView,  StatusBar } from 'react-native';
import Catalogo from './src/pages/catalogo';

export default function App() {

  const [fonteCarregada] = useFonts({
    "ComicRegular" : ComicNeue_400Regular,
    "ComicRegularI": ComicNeue_400Regular_Italic,
    "ComicBold": ComicNeue_700Bold_Italic
  })

  if (!fonteCarregada){
    return null;
  }

  return (
    <SafeAreaView>
        <StatusBar/>
    <Catalogo/>
    </SafeAreaView>
  )}
