import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertiesToRentThunk = createAsyncThunk(
  "propertiesToRent/fetchPropertiesToRent",
  async () => {
    const response = await fetch("http://localhost:3001/propertiesToRent");
    const responseData = await response.json();
    return Promise.resolve({ entities: responseData });
  }
);
