import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
      state.products.availableProducts.find(prod => prod.id === productId)
    );
    const dispatch = useDispatch();

    return (
        <ScrollView>
          <Image style={Estilo.image} source={{ uri: selectedProduct.imageUrl }} />
          <View style={Estilo.actions}>
            <Button 
            color={Colors.turquesa} 
            title="Al Carrito" 
            onPress={() => { 
              dispatch(cartActions.addToCart(selectedProduct));
            }} />
          </View>
          <Text style={Estilo.price}>${selectedProduct.price.toFixed(2)}</Text>
          <Text style={Estilo.description}>{selectedProduct.description}</Text>
        </ScrollView>
      );
    };

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const Estilo = StyleSheet.create({
    image: {
      width: '100%',
      height: 300
    },
    actions: {
      marginVertical: 10,
      alignItems: 'center'
    },
    price: {
      fontSize: 20,
      color: '#888',
      textAlign: 'center',
      marginVertical: 20,
      fontFamily : 'open-sans-bold'
    },
    description: {
      fontSize: 14,
      textAlign: 'center',
      marginHorizontal: 20,
      fontFamily : 'open-sans'
    }
  });
  
  export default ProductDetailScreen;