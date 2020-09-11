import React, {useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import DefaultText from '../Components/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import { toggleFavorite} from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={Estilo.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};


const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={Estilo.image} />
      <View style={Estilo.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={Estilo.title}>Ingredientes</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={Estilo.title}>Pasos a seguir</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};


MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  
  return {
    headerTitle: mealTitle,
    headerRight: () => {
        return (

      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favoritos"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline' }
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )}
  };
};

const Estilo = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});


export default MealDetailScreen;