import { configureStore } from "@reduxjs/toolkit";
import signupClientReducer from "./slice/signup-client";
import authenticatedReducer from "./slice/authenticated";

export const store = configureStore({
  reducer: {
    signupClient: signupClientReducer,
    authenticated: authenticatedReducer,
  },
});
