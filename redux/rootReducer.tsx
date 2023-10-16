import {combineReducers} from 'redux';
import cartData from './reducer';
import listData from './productReducer';

export default combineReducers({
  cartData,
  listData,
});
