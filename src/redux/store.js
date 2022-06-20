import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlices';
import filter from './slices/filterSlice';

export const store = configureStore({
	reducer: {
		filter,
		cart
	}
});
