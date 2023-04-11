import { configureStore } from "@reduxjs/toolkit";
import { reducer as filesReducer } from "./slices/files";

const store = configureStore({
  reducer: {
    files: filesReducer,
  },
});

export default store;
