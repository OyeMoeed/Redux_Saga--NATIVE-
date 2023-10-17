import {LIST_ITEM, SET_PRODUCT} from './actionType';

export default listData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT: {
      console.log(LIST_ITEM, action);

      return [...action.data];
    }
    default:
      return data;
  }
};
