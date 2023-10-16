import ADD_TO_CART from './actionType';
const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('reducer called', action);

      return data;

    default:
      return 'no action called';
  }
};

export default cartData;
