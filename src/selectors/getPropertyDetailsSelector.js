function getPropertyDetailsSelector(propertyId) {
  return function (state) {
    console.log("getPropertyDetailsSelector called...");
    return {
      propertyDetails: state.properties.entities[propertyId],
      isFavourite:
        state.properties.favouriteProperties.propertiesIds.includes(propertyId),
    };
  };
}

export default getPropertyDetailsSelector;
