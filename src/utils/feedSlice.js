import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeedCard: (state, action) =>
      state?.filter((card) => card._id !== action.payload),
  },
});

export const { addFeed, removeFeedCard } = FeedSlice.actions;

export default FeedSlice.reducer;
