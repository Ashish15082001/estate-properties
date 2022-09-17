import isFilterable from "./isPropertyFilterable";

function getFilteredProperties(filters, propertiesIds, entities) {
  return propertiesIds.filter((propertyId) =>
    isFilterable(filters, propertyId, entities)
  );
}

export default getFilteredProperties;
