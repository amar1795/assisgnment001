import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  localityData: '',  // Initial state for the locality data
  searchedPlaceName: '',  // Initial state for the searched place name
  backgroundVideo: '',  // Initial state for the background video URL
  dateTime: '',  // Initial state for the date and time
  weatherConditionPicSource: '',  // Initial state for the weather condition picture source
  searchTerm: '',  // Initial state for the search term
  loading: true,  // Initial state for loading status
};

// Utility function to get formatted date and time
const getFormattedDateTime = () => {
    // Get current date and time
    const now = new Date();
  
    // Convert to IST (GMT+5:30)
    const istTime = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',   // Day of the week
      year: 'numeric',   // Year
      month: 'long',     // Month
      day: 'numeric',    // Day
      hour: '2-digit',   // Hours
      minute: '2-digit', // Minutes
    });
  
    return istTime;
  };
  

const detailsSlice = createSlice({
  name: 'details',
  initialState: { ...initialState, dateTime: getFormattedDateTime() },
  reducers: {
    setLocalityData: (state, action) => {
      state.localityData = action.payload;  // Update the locality data
    },
    setSearchedPlaceName: (state, action) => {
      state.searchedPlaceName = action.payload;  // Update the searched place name
    },
    setBackgroundVideo: (state, action) => {
      state.backgroundVideo = action.payload;  // Update the background video URL
    },
    setDateTime: (state, action) => {
      state.dateTime = action.payload;  // Update the date and time
    },
    setWeatherConditionPicSource: (state, action) => {
      state.weatherConditionPicSource = action.payload;  // Update the weather condition picture source
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;  // Update the search term
    },
    setLoading: (state, action) => {
      state.loading = action.payload;  // Update the loading status
    },
    resetState: (state) => {
      return { ...initialState, dateTime: getFormattedDateTime() };  // Reset the state to initial values
    },
  },
});

export const { 
  setLocalityData, 
  setSearchedPlaceName, 
  setBackgroundVideo, 
  setDateTime, 
  setWeatherConditionPicSource, 
  setSearchTerm, 
  setLoading, 
  resetState 
} = detailsSlice.actions;

export default detailsSlice.reducer;
