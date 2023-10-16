import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './actionType';
const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('ADDED TO CART', action);

      return [...data, action.data];
    }
    case REMOVE_FROM_CART: {
      console.log('REMOVED FROM CART', action);
      data.length = data.length ? data.length - 1 : data;
      return [...data];
    }
    case CLEAR_CART: {
      console.log('CART CLEARED', action);
      data = [];
      return [...data];
    }

    default:
      return data;
  }
};

export default cartData;
