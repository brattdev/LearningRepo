import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground
} from 'react-native';

const MealItem = props => {
    return (
        <View style={Estilo.mealItem}> 
        <TouchableOpacity onPress = {props.onSelectMeal} > 
        <View> 
            <View style={{...Estilo.mealRow, ...Estilo.mealHeader}} >
                <ImageBackground 
                source = {{uri : props.image}}
                style={Estilo.backImage} >
            <View style={Estilo.titleContainer} > 
                <Text style={Estilo.title} numberOfLines={1} > {props.title} </Text> 
            </View>
                </ImageBackground>
            </View>
            <View style={{...Estilo.mealRow, ...Estilo.mealDetail}}> 
            <Text> {props.duration} </Text>
            <Text> {props.complexity.toUpperCase()} </Text>
            <Text> {props.affordability.toUpperCase()} </Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const Estilo = StyleSheet.create({
    mealRow:{
        flexDirection:'row'
    },
    mealItem :{
        height : 200,
        width :'100%',
        backgroundColor :'#ffe4c4',
        borderRadius :10,
        overflow :'hidden',
        marginVertical :10
    },
    mealHeader :{
        height :'85%'
    },
    mealDetail:{
        paddingHorizontal :20,
        justifyContent :'space-between',
        alignItems :'center',
        height :'15%'
    },
    backImage:{
        width :'100%',
        height:'100%',
        justifyContent :'flex-end'
    },
    title :{
        fontFamily : 'open-sans-bold',
        fontSize :22,
        color :'white',
        textAlign:'center'
    },
    titleContainer: {
        paddingVertical : 4,
        paddingHorizontal :11,
        backgroundColor :'rgba(0,0,0,0.5)'
    }
});

export default MealItem;