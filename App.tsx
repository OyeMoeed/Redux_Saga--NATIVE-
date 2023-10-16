import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import MainView from './screen/MainView';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainView />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
