import React, { useEffect, useState } from "react";
import TitleSection from "../../../../TitleSection";
import paypal from "../../../../../images/icons/paypal.svg";
import mastercard from "../../../../../images/icons/company/mastercard.svg";
import visa from "../../../../../images/icons/company/visa.svg";
import discover from "../../../../../images/icons/company/discover.svg";
import american from "../../../../../images/icons/company/american.svg";
import jcb from "../../../../../images/icons/company/jcb.svg";
import unionPay from "../../../../../images/icons/company/union-pay.svg";
import ModalWindow from "../../../../ModalWindow";
import visaBank from "../../../../../images/icons/visa-bank.svg";
import StandartButton from "../../../../form/StandartButton";
import PaypalButton from "../../../../Payment/PaypalButton";
import { useDispatch, useSelector } from "react-redux";
import UseVerify from "../../../../../hooks/useVerify";
import axios from "axios";
import {
  setClearForm,
  setCurrentWindow,
} from "../../../../../redux/slice/create-promo";
import { useNavigate } from "react-router-dom";

import arrow from "../../../../../images/icons/arrow.svg";

const AccountClientPayment = () => {
  const [data, setData] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenTransfer, setIsOpenTranfer] = useState(false);
  const [transferCurrent, setTranfertCurrent] = useState("");

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const dataPromo = useSelector((state) => state.createPromo.data);

  const createPromo = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/promos`,
        { ...dataPromo, userId: dataFetch._id }
      );

      if (result.data.code === 201) {
        const result = await axios.post(
          `${process.env.REACT_APP_SERVER}/payment/create-order-stripe`,
          {
            nameProduct: `Offers ${dataPromo.selectPrice.variant}`,
            userId: dataFetch._id,
            amount: dataPromo.selectPrice.price,
          }
        );
        if (result.data.code === 201) {
          document.location.href = result.data.paymentUrl;
        }
        dispatch(setClearForm());
        dispatch(setCurrentWindow(0));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createPromoTranfer = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/promos`,
        { ...dataPromo, userId: dataFetch._id }
      );

      if (result.data.code === 201) {
        const result = await axios.post(
          `${process.env.REACT_APP_SERVER}/payment/create-order-tranfer`,
          {
            nameProduct: `Offers ${dataPromo.selectPrice.variant}`,
            userId: dataFetch._id,
            amount: dataPromo.selectPrice.price,
          }
        );
        if (result.data.code === 201) {
          navigation("/");
        }
        dispatch(setClearForm());
        dispatch(setCurrentWindow(0));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const returnTranferData = () => {
    if (transferCurrent === "uk") {
      return (
        <>
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              TECHNO TV LTD
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Account number:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              17299128
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Sort code:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              04-00-75
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              124 City Road, EC1V 2NX, London, United Kingdom
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              Revolut Ltd
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              7 Westferry Circus, E14 4HD, London, United Kingdom
            </span>
          </p>
        </>
      );
    } else if (transferCurrent === "eu") {
      return (
        <>
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              TECHNO TV LTD
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            IBAN:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              GB91REVO00997094280983
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            BIC:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              REVOGB21
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              124 City Road, EC1V 2NX, London, United Kingdom
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              Revolut Ltd
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              7 Westferry Circus, E14 4HD, London, United Kingdom
            </span>
          </p>
        </>
      );
    } else if (transferCurrent === "international") {
      return (
        <>
          {" "}
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              TECHNO TV LTD
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            IBAN:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              GB47REVO00996994280983
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            BIC:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              REVOGB21
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Intermediary BIC:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              CHASDEFX
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Beneficiary address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              124 City Road, EC1V 2NX, London, United Kingdom
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              Revolut Ltd
            </span>
          </p>
          <p className="account-client-payment-select-transfer-data-title">
            Bank/Payment institution address:{" "}
            <span className="account-client-payment-select-transfer-data-value">
              7 Westferry Circus, E14 4HD, London, United Kingdom
            </span>
          </p>
        </>
      );
    } else {
      return "";
    }
  };

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();

      setData(dataFetch);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="account-client">
        <div className="container-form" style={{ position: "relative" }}>
          <button
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 50,
              height: 50,
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(setCurrentWindow(1));
            }}
          >
            <img src={arrow} style={{ transform: "rotate(180deg)" }} />
          </button>
          <div className="account-client-block">
            <div className="account-client-payment">
              <div className="account-client-payment-header">
                <h2 className="account-client-payment-header-title">
                  total: {dataPromo.selectPrice.price} €
                </h2>
              </div>

              <div
                className="account-client-payment-content"
                style={{
                  display: isOpenTransfer ? "none" : "block",
                }}
              >
                <TitleSection title="pay" span="with" />

                <ul className="account-client-payment-content-methods">
                  <li className="account-client-payment-content-methods-item">
                    <button
                      onClick={createPromo}
                      className="account-client-payment-content-methods-button"
                    >
                      Bank card <br />
                      or
                      <br /> PayPal
                    </button>
                  </li>
                  <li className="account-client-payment-content-methods-item">
                    <button
                      className="account-client-payment-content-methods-button"
                      onClick={() => setIsOpenTranfer(true)}
                    >
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

              {isOpenTransfer ? (
                <div
                  className="account-client-payment-select-transfer"
                  style={{
                    padding: "20px 0px 40px 0px",
                  }}
                >
                  <TitleSection
                    title="Bank"
                    span={`Transfer ${transferCurrent}`}
                  />
                  <ul
                    className="account-client-payment-content-methods"
                    style={{ display: transferCurrent ? "none" : "flex" }}
                  >
                    <li
                      className="account-client-payment-content-methods-item"
                      style={{ maxWidth: 250 }}
                    >
                      <button
                        onClick={() => setTranfertCurrent("uk")}
                        className="account-client-payment-content-methods-button"
                      >
                        UK
                      </button>
                    </li>
                    <li
                      className="account-client-payment-content-methods-item"
                      style={{ maxWidth: 250 }}
                    >
                      <button
                        onClick={() => setTranfertCurrent("eu")}
                        className="account-client-payment-content-methods-button"
                      >
                        EU
                      </button>
                    </li>
                    <li
                      className="account-client-payment-content-methods-item"
                      style={{ maxWidth: 250 }}
                    >
                      <button
                        onClick={() => setTranfertCurrent("international")}
                        className="account-client-payment-content-methods-button"
                      >
                        INTERNATIONAL
                      </button>
                    </li>
                  </ul>

                  <div
                    className="account-client-payment-select-transfer-data"
                    style={{
                      display: transferCurrent === "" ? "none" : "block",
                    }}
                  >
                    {returnTranferData()}

                    <p className="account-client-payment-select-transfer-data-warning">
                      ADD THIS PAYMENT REFERENCE NUMBER - *
                      {data
                        ? data.referenceNumber
                          ? data.referenceNumber
                          : ""
                        : ""}
                      *
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 30,
                      }}
                    >
                      {" "}
                      <StandartButton
                        text="Confirm Payment Sent"
                        onClick={() => createPromoTranfer()}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
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
