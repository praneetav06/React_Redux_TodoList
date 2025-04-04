import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer, // key must match what you're selecting from in useSelector
  },
});
// creates the store and returns the object to be stored in the variable store
