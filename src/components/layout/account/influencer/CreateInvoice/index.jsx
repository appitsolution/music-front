import React from "react";
import TitleSection from "../../../../TitleSection";
import CreateInvoicePayment from "./Payment";
import CreateInvoiceDetails from "./Details";
import CreateInvoiceBalances from "./Balances";
import acceptProgress from "../../../../../images/icons/accept-progress.svg";

const AccountInfluencerCreateInvoice = () => {
  return (
    <section className="create-invoice">
      <div className="create-invoice-block">
        <TitleSection title="Create" span="invoice" />
        <div className="container-form">
          <div className="create-invoice-progress">
            <div className="create-invoice-progress-line">
              <div className="create-invoice-progress-step ">
                <img
                  src={acceptProgress}
                  className="create-invoice-progress-step-icon"
                />
              </div>
              <div className="create-invoice-progress-decor"></div>
              <div className="create-invoice-progress-step">
                <img
                  src={acceptProgress}
                  className="create-invoice-progress-step-icon"
                />
              </div>
              <div className="create-invoice-progress-decor"></div>
              <div className="create-invoice-progress-step">
                <img
                  src={acceptProgress}
                  className="create-invoice-progress-step-icon"
                />
              </div>
            </div>
            <ul className="create-invoice-progress-content">
              <li className="create-invoice-progress-content-item">
                <p className="create-invoice-progress-content-item-title">
                  Payment
                </p>
                <p className="create-invoice-progress-content-item-desc">
                  Enter payout information
                </p>
              </li>
              <li className="create-invoice-progress-content-item">
                <p className="create-invoice-progress-content-item-title">
                  Invoice details
                </p>
                <p className="create-invoice-progress-content-item-desc">
                  Enter invoice details
                </p>
              </li>
              <li className="create-invoice-progress-content-item">
                <p className="create-invoice-progress-content-item-title">
                  Balances
                </p>
                <p className="create-invoice-progress-content-item-desc">
                  Select balance to invoice for
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* <CreateInvoicePayment /> */}
        {/* <CreateInvoiceDetails /> */}
        <CreateInvoiceBalances />
      </div>
    </section>
  );
};

export default AccountInfluencerCreateInvoice;
