import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Startscreen from './screens/Startscreen';
import Gamescreen from './screens/Gamescreen';
import Overscreen from './screens/Overscreen';
import { useFonts }  from 'expo-font'; 
import {AppLoading} from 'expo';


export default function App() {

  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
 
  const [ fontLoaded, setFontLoaded ] = useState(false);
 
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds]= useState(0);
  const [dataLoad, setDataLoad] = useState(false);



  const nuevoJuegoHandler = () => {
    setguessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const overHandler = numRounds => {
    setguessRounds(numRounds);
  };

  let content = <Startscreen onStartgame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <Gamescreen eleccion={userNumber} onOver={overHandler}/>;
  } else if (guessRounds > 0) {
    content = <Overscreen 
    numeroRonda = {guessRounds} 
    numeroUser ={userNumber} 
    onNuevo = {nuevoJuegoHandler}/>;
  }

  return (
    <View style={Estilo.pantalla}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}


const Estilo = StyleSheet.create({
  pantalla: {
    flex: 1
  }
});
