import { configureStore } from '@reduxjs/toolkit'
import searchedValue from "../lib/features/product/SearchedValueSlice";
import localityid from "../lib/features/product/SearchedValueSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchedValue: searchedValue,
      // LocalityID:localityid,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']