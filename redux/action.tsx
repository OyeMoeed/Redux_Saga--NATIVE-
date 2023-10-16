import ADD_TO_CART from './actionType';
const addToCart = data => {
  console.log('Button Pressed', data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export default addToCart;
