import React from 'react';
import { Platform, Text } from 'react-native';
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
      tabBarColor: Colors.tercero,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favs!</Text>
        ) : (
          'Favorites'
        )
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


const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltroScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);