import { configureStore } from "@reduxjs/toolkit";
import saveFiltersReducer from "./features/saveFilters/saveFiltersSlice";

export const store = configureStore({
  reducer: {
    saveFilter: saveFiltersReducer,
  },
});
