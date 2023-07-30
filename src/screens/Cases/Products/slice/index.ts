import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../../../redux/store';
import {Product} from '../types';
import {fetchProducts} from '../api';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchProductsStart, fetchProductsSuccess, fetchProductsFailure} =
  productsSlice.actions;
export default productsSlice.reducer;

export const fetchProductsAsync = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchProductsStart());
    const products = await fetchProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    // @ts-ignore
    console.log(error.message, 'error.message')
    // @ts-ignore
    dispatch(fetchProductsFailure(error.message));
  }
};

// Селекторы для получения данных из хранилища
export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;
