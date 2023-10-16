import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {UseSelector, useSelector} from 'react-redux';
const HeaderFile = () => {
  const result = useSelector(state => state.cartData);
  console.log('header data', result);
  return (
    <View style={style.header}>
      <Text>{result.length}</Text>
    </View>
  );
};

export default HeaderFile;

const style = StyleSheet.create({
  header: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
  },
});
