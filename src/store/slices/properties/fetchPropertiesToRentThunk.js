import { createAsyncThunk } from "@reduxjs/toolkit";
import { propertiesForRent } from "../../../data";

export const fetchPropertiesToRentThunk = createAsyncThunk(
  "propertiesToRent/fetchPropertiesToRent",
  async () => {
    // try {
    // const response = await fetch(
    //   "https://estates-properties-by-ashish.herokuapp.com/propertiesToRent"
    // );
    // const responseData = await response.json();

    // if (response.ok === false)
    //   throw new Error("Something went Wrong. Please try again.");

    // return { entities: responseData };
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ entities: propertiesForRent }), 3000);
    });
  }
);
