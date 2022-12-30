import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'mobile/fetchProduct',
  async (categoryId) => {
    const { data } = await axios.get(
      'https://6363c19237f2167d6f828690.mockapi.io/guild?category=' + categoryId
    );
    return data;
  }
);

const initialState = {
  item: JSON.parse(localStorage.getItem('cart')) || [],
  status: 'loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'loading';
      state.item = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = 'success';
      state.item = action.payload;
    },
    [fetchProduct.rejected]: (state) => {
      state.status = 'error';
      state.item = [];
    },
  },
});

export const selectItem = (state) => state.product;

export const { setItem } = productSlice.actions;

export default productSlice.reducer;
