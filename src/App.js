import React, { useEffect, useState } from "react";
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
import UseVerify from "./hooks/useVerify";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "./redux/slice/authenticated";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/signup" element={<PublicRoute element={Signup} />} />
          <Route
            path="/signup/client"
            element={<PublicRoute element={SignupClient} />}
          />
          <Route
            path="/signup/client/agreement"
            element={<PublicRoute element={SignupClientAgreement} />}
          />
          <Route
            path="/signup/influencer"
            element={<PublicRoute element={SignupInfluencer} />}
          />
          <Route
            path="/signup/influencer/agreement"
            element={<SignupInfluencerAgreement />}
          />
          <Route
            path="/account/client"
            element={<PrivateRoute element={AccountClientHome} />}
          />
          <Route
            path="/account/client/offers"
            element={<PrivateRoute element={AccountClientOffers} />}
          />
          <Route
            path="/account/client/payment"
            element={<PrivateRoute element={AccountClientPayment} />}
          />
          <Route
            path="/account/client/details"
            element={<PrivateRoute element={AccountClientDetails} />}
          />
          <Route
            path="/account/client/invoice-details"
            element={<PrivateRoute element={AccountClientInvoiceDetails} />}
          />
          <Route
            path="/account/client/past-promos"
            element={<PrivateRoute element={AccountClientPastPromos} />}
          />
          <Route
            path="/account/client/create-promo"
            element={<PrivateRoute element={AccountClientPostContent} />}
          />
          <Route
            path="/account/client/past-promos/current"
            element={<PrivateRoute element={AccountClientPastPromosCurrent} />}
          />

          <Route
            path="/account/influencer"
            element={<PrivateRoute element={AccountInfluencerHome} />}
          />
          <Route
            path="/account/influencer/details"
            element={<PrivateRoute element={AccountInfluencerDetails} />}
          />
          <Route
            path="/account/influencer/invoices"
            element={<PrivateRoute element={AccountInfluencerInvoicesPage} />}
          />
          <Route
            path="/account/influencer/create-invoice"
            element={
              <PrivateRoute element={AccountInfluencerCreateInvoicePage} />
            }
          />
          <Route path="/login/client" element={<LoginClientPage />} />
          <Route path="/forgot" element={<ForgotPasswordEmail />} />
          <Route path="/forgot/code/:email" element={<ForgotPasswordCode />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<PublicRoute element={Signup} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
