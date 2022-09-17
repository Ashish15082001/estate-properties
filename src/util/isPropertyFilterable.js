function isFilterable(filters, propertyId, entities) {
  const targetFilters = Object.keys(filters).filter(
    (filterValue) => filters[filterValue] !== null
  );

  for (const targetFilter of targetFilters) {
    if (targetFilter === "price") {
      if (
        !(
          entities[propertyId].price >= filters[targetFilter].min &&
          entities[propertyId].price <= filters[targetFilter].max
        )
      )
        return false;
    } else {
      if (entities[propertyId][targetFilter] !== filters[targetFilter])
        return false;
    }
  }
  return true;
}

export default isFilterable;
