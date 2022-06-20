import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 555,
	sort: {
		name: 'популярности',
		sortProperty: 'rating'
	}
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setcategoryId(state, action) {
			state.categoryId = action.payload;
		}
	}
});

export const { setcategoryId } = filterSlice.actions;

export default filterSlice.reducer;
