function getArePropertiesAvailableSelector(selectFrom) {
  return function (state) {
    console.log("getArePropertiesAvailableSelector called...");
    return state.properties[selectFrom].propertiesIds.length !== 0;
  };
}

export default getArePropertiesAvailableSelector;
