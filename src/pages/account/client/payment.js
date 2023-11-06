import React from "react";
import Header from "../../../components/Header";
import Background from "../../../components/Background";
import AccountClientPayment from "../../../components/layout/account/client/AccountClientPayment";

const AccountClientPaymentPage = () => {
  return (
    <>
      <Header path="Sponsoring client" />
      <AccountClientPayment />
      <Background />
    </>
  );
};

export default AccountClientPaymentPage;
