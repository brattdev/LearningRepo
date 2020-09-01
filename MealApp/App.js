import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts }  from 'expo-font'; 
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({
      'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
      return <AppLoading/>
  } else {
      return (
      <MealsNavigator/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
