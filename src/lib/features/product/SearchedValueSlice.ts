
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',  // Initial state for the search value
  localityID: '',  // Initial state for the locality ID
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;  // Update the state with the new search value
    },
    setLocalityID: (state, action) => {
      state.localityID = action.payload;  // Update the state with the new Locality ID
    },
    clearSearchValue: (state) => {
      state.searchValue = '';  // Clear the search value
    },
  },
});

export const { setSearchValue,setLocalityID, clearSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
