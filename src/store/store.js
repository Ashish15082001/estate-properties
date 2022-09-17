import { configureStore } from "@reduxjs/toolkit";
import { filtersSliceReducer } from "./slices/filters/filtersSlice";
import { propertiesSliceReducer } from "./slices/properties/propertiesSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesSliceReducer,
    filters: filtersSliceReducer,
  },
});
