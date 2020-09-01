import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../Components/CategoryGrid';


const CategoriaScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGrid 
            title ={itemData.item.title} 
            color = {itemData.item.color}
            onSelect = {() => {
                props.navigation.navigate({ routeName : 'CategoryMeal', params:{
                    categoryId : itemData.item.id
                } 
            });
            } }
             />
        );
    };
    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data ={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} 
        />  
    );
};

CategoriaScreen.navigationOptions = {
    headerTitle: 'Categorias de Comida'

};

const Estilo = StyleSheet.create({
    screen :{
        flex: 1,
        alignItems : 'center',
        justifyContent :'center'
    }
});
export default CategoriaScreen;