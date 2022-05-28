import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, ICats } from '../types';
import axios from 'axios';

export const getCats = createAsyncThunk(
	'catsSlice/getCats',
	async function(_, { rejectWithValue }) {
		try {
			axios.defaults.headers.common['x-api-key'] = "api_key=df45900a-e86b-41db-b2ee-dd3e1729f33d"
			let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:10, size:"full" } } );
			let data = response.data;
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error);
		}
	}
);

const initialState: IInitialState = {
	cats: [],
	loading: true,
	error: false,
}

const catsSlice = createSlice({
	name: 'catsSlice',
	initialState,
	reducers: {
		changeFavorite: (state: IInitialState, {payload}: PayloadAction<string>) => {
			state.cats = state.cats.map(i => {

				if (i.id === payload) {
					i.isFavorite = !i.isFavorite;
				}

				return i;
			});
		},
	},

	extraReducers: {
		[`${getCats.pending}`]: (state: IInitialState) => {
			state.error = false;
			state.loading = true;
		},
		[`${getCats.rejected}`]: (state: IInitialState) => {
			state.error = true;
			state.loading = false;
		},
		[`${getCats.fulfilled}`]: (state: IInitialState, { payload }: PayloadAction<ICats[]>) => {
			state.error = false;
			state.loading = false;

			const newCats = payload.map(i => ({
				...i,
				isFavorite: false,
			}));

			state.cats = [...state.cats, ...newCats]
		},
	}
});


export const { changeFavorite } = catsSlice.actions;
export default catsSlice.reducer;