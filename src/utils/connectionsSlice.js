import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    showConnections: (state, action) => action.payload,
  },
});

export const { showConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
