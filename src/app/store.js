import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
}); // creates the store and returns the object to be stored in the variable store
