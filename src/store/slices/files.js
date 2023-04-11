import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";

export const fetchFilesList = createAsyncThunk(
  "files/fetchFilesList",
  async () => {
    try {
      const response = await API.get("/files/data");
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const initialState = {
  list: [],
  error: undefined,
  isLoading: false,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilesList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchFilesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { reducer } = filesSlice;
