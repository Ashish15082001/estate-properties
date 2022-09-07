import React from "react";
import { useSelector } from "react-redux";
import MainBody from "../../components/main body/MainBody";
import PlaceHolderPage from "../placeholder page/PlaceHolderPage";

function FavouritesPage() {
  const favouritePropertiesIds = useSelector((state) =>
    Object.keys(state.properties.favouritePropertiesIds)
  );

  if (favouritePropertiesIds.length === 0)
    return (
      <PlaceHolderPage
        placeHolderText={"No Properties are added to Favourites."}
      />
    );

  return (
    <MainBody
      propertiesIds={favouritePropertiesIds}
      megaLabel="Search favourite properties"
    />
  );
}

export default FavouritesPage;
