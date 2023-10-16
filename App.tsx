import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
