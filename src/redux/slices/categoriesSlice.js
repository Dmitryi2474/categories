import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  categories: ['Футболки', 'Майки', 'Носки', 'Джинсы', 'Брюки'],
  settings: {
    0: {
      color: '#803a48',
    },
    1: {
      color: '#fff',
    },
    2: {
      color: '#3d3a80',
    },
    3: {
      color: '#eee808',
    },
    4: {
      color: '#2a6039',
    },
  },
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const selectCategoryId = (state) => state.category.categoryId;
export const selectCategories = (state) => state.category.categories;
export const selectSettings = (state) => state.category.settings;

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
