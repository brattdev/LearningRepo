import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import Colors from '../contants/Colors';


const FilterSwitch = props => {
    return (
      <View style={Estilo.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primario }}
          thumbColor={Platform.OS === 'android' ? Colors.secundario : ''}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };


  const FiltroScreen = props => {
    const { navigation } = props;
  
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
  
    const saveFilters = useCallback(() => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        isVegetarian: isVegetarian
      };
  
      console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);
  
    useEffect(() => {
      navigation.setParams({ save: saveFilters });
    }, [saveFilters]);
  
    return (
      <View style={Estilo.screen}>
        <Text style={Estilo.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten-free"
          state={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          state={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
      </View>
    );
  };


  FiltroScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Filtros de comidita',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navData.navigation.getParam('save')}
          />
        </HeaderButtons>
      )
    };
  };
  


const Estilo = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
      },
      filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
      }
    });

export default FiltroScreen;