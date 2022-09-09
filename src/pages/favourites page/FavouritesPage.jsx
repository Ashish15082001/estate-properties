import React from "react";
import { useSelector } from "react-redux";
import MainBody from "../../components/main body/MainBody";
import getFilteredProperties from "../../util/getFilteredProperties";

function FavouritesPage() {
  const { entities } = useSelector((state) => state.properties);
  const { favouriteProperties: filters } = useSelector(
    (state) => state.properties.filters
  );
  const favouritePropertiesIds = useSelector((state) =>
    Object.keys(state.properties.favouriteProperties.propertiesIds)
  );

  const filteredPropertiesIds = getFilteredProperties(
    filters,
    favouritePropertiesIds,
    entities
  );

  return (
    <MainBody
      propertiesIds={filteredPropertiesIds}
      megaLabel="Search favourite properties"
      filterFor="favouriteProperties"
    />
  );
}

export default FavouritesPage;
