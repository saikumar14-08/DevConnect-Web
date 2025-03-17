import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requestslice",
  initialState: null,
  reducers: {
    requestsReceived: (state, action) => action.payload,
    removeRequests: (state, action) => {
      return state.filter((request) => request._id !== action.payload);
    },
  },
});

export const { requestsReceived, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
/**
 * The structure is bit complicated to explain. We have a connection req object.
 * This object has another object called fromUserId which ahs the data of the requested user.
 * Now if I want to remove the data from the store. Should I simply delete based on the Id or Id from the fromUserId?
 */
