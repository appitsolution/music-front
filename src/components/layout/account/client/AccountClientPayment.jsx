import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import paypal from "../../../../images/icons/paypal.svg";
import mastercard from "../../../../images/icons/company/mastercard.svg";
import visa from "../../../../images/icons/company/visa.svg";
import discover from "../../../../images/icons/company/discover.svg";
import american from "../../../../images/icons/company/american.svg";
import jcb from "../../../../images/icons/company/jcb.svg";
import unionPay from "../../../../images/icons/company/union-pay.svg";
import ModalWindow from "../../../ModalWindow";
import visaBank from "../../../../images/icons/visa-bank.svg";
import StandartButton from "../../../form/StandartButton";

const AccountClientPayment = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <section className="account-client">
        <div className="container-form">
          <div className="account-client-block">
            <div className="account-client-payment">
              <div className="account-client-payment-header">
                <h2 className="account-client-payment-header-title">
                  total: 799 €
                </h2>
              </div>

              <div className="account-client-payment-content">
                <TitleSection title="pay" span="with" />

                <ul className="account-client-payment-content-methods">
                  <li className="account-client-payment-content-methods-item">
                    <button className="account-client-payment-content-methods-button">
                      <img
                        className="account-client-payment-content-methods-button-icon"
                        src={paypal}
                      />
                    </button>
                  </li>
                  <li className="account-client-payment-content-methods-item">
                    <button
                      onClick={() => setIsOpenModal(true)}
                      className="account-client-payment-content-methods-button"
                    >
                      Bank card
                    </button>
                  </li>
                  <li className="account-client-payment-content-methods-item">
                    <button className="account-client-payment-content-methods-button">
                      Bank transfer
                    </button>
                  </li>
                </ul>

                <ul className="account-client-payment-content-company">
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={mastercard}
                    />
                  </li>
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={visa}
                    />
                  </li>
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={discover}
                    />
                  </li>
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={american}
                    />
                  </li>
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={jcb}
                    />
                  </li>
                  <li className="account-client-payment-content-company-item">
                    <img
                      className="account-client-payment-content-company-logo"
                      src={unionPay}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalWindow
        header="Bank card"
        isOpen={isOpenModal}
        setClose={setIsOpenModal}
      >
        <div className="account-client-bank">
          <form className="account-client-bank-form">
            <label className="account-client-bank-label">
              <p className="account-client-bank-label-title">Enter Card</p>
              <input
                className="account-client-bank-input"
                placeholder="0000 0000 0000 0000"
              />
              <img className="account-client-bank-label-icon" src={visaBank} />
            </label>

            <div className="account-client-bank-flex">
              <label className="account-client-bank-label">
                <p className="account-client-bank-label-title">Validity</p>
                <input
                  className="account-client-bank-input"
                  placeholder="01 / 24"
                />
              </label>
              <label className="account-client-bank-label">
                <p className="account-client-bank-label-title">CVV-code</p>
                <input className="account-client-bank-input" placeholder="" />
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <StandartButton text="Continue" />
            </div>
          </form>
        </div>
      </ModalWindow>
    </>
  );
};

export default AccountClientPayment;
