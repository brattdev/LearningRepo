import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TitleText = props => 
<Text style = {{...Estilo.title, ...props.style}} > {props.children} </Text>;

const Estilo = StyleSheet.create({
    title: {
      fontFamily : 'open-sans-bold',
      fontSize : 18
    }
  });

export default TitleText;