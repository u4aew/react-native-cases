import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from '../screens/Cases/Products/slice';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
