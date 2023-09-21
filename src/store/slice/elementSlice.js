import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../../util/localStorage';

const initialState = {
	elements: loadState() ? loadState().elements.elements : {},
};

const elementSlice = createSlice({
	name: 'elements',
	initialState,
	reducers: {
		setElement: (state, action) => ({
			...state,
			elements: {
				...state.elements,
				[action.payload.key]: action.payload.metaData,
			},
		}),
		setElementPosition: (state, action) => ({
			...state,
			elements: {
				...state.elements,
				[action.payload.id]: {
					...state.elements[action.payload.id],
					top: action.payload.top,
					left: action.payload.left,
				},
			},
		}),
		removeElement: (state, action) => {
			const preState = { ...state.elements };
			delete preState[action.payload];
			state.elements = { ...preState };
		},
	},
});

export const { setElement, setElementPosition, removeElement } =
	elementSlice.actions;

export default elementSlice.reducer;
