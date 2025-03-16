import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";

export const store = configureStore({
  reducer: {
    add_user: userReducer,
    feed: feedReducer,
  },
});
