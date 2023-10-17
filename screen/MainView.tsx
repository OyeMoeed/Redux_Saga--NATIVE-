import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart, clearCart} from '../redux/action';
import list from '../redux/productAction';

export default function MainView() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.listData) || [];
  console.log('data in main component', data);

  useEffect(() => {
    dispatch(list());
  }, []);

  return (
    <View style={style.main}>
      <View style={style.listView}>
        {data.map(item => (
          <View key={item.id}>
            <Text>NAME : {item.name}</Text>
            <Text>Company : {item.company}</Text>
            <Text>Model : {item.model}</Text>

            <Button
              title="ADD TO CART"
              onPress={() => dispatch(addToCart(item))}
            />
            <Button
              title="Remove From Cart"
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
  main: {alignItems: 'center'},
  listView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
