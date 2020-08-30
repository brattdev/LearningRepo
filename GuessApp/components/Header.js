import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import TitleText from './TitleText';

const Header = props => {
    return (
     <View style = {Estilo.encabezado} > 
     <TitleText > {props.title}   </TitleText>
    </View>
    );
};


const Estilo = StyleSheet.create({
encabezado : {
    width : '100%',
    height : 90,
    paddingTop :36,
    backgroundColor : Platform.OS === 'android' ? '#ffb6c1' : 'white',
    alignItems : 'center',
    justifyContent : 'center'
}
});

export default Header;