import isFilterable from "./isPropertyFilterable";

function getFilteredProperties(filters, propertiesIds, properties) {
  return propertiesIds.filter((propertyId) =>
    isFilterable(filters, propertyId, properties)
  );
}

export default getFilteredProperties;
