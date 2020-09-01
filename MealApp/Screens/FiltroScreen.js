import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FiltroScreen = props => {
    return (
        <View style={Estilo.screen} >
            <Text> FILTRO! </Text>
        </View>
    );
};

const Estilo = StyleSheet.create({
    screen :{
        flex: 1,
        alignItems : 'center',
        justifyContent :'center'
    }
});

export default FiltroScreen;