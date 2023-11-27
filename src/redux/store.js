import { configureStore } from "@reduxjs/toolkit";
import counterReducre from "./features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducre,
  },
});
