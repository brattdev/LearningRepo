import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';
import {useSelector} from 'react-redux';


const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);
        return (
          <MealItem 
          title ={itemData.item.title} 
          duration = {itemData.item.duration}
          complexity = {itemData.item.complexity} 
          affordability = {itemData.item.affordability}
          image = {itemData.item.imageUrl}
          onSelectMeal = {() =>{
              props.navigation.navigate({
                  routeName : 'MealDetail',
                  params : {
                      mealId : itemData.item.id,
                      mealTitle : itemData.item.title,
                      isFav : isFavorite
                  } 
                });
          } }
          />
        );
    };


    return (
    <View style={Estilo.lista} >
    <FlatList 
    data = {props.listData} 
    keyExtractor = {(item, index) => item.id} 
    renderItem={renderMealItem}
    style ={{width : '100%'}} />
    </View>
    )
};

const Estilo = StyleSheet.create({
    lista :{
        flex: 1,
        alignItems : 'center',
        justifyContent :'center',
        padding : 15
    }
});
export default MealList;