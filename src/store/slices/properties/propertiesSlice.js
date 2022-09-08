import { createSlice } from "@reduxjs/toolkit";
import { dataStatus } from "../../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "./fetchPropertiesToRentThunk";

const initialFilter = {
  priceRange: null,
  propertyType: null,
  location: null,
  plannedDate: null,
};

const initialState = {
  entities: {},
  favouritePropertiesIds: {},
  propertiesToRent: {
    propertiesIds: [],
    filteredPropertiesIds: [],
    status: dataStatus.idle,
  },
  propertiesToBuy: {
    propertiesIds: [],
    filteredPropertiesIds: [],
    status: dataStatus.idle,
  },
  filter: initialFilter,
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
    setFilterPriceRange(state, action) {
      const { priceRange } = action.payload;
      state.filter.priceRange = priceRange;
    },
    setFilterPropertyType(state, action) {
      const { propertyType } = action.payload;
      state.filter.propertyType = propertyType;
    },
    setFilterLocation(state, action) {
      const { location } = action.payload;
      state.filter.location = location;
    },
    setFilterPlannedDate(state, action) {
      const { plannedDate } = action.payload;
      state.filter.plannedDate = plannedDate;
    },
    resetFilter(state) {
      state.filter = initialFilter;
      state.propertiesToRent.filteredPropertiesIds =
        state.propertiesToRent.propertiesIds;
      state.propertiesToBuy.filteredPropertiesIds =
        state.propertiesToBuy.propertiesIds;
    },
    applyFilterToPropertiesToRent(state) {
      const filteredPropertiesToRent = [];
      const targetFilters = Object.keys(state.filter).filter(
        (filterKey) => state.filter[filterKey] !== null
      );

      function isPropertyMatchingTargetFilters(propertyId) {
        for (const targetFilter of targetFilters) {
          if (targetFilter === "priceRange") {
            if (
              !(
                state.entities[propertyId].price >=
                  state.filter[targetFilter].min &&
                state.entities[propertyId].price <=
                  state.filter[targetFilter].max
              )
            )
              return false;
          } else {
            if (
              state.entities[propertyId][targetFilter] !==
              state.filter[targetFilter]
            )
              return false;
          }
        }

        return true;
      }

      state.propertiesToRent.propertiesIds.forEach((propertyId) => {
        if (isPropertyMatchingTargetFilters(propertyId) === true)
          filteredPropertiesToRent.push(propertyId);
      });

      state.propertiesToRent.filteredPropertiesIds = filteredPropertiesToRent;
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
        state.propertiesToRent.filteredPropertiesIds = propertyKeys;
        state.entities = { ...state.entities, ...entities };
      })
      .addCase(fetchPropertiesToRentThunk.rejected, (state, action) => {
        state.propertiesToRent.status = dataStatus.idle;
      });
  },
});

export const propertiesSliceReducer = propertiesSlice.reducer;
export const {
  addPropertyToFavourite,
  setFilterLocation,
  setFilterPlannedDate,
  setFilterPriceRange,
  setFilterPropertyType,
  applyFilterToPropertiesToRent,
  resetFilter,
} = propertiesSlice.actions;
