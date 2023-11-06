import { configureStore } from "@reduxjs/toolkit";
import signupClientReducer from "./slice/signup-client";
import signupInfluencerReducer from "./slice/signup-influencer";
import authenticatedReducer from "./slice/authenticated";
import createInvoiceReducer from "./slice/create-invoice";

export const store = configureStore({
  reducer: {
    signupClient: signupClientReducer,
    signupInfluencer: signupInfluencerReducer,
    authenticated: authenticatedReducer,
    createInvoice: createInvoiceReducer,
  },
});
