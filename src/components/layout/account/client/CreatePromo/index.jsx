import React, { useState } from "react";
import AccountClientOffers from "./AccountClientOffers";
import AccountClientPostContent from "./AccountClientPostContent";
import AccountClientPayment from "./AccountClientPayment";
import { useSelector } from "react-redux";

const CreatePromo = () => {
  const currentWindow = useSelector((state) => state.createPromo.currentWindow);
  return (
    <>
      {
        [
          <AccountClientOffers />,
          <AccountClientPostContent />,
          <AccountClientPayment />,
        ][currentWindow]
      }
    </>
  );
};

export default CreatePromo;
