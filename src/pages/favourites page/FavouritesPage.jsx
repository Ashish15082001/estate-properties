import React from "react";
import { useSelector } from "react-redux";
import MainBody from "../../components/main body/MainBody";
import getPropertiesIdsSelector from "../../selectors/getPropertiesIdsSelector";

function FavouritesPage() {
  const propertiesIds = useSelector(
    getPropertiesIdsSelector("favouriteProperties")
  );

  return (
    <MainBody
      propertiesIds={propertiesIds}
      megaLabel="Search favourite properties"
      filterFor="favouriteProperties"
    />
  );
}

export default FavouritesPage;
