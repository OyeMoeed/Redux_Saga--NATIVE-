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
import HeaderFile from './screen/HeaderFile';
const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <HeaderFile />
          <MainView />
        </SafeAreaView>
      </Provider>
    </React.StrictMode>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
