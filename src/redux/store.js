import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categoriesSlice'
import product from './slices/productSlice'

export const store = configureStore({
  reducer: {
    category,
    product
  },
});
