import React from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import colores from '../constants/colores';
import Botonsote from '../components/Botonsote';

const Overscreen = props => {
    return (
      <ScrollView> 
    <View style = {Estilo.screen}>
        <TitleText> Game Over! </TitleText>
        <View style={Estilo.imageContainer} > 
        <Image 
        //source = {require('../assets/success.png')} 
        source ={{uri: 'https://mir-s3-cdn-cf.behance.net/user/276/a498de788467.5609f9f22e55a.png'}}
        style ={Estilo.image}
        resizeMode = 'cover' />
        </View>
        <View style = {Estilo.resultContainer}> 
        <BodyText style={Estilo.resultText} > 
        se necesitaron <TitleText style={Estilo.resaltar} > {props.numeroRonda}</TitleText> rondas 
         para adivinar el numero <TitleText style={Estilo.resaltar}> {props.numeroUser}</TitleText> 
         </BodyText>
         </View>
        <Botonsote  onPress = {props.onNuevo}>
          TRY AGAIN
        </Botonsote>
     </View>
     </ScrollView>
    );
};

const Estilo = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image : {
      width :'100%',
      height :'100%'
    }, 
    resaltar :{
      color : colores.primario
    },
    resultContainer :{
      marginHorizontal : 30,
      marginVertical :Dimensions.get('window').height / 40,
      fontFamily : 'open-sans-bold'
    }, 
    resultText:{
      textAlign:'center',
      fontSize : Dimensions.get('window').height < 400 ? 16 : 20
    },
    imageContainer :{
      width : Dimensions.get('window').width * 0.7 ,
      height : Dimensions.get('window').width * 0.7 ,
      borderRadius : Dimensions.get('window').width * 0.7 / 2 ,
      borderWidth : 3,
      borderColor: 'black',
      overflow : 'hidden',
      marginVertical : Dimensions.get('window').height / 20
    }
  });

export default Overscreen;