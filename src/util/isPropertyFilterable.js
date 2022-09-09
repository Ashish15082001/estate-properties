function isFilterable(filters, propertyId, properties) {
  const targetFilters = Object.keys(filters).filter(
    (filterValue) => filters[filterValue] !== null
  );

  for (const targetFilter of targetFilters) {
    if (targetFilter === "price") {
      if (
        !(
          properties[propertyId].price >= filters[targetFilter].min &&
          properties[propertyId].price <= filters[targetFilter].max
        )
      )
        return false;
    } else {
      if (properties[propertyId][targetFilter] !== filters[targetFilter])
        return false;
    }
  }
  return true;
}

export default isFilterable;
