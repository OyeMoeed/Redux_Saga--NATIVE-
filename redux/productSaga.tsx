import {put, takeEvery, call} from 'redux-saga/effects'; // Import 'call' to handle the asynchronous call
import {LIST_ITEM, SET_PRODUCT} from './actionType';

// Modify getProducts to use 'call' to handle the asynchronous call
function* getProducts() {
  try {
    const response = yield call(fetch, 'http://localhost:3000/product'); // Use 'call' to make the fetch call
    const data = yield call([response, 'json']); // Use 'call' to parse the JSON data
    yield put({type: SET_PRODUCT, data});
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching products:', error);
  }
}

function* productSaga() {
  yield takeEvery(LIST_ITEM, getProducts);
}

export default productSaga;
