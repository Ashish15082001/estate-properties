import getFilteredProperties from "../util/getFilteredProperties";

function getPropertiesIdsSelector(selectFrom) {
  return function (state) {
    console.log("getPropertiesIdsSelector called...");
    const filters = state.filters[selectFrom];
    const propertiesIds = state.properties[selectFrom].propertiesIds;
    const entities = state.properties.entities;

    const filteredPropertiesIds = getFilteredProperties(
      filters,
      propertiesIds,
      entities
    );

    return filteredPropertiesIds;
  };
}

export default getPropertiesIdsSelector;
