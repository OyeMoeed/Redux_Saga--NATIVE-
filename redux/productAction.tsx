import {LIST_ITEM} from './actionType';

export default list = () => {
  let data = 'ALALA';
  console.log('LIST ITEM', data);
  return {
    type: LIST_ITEM,
    data,
  };
};
