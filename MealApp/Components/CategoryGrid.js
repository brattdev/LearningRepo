import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TouchableNativeFeedback, 
    Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryGrid  = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp =  TouchableNativeFeedback ;
    }

    return (
        <View  style={Estilo.gridItem} > 
    <TouchableCmp
            style = {{flex:1}}
            onPress={props.onSelect} > 
            <View style={{...Estilo.container, ...{backgroundColor: props.color}}} >
                <Text style={Estilo.title} numberOfLines={2} > {props.title} </Text>
            </View>
    </TouchableCmp>
        </View>
            );
};

const Estilo = StyleSheet.create({
    container :{
        flex: 1,
        alignItems : 'flex-end',
        justifyContent :'flex-end',
        borderRadius: 20,
        shadowColor :'black',
        shadowOpacity : 0.26,
        shadowOffset : {width:0 , height: 2},
        shadowRadius : 10,
        elevation : 3,
        padding :15
    },
    title :{
        fontFamily :'open-sans-bold',
        fontSize : 20,
        textAlign : 'right'
    },
    gridItem :{
        flex:1,
        margin : 15,
        height : 150,
        borderRadius : 10,
        overflow :'hidden'
    }
});

export default CategoryGrid;

