import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../Components/CategoryGrid';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';


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


CategoriaScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Categorias de Comidita',
    headerLeft : () => {
        return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}  > 
            <Item  
            title ="Menu" 
            iconName="ios-menu"
            onPress = {() =>{
                navData.navigation.toggleDrawer();
            } } />
            </HeaderButtons> )
    }};

};


const Estilo = StyleSheet.create({
    screen :{
        flex: 1,
        alignItems : 'center',
        justifyContent :'center'
    }
});
export default CategoriaScreen;