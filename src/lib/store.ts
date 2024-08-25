import { configureStore } from '@reduxjs/toolkit'
import searchedValue from "../lib/features/product/SearchedValueSlice";
import WeatherData from "../lib/features/weather/WeatherDataSlice";
import WeatherDetailData from "./features/weatherDetail/WeatherDetailSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchedValue: searchedValue,
      WeatherData:WeatherData,
      WeatherDetailData:WeatherDetailData

    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']