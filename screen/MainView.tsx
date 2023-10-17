import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

//
import {addToCart, removeFromCart, clearCart} from '../redux/action';
import list from '../redux/productAction';
import {useDispatch, useSelector} from 'react-redux';
export default function MainView() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData);

  useEffect(() => {
    dispatch(list());
  }, []);
  return (
    <View style={style.main}>
      <View>
        {data &&
          data.map(item => (
            <View key={item.id}>
              <View>Name: {item.name}</View>
              <Text>Company: {item.company}</Text>
              <Text>Model: {item.model}</Text>
              <Button
                title="ADD TO CART"
                onPress={() => dispatch(addToCart(item))}
              />
              <Button
                title="REMOVE FROM CART"
                onPress={() => dispatch(removeFromCart(item.id))}
              />
            </View>
          ))}
      </View>
      <View>
        <Button title="CLEAR CART" onPress={() => dispatch(clearCart())} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
  },
});
