import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleWare from 'redux-saga';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'persist-root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(productSaga);
export default store;
