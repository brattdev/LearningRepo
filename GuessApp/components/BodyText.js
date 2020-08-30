import React from 'react';
import {StyleSheet, Text} from 'react-native';

const BodyText = props => 
<Text style = {{...Estilo.body, ...props.style}} > {props.children}</Text>;

const Estilo = StyleSheet.create({
    body: {
      fontFamily : 'open-sans'
    }
  });

export default BodyText;