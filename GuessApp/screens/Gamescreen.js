import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView, FlatList, Dimensions} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Botonsote from '../components/Botonsote';
import {Ionicons} from '@expo/vector-icons';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  const renderList = (listLength, itemData) => (
  <View 
  style = {Estilo.listItem}>
  <BodyText> # {listLength - itemData.index} </BodyText> 
  <BodyText> {itemData.item} </BodyText>
  </View> );
  

  const Gamescreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.eleccion);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuess, setpastGuess] = useState ([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { eleccion, onOver } =  props;

    useEffect(() => {
        if (currentGuess === eleccion) {
            onOver(pastGuess.length);
        }
    }, [currentGuess, eleccion, onOver ] );

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.eleccion)
        || (direction === 'greater' && currentGuess > props.eleccion)
        ){
        Alert.alert('Uy quieto', 'Esto está mal', [
            {text: 'Sorry!', style : 'cancel'}
    ]);
    return;
    }
    if (direction === 'lower') {
        currentHigh.current = currentGuess;
    } else {
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current, currentHigh.current, currentGuess);

    setCurrentGuess(nextNumber);
    //setRounds(currentRounds => currentRounds + 1);
    setpastGuess(currentpastGuess => [nextNumber.toString(), ...currentpastGuess]);
    };
  
    return (
      <View style={Estilo.screen}>
        <Text>Oponente Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={ Estilo.botonContainer }>
          <Botonsote  onPress={nextGuessHandler.bind(this, 'lower')} >
            <Ionicons name="md-remove" size = {24} color = 'white' />
          </Botonsote>
          <Botonsote onPress={nextGuessHandler.bind(this, 'greater')} >
          <Ionicons name="md-add" size = {24} color = 'white' />
            </Botonsote>
        </Card>
        <View style={Estilo.listContainer} > 
       {/* 
       <ScrollView contentContainerStyle={Estilo.list} >
          {pastGuess.map((guess, index) => renderList(guess, pastGuess.length - index))}
        </ScrollView>
       */}
       <FlatList 
       keyExtractor={item => item } 
       data = {pastGuess} 
       renderItem ={ renderList.bind(this,pastGuess.length)}
       contentContainerStyle={Estilo.list} 
       />
        </View>
      </View>
    );
  };
const Estilo = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    botonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: Dimensions.get('window').height > 600 ? 20 : 5 ,
      width: 500,
      maxWidth: '93%'
    },
    listItem :{
      borderColor : '#db7093',
      borderWidth : 1,
      padding: 20,
      marginVertical : 10,
      backgroundColor : 'white',
      flexDirection : 'row',
      justifyContent : 'space-between',
      width : '100%'
    },
    listContainer : {
      width : Dimensions.get('window').width > 350 ? '60%' : '80%',
      flex:1
    }, 
    list:{
      justifyContent : 'flex-end',
      //esto va en un scroll 
      flexGrow : 1
    }
  });

export default Gamescreen;