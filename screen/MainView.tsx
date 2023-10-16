import {Button, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import React from 'react';

//
import addToCart from '../redux/action';
import {useDispatch} from 'react-redux';
export default function MainView() {
  const dispatch = useDispatch();

  const productData = {
    name: 'Iphone 13 NON PTA',
    price: '330000 pkr',
    unit: '10',
  };
  return (
    <View>
      <Button
        title="ADD TO CART"
        onPress={() => dispatch(addToCart(productData))}
      />
    </View>
  );
}
