import React from "react";
import Header from "../../../components/Header";
import Background from "../../../components/Background";
import InvoiceResult from "../../../components/layout/account/influencer/InvoiceResult";

const InvoiceResultPage = () => {
  return (
    <>
      <Header path="Influencer" />
      <InvoiceResult />
      <Background />
    </>
  );
};

export default InvoiceResultPage;
