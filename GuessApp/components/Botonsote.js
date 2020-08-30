import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Botonsote = props => {
    return (
    <TouchableOpacity onPress = { props.onPress } >
        <View style={Estilo.botonsote} >
            <Text style={Estilo.botonText} > {props.children} </Text>
        </View>
    </TouchableOpacity>
    );
};

const Estilo = StyleSheet.create({
    botonsote: {
      backgroundColor : '#48d1cc',
      paddingHorizontal : 30,
      paddingVertical : 12,
      borderRadius : 25
    },
    botonText :{
        color : 'white',
        fontFamily : 'open-sans',
        fontSize :16
    }
  });

export default Botonsote;
