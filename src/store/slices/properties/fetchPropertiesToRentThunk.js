import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertiesToRentThunk = createAsyncThunk(
  "propertiesToRent/fetchPropertiesToRent",
  async () => {
    // try {
    const response = await fetch("http://localhost:3001/propertiesToRent");
    const responseData = await response.json();

    if (response.ok === false)
      throw new Error("Something went Wrong. Please try again.");

    console.log("inside fetchPropertiesToRentThunk");
    console.log(response);
    console.log(responseData);
    return Promise.resolve({ entities: responseData });
    // } catch (err) {
    //   throw err;
    // }
  }
);
