import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriaScreen from '../Screens/CategoriaScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import FiltroScreen from '../Screens/FiltroScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../contants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritoScreen from '../Screens/FavoritoScreen';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import {} from 'react-native-paper';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primario : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primario,
    headerTitle: 'A Screen'
  };

const MealsNavigator = createStackNavigator (
    {
    Categories: {
        screen : CategoriaScreen
    },    
    CategoryMeal : { 
        screen: CategoryMealScreen
    },
    MealDetail : MealDetailScreen
}, 
{
    defaultNavigationOptions : defaultStackNavOptions
});


const FavNavigator = createStackNavigator({
    Favorites: FavoritoScreen,
    MealDetail : MealDetailScreen,
}, {
    defaultNavigationOptions : defaultStackNavOptions
});


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primario
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.tercero
    }
  }
};


const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primario
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.tercero
        }
      });

FiltersNavigator = createStackNavigator ({
    Filters : FiltroScreen});

const MainNavigator = createDrawerNavigator ({
    MealsFav: MealsFavTabNavigator,
    Filters :FiltersNavigator
});

export default createAppContainer(MealsFavTabNavigator);