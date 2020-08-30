import React, {useState, useEffect} from 'react';
import {
  View, 
  StyleSheet, 
  Button, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
 } from 'react-native';
import Card from '../components/Card';
import colores  from '../constants/colores';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Botonsote from '../components/Botonsote';

const Startscreen = props => {
    const [valorentered, setvalorentered] = useState('');
    const [confirma, setconfirma] = useState(false);
    const [numeroelegido, setnumeroelegido] = useState();
    const [botonWidth, setbotonWidth ] = useState (Dimensions.get('window').width / 4);
    
 
    const solonumeroHandler = inputText => {
        setvalorentered(inputText.replace(/[^0-9]/g, ''));
      };
    const resetHandler = () => {
        setvalorentered('');
        setconfirma(false); 
    };

    useEffect (() => {   
      const updateLayout = () => {
      setbotonWidth(Dimensions.get('window').width / 4);
     };
     Dimensions.addEventListener('change', updateLayout);
     return () => {
       Dimensions.removeEventListener('change', updateLayout);
     } ;
    });


    const confirmHandler = () => {
        const chosennumber = parseInt(valorentered);
        if (isNaN(chosennumber) || chosennumber <= 0 || chosennumber > 99) {
            Alert.alert(
              "Invalid number!",
              "Number has to be a number between 1 and 99.",
              [{ text: "Okay", style: "destructive", onPress: resetHandler }]
            );
            return;
        }
        setconfirma(true);
        setnumeroelegido(chosennumber);
        setvalorentered('');
        Keyboard.dismiss();
    };
    let confirmaoutput;

    if (confirma) {
      confirmaoutput = (
        <Card style={Estilo.summaryContainer}>
          <BodyText>Seleccionaste</BodyText>
          <NumberContainer>{numeroelegido}</NumberContainer>
          <Botonsote onPress = {() => props.onStartgame(numeroelegido)} >
            START GAME! 
          </Botonsote>
        </Card>
      );
    }
  
    return (
      <ScrollView> 
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset = {30} >
        <TouchableWithoutFeedback 
        onPress = {() => {
            Keyboard.dismiss();
        }}>
      <View style = {Estilo.pantalla}>
          <TitleText style = {Estilo.titulo} > Empieza un nuevo juego! </TitleText>
          <Card style = {Estilo.inputContainer}>
              <BodyText> Selecciona un número </BodyText>
               <Input 
               style = {Estilo.input} 
               blurOnSubmit
               autoCapitalize="none"
               autoCorrect={false}
               keyboardType="number-pad"
               maxLength={2}
               onChangeText = {solonumeroHandler}
               value = {valorentered} 
               />
                 <View style = {Estilo.botonContainer}>
                    <View style = {{width : botonWidth}}> 
                      <Button title = "Reset" onPress ={resetHandler} color ={colores.primario} /> 
                    </View>
                    <View style = {{width : botonWidth}}>
                      <Button title = "Confirm" onPress = {confirmHandler} color ={colores.secundario} />  
                    </View>
                 </View>
         </Card>
         {confirmaoutput}
      </View>
      </TouchableWithoutFeedback> 
      </KeyboardAvoidingView>
      </ScrollView>
      );
};

const Estilo = StyleSheet.create({
     pantalla : {
         flex :1,
         padding : 10,
         alignItems : 'center'
     },
     botonContainer : {
         flexDirection : 'row',
         width : '100%',
         justifyContent :'space-between',
         paddingHorizontal : 15
     },
     inputContainer : {
         width : '80%',
         minWidth : 300,
         maxWidth:'90%',
         alignItems : 'center'
     },
     titulo : {
         fontSize : 20,
         marginVertical : 10,
         fontFamily : 'open-sans-bold'
     },
     //boton : {
      //   width : Dimensions.get('window').width / 4   
     //},
     input : {
         width : 50,
         textAlign : 'center'
     },
     summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
      }

});

export default Startscreen;

