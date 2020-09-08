import React, {useState} from 'react';
import { useFonts }  from 'expo-font'; 
import {AppLoading} from 'expo';
import ShopNavigator from './navigation/ShopNavigator';
import {enableScreens } from 'react-native-screens';
import {createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux';

import  productsReducer  from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';


enableScreens();

const rootReducer = combineReducers({
    products: productsReducer,
    cart : cartReducer,
    orders : ordersReducer
  });
  
  const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
      'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
      return <AppLoading/>
  } else {
      return (
        <Provider 
        store ={store} >  
             <ShopNavigator/>  
        </Provider> ); 
  }
}


