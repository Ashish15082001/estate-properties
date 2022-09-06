import { createSlice } from "@reduxjs/toolkit";
import { dataStatus } from "../../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "./fetchPropertiesToRentThunk";

const initialState = {
  entities: {},
  favouriteProperties: {},
  propertiesToRent: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
  propertiesToBuy: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
};

export const propertiesSlice = createSlice({
  name: "propertiesToRent",
  initialState,
  reducers: {
    addPropertyToFavourite(state, action) {
      const { propertyId } = action.payload;
      if (state.favouriteProperties[propertyId])
        delete state.favouriteProperties[propertyId];
      else state.favouriteProperties[propertyId] = propertyId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertiesToRentThunk.pending, (state, action) => {
        state.propertiesToRent.status = dataStatus.fetching;
      })
      .addCase(fetchPropertiesToRentThunk.fulfilled, (state, action) => {
        const { entities } = action.payload;
        const propertyKeys = Object.keys(entities);
        state.propertiesToRent.status = dataStatus.idle;
        state.propertiesToRent.propertiesIds = propertyKeys;
        state.entities = { ...state.entities, ...entities };
      })
      .addCase(fetchPropertiesToRentThunk.rejected, (state, action) => {
        state.propertiesToRent.status = dataStatus.idle;
      });
  },
});

export const propertiesSliceReducer = propertiesSlice.reducer;
export const { addPropertyToFavourite } = propertiesSlice.actions;
