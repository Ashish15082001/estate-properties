import { configureStore } from "@reduxjs/toolkit";
import { propertiesSliceReducer } from "./slices/properties/propertiesSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesSliceReducer,
  },
});
