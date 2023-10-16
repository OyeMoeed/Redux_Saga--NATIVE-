import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from './actionType';
export const addToCart = data => {
  console.log('Button Pressed', data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = data => {
  console.log('Button Pressed', data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const clearCart = data => {
  console.log('Button Pressed', data);
  return {
    type: CLEAR_CART,
    data,
  };
};
