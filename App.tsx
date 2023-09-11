import React from 'react';

import { SafeAreaView,  StatusBar } from 'react-native';
import Catalogo from './src/pages/catalogo';

export default function App() {
  return (
    <SafeAreaView>
        <StatusBar/>
    <Catalogo/>
    </SafeAreaView>
  )}