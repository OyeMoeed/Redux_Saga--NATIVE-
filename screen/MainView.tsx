import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import React from 'react';

//
import {addToCart, removeFromCart, clearCart} from '../redux/action';
import {useDispatch} from 'react-redux';
export default function MainView() {
  const dispatch = useDispatch();

  const productData = {
    name: 'Iphone 13 NON PTA',
    price: '330000 pkr',
    unit: '10',
  };
  return (
    <View style={style.main}>
      <Button
        title="ADD TO CART"
        onPress={() => dispatch(addToCart(productData.name))}
      />
      <Button
        title="REMOVE FROM CART"
        onPress={() => dispatch(removeFromCart(productData.name))}
      />
      <Button
        title="CLEAR CART"
        onPress={() => dispatch(clearCart(productData.name))}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
  },
});
