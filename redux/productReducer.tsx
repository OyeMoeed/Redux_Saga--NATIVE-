import {LIST_ITEM} from './actionType';

export default listData = (data = [], action) => {
  switch (action.type) {
    case LIST_ITEM: {
      console.log('ADDED TO CART', action);

      return [action.data];
    }
    default:
      return data;
  }
};
