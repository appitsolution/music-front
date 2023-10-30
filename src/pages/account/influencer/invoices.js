import React from "react";
import Header from "../../../components/Header";
import Background from "../../../components/Background";
import AccountInfluencerHome from "../../../components/layout/account/influencer/AccountInfluencerHome";
import AccountInfluencerInvoices from "../../../components/layout/account/influencer/AccountInfluencerInvoices";

const AccountInfluencerInvoicesPage = () => {
  return (
    <>
      <Header />
      <AccountInfluencerInvoices />
      <Background />
    </>
  );
};

export default AccountInfluencerInvoicesPage;
