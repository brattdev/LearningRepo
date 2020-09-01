import React from 'react';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriaScreen from '../Screens/CategoriaScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../contants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritoScreen from '../Screens/FavoritoScreen';
import { Ionicons } from '@expo/vector-icons';

//import { createDrawerNavigator } from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator ({
    Categories: {
        screen : CategoriaScreen
    },    
    CategoryMeal : { 
        screen: CategoryMealScreen,
    },
    MealDetail : MealDetailScreen
}, {
    defaultNavigationOptions : {
    headerStyle : {
        backgroundColor : Colors.primario
      },
    headerTintColor : 'white'
}
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals : {screen :MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return (<Ionicons name= 'ios-restaurant' size={25} color ={tabInfo.tintcolor} /> );
        }
    }},
    Favorites : { screen :FavoritoScreen, navigationOptions:{
        tabBarIcon: (tabInfo) => {
            return (<Ionicons name= 'ios-star' size={25} color ={tabInfo.tintcolor} /> );
        }
    }}
}, {
    tabBarOptions : {
        activeTintColor : Colors.tercero
    }
});

export default createAppContainer(MealsNavigator);