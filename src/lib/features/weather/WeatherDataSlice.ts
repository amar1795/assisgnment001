import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temperature: '',
  humidity: '',
  windSpeed: '',
  windDirection: '',
  rainIntensity: '',
  rainAccumulation: '',
  weatherCondition: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    setHumidity: (state, action) => {
      state.humidity = action.payload;
    },
    setWindSpeed: (state, action) => {
      state.windSpeed = action.payload;
    },
    setWindDirection: (state, action) => {
      state.windDirection = action.payload;
    },
    setRainIntensity: (state, action) => {
      state.rainIntensity = action.payload;
    },
    setRainAccumulation: (state, action) => {
      state.rainAccumulation = action.payload;
    },
    setWeatherCondition: (state, action) => {
      state.weatherCondition = action.payload;
    },
    clearWeatherData: (state) => {
      state.temperature = '';
      state.humidity = '';
      state.windSpeed = '';
      state.windDirection = '';
      state.rainIntensity = '';
      state.rainAccumulation = '';
      state.weatherCondition = '';
    },
  },
});

export const {
  setTemperature,
  setHumidity,
  setWindSpeed,
  setWindDirection,
  setRainIntensity,
  setRainAccumulation,
  setWeatherCondition,
  clearWeatherData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
