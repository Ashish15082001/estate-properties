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
      const { changedFor, filter, filterValue } = action.payload;
      state[changedFor][filter] = filterValue;
    },
  },
});
