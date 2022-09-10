import { createSlice } from "@reduxjs/toolkit";
import { dataStatus } from "../../../constants/dataStatus";
import { fetchPropertiesToRentThunk } from "./fetchPropertiesToRentThunk";

const initialFilters = {
  propertiesToRent: {
    price: null,
    propertyType: null,
    location: null,
    when: null,
  },
  favouriteProperties: {
    price: null,
    propertyType: null,
    location: null,
    when: null,
  },
};

const initialState = {
  entities: {},
  favouriteProperties: {
    propertiesIds: {},
  },
  propertiesToRent: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
  propertiesToBuy: {
    propertiesIds: [],
    status: dataStatus.idle,
  },
  filters: initialFilters,
};

export const propertiesSlice = createSlice({
  name: "propertiesToRent",
  initialState,
  reducers: {
    addPropertyToFavourite(state, action) {
      const { propertyId } = action.payload;
      if (state.favouriteProperties.propertiesIds[propertyId])
        delete state.favouriteProperties.propertiesIds[propertyId];
      else state.favouriteProperties.propertiesIds[propertyId] = propertyId;
    },
    setFilterPriceRange(state, action) {
      const { price, filterFor } = action.payload;
      state.filters[filterFor].price = price;
    },
    setFilterPropertyType(state, action) {
      const { propertyType, filterFor } = action.payload;
      state.filters[filterFor].propertyType = propertyType;
    },
    setFilterLocation(state, action) {
      const { location, filterFor } = action.payload;
      state.filters[filterFor].location = location;
    },
    setFilterPlannedDate(state, action) {
      const { when, filterFor } = action.payload;
      state.filters[filterFor].when = when;
    },
    resetFilter(state, action) {
      const { filterFor } = action.payload;
      state.filters[filterFor] = initialFilters[filterFor];
      state[filterFor].filteredPropertiesIds = state[filterFor].propertiesIds;
    },
    applyFilterToProperties(state, action) {
      //   const { filterFor } = action.payload;
      //   const filteredPropertiesToRent = [];
      //   const targetFilters = Object.keys(state.filter).filter(
      //     (filterKey) => state.filter[filterKey] !== null
      //   );
      //   function isPropertyMatchingTargetFilters(propertyId) {
      //     for (const targetFilter of targetFilters) {
      //       if (targetFilter === "priceRange") {
      //         if (
      //           !(
      //             state.entities[propertyId].price >=
      //               state.filter[targetFilter].min &&
      //             state.entities[propertyId].price <=
      //               state.filter[targetFilter].max
      //           )
      //         )
      //           return false;
      //       } else {
      //         if (
      //           state.entities[propertyId][targetFilter] !==
      //           state.filter[targetFilter]
      //         )
      //           return false;
      //       }
      //     }
      //     return true;
      //   }
      //   state.propertiesToRent.propertiesIds.forEach((propertyId) => {
      //     if (isPropertyMatchingTargetFilters(propertyId) === true)
      //       filteredPropertiesToRent.push(propertyId);
      //   });
      //   state.propertiesToRent.filteredPropertiesIds = filteredPropertiesToRent;
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
