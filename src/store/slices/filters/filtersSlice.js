import { createSlice } from "@reduxjs/toolkit";

const initialFilter = {
  location: null,
  when: null,
  price: null,
  propertyType: null,
};

const initialFilters = {
  propertiesToRent: initialFilter,
  propertiesTobuy: initialFilter,
  propertiesToSell: initialFilter,
  favouriteProperties: initialFilter,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilters,
  reducers: {
    filterChanged(state, action) {
      const { filterFor, filter, filterValue } = action.payload;
      state[filterFor][filter] = filterValue;
    },
    filterReset(state, action) {
      const { filterFor } = action.payload;
      state[filterFor] = initialFilter;
    },
  },
});

export const { filterChanged, filterReset } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
