
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',  // Initial state for the search value
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;  // Update the state with the new search value
    },
    clearSearchValue: (state) => {
      state.searchValue = '';  // Clear the search value
    },
  },
});

export const { setSearchValue, clearSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
