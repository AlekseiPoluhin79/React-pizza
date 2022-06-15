import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlices';

export const store = configureStore({
	reducer: {
		cart
	}
});
