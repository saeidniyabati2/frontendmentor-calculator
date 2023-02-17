import { configureStore } from "@reduxjs/toolkit";
import stylesReducer from "./reducers/stylesSlice";

export const store = configureStore({
  reducer: {
    styles: stylesReducer,
  },
});
