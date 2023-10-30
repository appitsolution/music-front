import React from "react";
import TitleSection from "../../../TitleSection";
import AltButton from "../../../form/AltButton";
import pdfIcon from "../../../../images/icons/pdf.svg";

const AccountInfluencerInvoices = () => {
  return (
    <>
      <section className="invoices">
        <div className="container">
          <TitleSection title="MY" span="account" />
          <p className="invoices-second">My Invoices</p>

          <div className="invoices-block">
            <div className="invoices-block-header">
              <p className="invoices-block-header-title" style={{ flex: 1 }}>
                Id
              </p>
              <p className="invoices-block-header-title" style={{ flex: 1.8 }}>
                Raised On
              </p>
              <p className="invoices-block-header-title">Payment Via</p>
              <p className="invoices-block-header-title" style={{ flex: 1 }}>
                Value
              </p>
              <p className="invoices-block-header-title" style={{ flex: 2 }}>
                Status
              </p>
              <div style={{ flex: 2 }}></div>
            </div>
            <div className="invoices-block-content">
              <ul className="invoices-block-content-list">
                <li className="invoices-block-content-item">
                  <p className="invoices-block-content-item-id">9267</p>
                  <p className="invoices-block-content-item-date">29/05/2022</p>
                  <p className="invoices-block-content-item-bank">
                    Bank Transfer
                  </p>
                  <p className="invoices-block-content-item-value">50.1 USD</p>
                  <div className="invoices-block-content-item-status">
                    <p className="invoices-block-content-item-status-value">
                      Paid
                    </p>
                  </div>
                  <div className="invoices-block-content-item-message">
                    <p className="invoices-block-content-item-message-text">
                      Payment Due: June 30th (subject to approval)
                    </p>
                  </div>
                  <button className="invoices-block-content-item-document">
                    <img
                      className="invoices-block-content-item-document-icon"
                      src={pdfIcon}
                    />
                  </button>
                </li>
                <li className="invoices-block-content-item">
                  <p className="invoices-block-content-item-id">9267</p>
                  <p className="invoices-block-content-item-date">29/05/2022</p>
                  <p className="invoices-block-content-item-bank">
                    Bank Transfer
                  </p>
                  <p className="invoices-block-content-item-value">50.1 USD</p>
                  <div className="invoices-block-content-item-status">
                    <p className="invoices-block-content-item-status-value">
                      Paid
                    </p>
                  </div>
                  <div className="invoices-block-content-item-message">
                    <p className="invoices-block-content-item-message-text">
                      Payment Due: June 30th (subject to approval)
                    </p>
                  </div>
                  <button className="invoices-block-content-item-document">
                    <img
                      className="invoices-block-content-item-document-icon"
                      src={pdfIcon}
                    />
                  </button>
                </li>
              </ul>

              <div
                style={{
                  marginTop: "29px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AltButton text="See more" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountInfluencerInvoices;
