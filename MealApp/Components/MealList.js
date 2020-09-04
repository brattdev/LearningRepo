import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';


const MealList = props => {
    const renderMealItem = itemData => {
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
                      mealId : itemData.item.id
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