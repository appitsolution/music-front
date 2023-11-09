import React, { useEffect, useState } from "react";
import TextInput from "./components/form/TextInput";
import "./styles/main.scss";

import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import SignupClient from "./pages/signup-client/signup-client";
import SignupClientAgreement from "./pages/signup-client/signup-client-agreement";
import AccountClientHome from "./pages/account/client/home";
import SignupInfluencerAgreement from "./pages/signup-influencer/signup-influencer-agreement";
import AccountInfluencerHome from "./pages/account/influencer/home";
import AccountInfluencerDetails from "./pages/account/influencer/details";
import LoginClientPage from "./pages/login/login-client";
import LoginInfluencerPage from "./pages/login/login-influencer";
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
import SignupInfluencerLast from "./pages/signup-influencer/signup-influencer-last";
import AccountInfluencerPastPromos from "./pages/account/influencer/past-promos";
import AccountInfluencerPastPromosCurrentPage from "./pages/account/influencer/past-promos-current";
import ReportCampaigns from "./components/layout/account/influencer/ReportCampaigns";
import ReportCampaignsPage from "./pages/account/influencer/report-campaigns";
import InvoiceResultPage from "./pages/account/influencer/invoice-result";
import AccountClientCreatePromoPage from "./pages/account/client/create-promo";
import AccountInfluencerOngoingPromos from "./pages/account/influencer/ongoing-promos";
import AccountInfluencerNewPromosPage from "./pages/account/influencer/new-promos";
import AccountInfluencerOngoingPromosCurrentPage from "./pages/account/influencer/ongoing-promos-current";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/signup" element={<PublicRoute element={Signup} />} />
          <Route
            path="/signup/client"
            element={<PublicRoute role="client" element={SignupClient} />}
          />
          <Route
            path="/signup/client/agreement"
            element={
              <PublicRoute role="client" element={SignupClientAgreement} />
            }
          />
          <Route
            path="/signup/influencer"
            element={
              <PublicRoute role="influencer" element={SignupInfluencer} />
            }
          />
          <Route
            path="/signup/influencer/agreement"
            element={
              <PublicRoute
                role="influencer"
                element={SignupInfluencerAgreement}
              />
            }
          />
          <Route
            path="/signup/influencer/last"
            element={
              <PublicRoute role="influencer" element={SignupInfluencerLast} />
            }
          />

          <Route
            path="/account/client"
            element={<PrivateRoute element={AccountClientHome} />}
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
            element={<PrivateRoute element={AccountClientCreatePromoPage} />}
          />
          <Route
            path="/account/client/past-promos/:id"
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
            path="/account/influencer/past-promos"
            element={<PrivateRoute element={AccountInfluencerPastPromos} />}
          />
          <Route
            path="/account/influencer/past-promos/:id"
            element={
              <PrivateRoute element={AccountInfluencerPastPromosCurrentPage} />
            }
          />

          <Route
            path="/account/influencer/ongoing-promos"
            element={<PrivateRoute element={AccountInfluencerOngoingPromos} />}
          />

          <Route
            path="/account/influencer/ongoing-promos/:id"
            element={
              <PrivateRoute
                element={AccountInfluencerOngoingPromosCurrentPage}
              />
            }
          />

          <Route
            path="/account/influencer/new-promos"
            element={<PrivateRoute element={AccountInfluencerNewPromosPage} />}
          />

          <Route
            path="/account/influencer/create-invoice"
            element={
              <PrivateRoute element={AccountInfluencerCreateInvoicePage} />
            }
          />
          <Route
            path="/account/influencer/reports"
            element={<PrivateRoute element={ReportCampaignsPage} />}
          />
          <Route
            path="/account/influencer/invoice-result"
            element={<PrivateRoute element={InvoiceResultPage} />}
          />
          <Route
            path="/login/client"
            element={<PublicRoute role="client" element={LoginClientPage} />}
          />
          <Route
            path="/login/influencer"
            element={
              <PublicRoute role="influencer" element={LoginInfluencerPage} />
            }
          />
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
