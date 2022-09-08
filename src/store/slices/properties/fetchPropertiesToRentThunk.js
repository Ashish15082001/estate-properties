import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertiesToRentThunk = createAsyncThunk(
  "propertiesToRent/fetchPropertiesToRent",
  async () => {
    // try {
    const response = await fetch(
      "https://estates-properties-by-ashish.herokuapp.com/propertiesToRent"
    );
    const responseData = await response.json();

    if (response.ok === false)
      throw new Error("Something went Wrong. Please try again.");

    // console.log("inside fetchPropertiesToRentThunk");
    // console.log(response);
    // console.log(responseData);
    return { entities: responseData };
    // } catch (err) {
    //   throw err;
    // }
  }
);
