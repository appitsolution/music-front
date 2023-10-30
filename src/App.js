import React from "react";
import TextInput from "./components/form/TextInput";
import "./styles/main.scss";

import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import SignupClient from "./pages/signup-client/signup-client";
import SignupClientAgreement from "./pages/signup-client/signup-client-agreement";
import AccountClientHome from "./pages/account/client/home";
import AccountClientOffers from "./pages/account/client/offers";
import AccountClientPostContent from "./pages/account/client/post-content";
import AccountClientPayment from "./pages/account/client/payment";
import SignupInfluencerAgreement from "./pages/signup-influencer/signup-influencer-agreement";
import AccountInfluencerHome from "./pages/account/influencer/home";
import AccountInfluencerDetails from "./pages/account/influencer/details";
import LoginClientPage from "./pages/login/login-client";
import ForgotPasswordEmail from "./pages/login/forgot-password-email";
import ForgotPasswordCode from "./pages/login/forgot-password-code";
import AccountClientDetails from "./pages/account/client/details";
import AccountClientInvoiceDetails from "./pages/account/client/invoice-details";
import AccountClientPastPromos from "./pages/account/client/past-promos";
import AccountClientPastPromosCurrent from "./pages/account/client/past-promos-current";
import AccountInfluencerCreateInvoicePage from "./pages/account/influencer/create-invoice";
import AccountInfluencerInvoicesPage from "./pages/account/influencer/invoices";
import Terms from "./pages/terms";
import { ThemeProvider } from "./ThemeContext";
import SignupInfluencer from "./pages/signup-influencer/signup-influencer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/client" element={<SignupClient />} />
          <Route
            path="/signup/client/agreement"
            element={<SignupClientAgreement />}
          />
          <Route path="/signup/influencer" element={<SignupInfluencer />} />
          <Route
            path="/signup/influencer/agreement"
            element={<SignupInfluencerAgreement />}
          />
          <Route path="/account/client" element={<AccountClientHome />} />
          <Route
            path="/account/client/offers"
            element={<AccountClientOffers />}
          />
          <Route
            path="/account/client/post-content"
            element={<AccountClientPostContent />}
          />
          <Route
            path="/account/client/payment"
            element={<AccountClientPayment />}
          />
          <Route
            path="/account/client/details"
            element={<AccountClientDetails />}
          />
          <Route
            path="/account/client/invoice-details"
            element={<AccountClientInvoiceDetails />}
          />
          <Route
            path="/account/client/past-promos"
            element={<AccountClientPastPromos />}
          />
          <Route
            path="/account/client/past-promos/current"
            element={<AccountClientPastPromosCurrent />}
          />

          <Route
            path="/account/influencer"
            element={<AccountInfluencerHome />}
          />
          <Route
            path="/account/influencer/details"
            element={<AccountInfluencerDetails />}
          />
          <Route
            path="/account/influencer/invoices"
            element={<AccountInfluencerInvoicesPage />}
          />
          <Route
            path="/account/influencer/create-invoice"
            element={<AccountInfluencerCreateInvoicePage />}
          />
          <Route path="/login/client" element={<LoginClientPage />} />
          <Route path="/forgot" element={<ForgotPasswordEmail />} />
          <Route path="/forgot" element={<ForgotPasswordCode />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
