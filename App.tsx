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
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  const persistor = persistStore(store);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <HeaderFile />
            <MainView />
          </SafeAreaView>
        </PersistGate>
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
