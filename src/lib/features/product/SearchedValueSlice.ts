import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',  // Initial state for the search value
  localityID: '',  // Initial state for the locality ID
  suggestions: [],  // Initial state for the suggestions
  showDropdown: false,  // Initial state for dropdown visibility
  cityName: '',  // Initial state for the city name
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
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;  // Update the suggestions
    },
    setShowDropdown: (state,action) => {
      state.showDropdown = action.payload;  // Toggle the visibility of the dropdown
    },
    setCityName: (state, action) => {
      state.cityName = action.payload;  // Update the city name
    },
  },
});

export const { setSearchValue, setLocalityID, clearSearchValue, setSuggestions, setShowDropdown, setCityName } = searchSlice.actions;

export default searchSlice.reducer;
