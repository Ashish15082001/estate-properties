import React from "react";
import MainHeader from "./components/main header/MainHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import RentPage from "./pages/rent page/RentPage";
import PlaceHolderPage from "./pages/placeholder page/PlaceHolderPage";
import FavouritesPage from "./pages/favourites page/FavouritesPage";
import { useEffect } from "react";

function App() {
  console.log("rendering App...");
  useEffect(() => console.log("rendered App..."));

  return (
    <React.Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/rent" />}></Route>
        <Route path="/rent" element={<RentPage />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
        <Route
          path="*"
          element={
            <PlaceHolderPage placeHolderText="This page is currerntly not available. Please try after some time." />
          }
        ></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
