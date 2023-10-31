import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated } = authenticatedSlice.actions;

export default authenticatedSlice.reducer;
