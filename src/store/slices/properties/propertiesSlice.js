import { createSlice } from "@reduxjs/toolkit";
import { dataStatus } from "../../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "./fetchPropertiesToRentThunk";

const initialState = {
  entities: {},
  favouritePropertiesIds: {},
  propertiesToRent: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
  propertiesToBuy: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
  filter: {
    priceRange: null,
    propertyType: null,
    location: null,
    plannedDate: null,
  },
};

export const propertiesSlice = createSlice({
  name: "propertiesToRent",
  initialState,
  reducers: {
    addPropertyToFavourite(state, action) {
      const { propertyId } = action.payload;
      if (state.favouritePropertiesIds[propertyId])
        delete state.favouritePropertiesIds[propertyId];
      else state.favouritePropertiesIds[propertyId] = propertyId;
    },
    setFilterForRent(state, action) {
      const { priceRange, propertyType, location, plannedDate } =
        action.payload;

      state.filter = {
        priceRange,
        propertyType,
        location,
        plannedDate,
      };
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
export const { addPropertyToFavourite, setFilterForRent } =
  propertiesSlice.actions;
