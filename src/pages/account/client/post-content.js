import React from "react";
import Header from "../../../components/Header";
import Background from "../../../components/Background";
import AccountClientPostContent from "../../../components/layout/account/client/AccountClientPostContent";

const AccountClientPostContentPage = () => {
  return (
    <>
      <Header path="Sponsoring client" />
      <AccountClientPostContent />
      <Background />
    </>
  );
};

export default AccountClientPostContentPage;
