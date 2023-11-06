import React, { useState } from "react";
import TextInput from "../../../../form/TextInput";
import StandartButton from "../../../../form/StandartButton";
import AltButton from "../../../../form/AltButton";
import {
  setAccountNumber,
  setBankAccountCurrency,
  setBankBranchName,
  setBankCountry,
  setBankName,
  setCurrentWindow,
  setPayee,
  setSortCode,
  setSwiftOrBic,
} from "../../../../../redux/slice/create-invoice";
import { useDispatch, useSelector } from "react-redux";

const CreateInvoicePayment = () => {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.createInvoice.data);
  const [errorForm, setErrorForm] = useState({
    payee: false,
    bankName: false,
    bankBranchName: false,
    bankCountry: false,
    bankAccountCurrency: false,
    sortCode: false,
    accountNumber: false,
    swiftOrBic: false,
  });

  const nextForm = () => {
    let listError = {
      payee: false,
      bankName: false,
      bankBranchName: false,
      bankCountry: false,
      bankAccountCurrency: false,
      sortCode: false,
      accountNumber: false,
      swiftOrBic: false,
    };

    let haveError = false;
    for (let checkError in dataForm) {
      if (checkError === "contactName") break;
      if (dataForm[checkError] === "") {
        haveError = true;
        listError = {
          ...listError,
          [checkError]: true,
        };
      }
    }

    if (haveError) return setErrorForm(listError);

    dispatch(setCurrentWindow(1));
  };
  return (
    <>
      <div className="container-form">
        <p className="create-invoice-second">Select Payment Method</p>

        <div className="create-invoice-form">
          <div className="create-invoice-form-header">
            <p className="create-invoice-form-header-title">Bank Transfer</p>
          </div>

          <div className="create-invoice-form-content">
            <TextInput
              title="Payee*"
              placeholder="Enter Payee"
              style={{ maxWidth: "665px", margin: "0 auto" }}
              value={dataForm.payee}
              setValue={(value) => dispatch(setPayee(value))}
              error={errorForm.payee}
              onFocus={() => setErrorForm({ ...errorForm, payee: false })}
            />
            <TextInput
              title="Bank Name*"
              placeholder="Enter Bank Name"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.bankName}
              setValue={(value) => dispatch(setBankName(value))}
              error={errorForm.bankName}
              onFocus={() => setErrorForm({ ...errorForm, bankName: false })}
            />
            <TextInput
              title="Bank Branch Name*"
              placeholder="Enter Branch Name"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.bankBranchName}
              setValue={(value) => dispatch(setBankBranchName(value))}
              error={errorForm.bankBranchName}
              onFocus={() =>
                setErrorForm({ ...errorForm, bankBranchName: false })
              }
            />
            <TextInput
              title="Bank Country*"
              placeholder="Enter Bank Country"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.bankCountry}
              setValue={(value) => dispatch(setBankCountry(value))}
              error={errorForm.bankCountry}
              onFocus={() => setErrorForm({ ...errorForm, bankCountry: false })}
            />
            <TextInput
              title="Bank Account Currency*"
              placeholder="Enter Bank Account Currency"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.bankAccountCurrency}
              setValue={(value) => dispatch(setBankAccountCurrency(value))}
              error={errorForm.bankAccountCurrency}
              onFocus={() =>
                setErrorForm({ ...errorForm, bankAccountCurrency: false })
              }
            />
            <TextInput
              title="Sort Code*"
              placeholder="Enter Sort Code"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.sortCode}
              setValue={(value) => dispatch(setSortCode(value))}
              error={errorForm.sortCode}
              onFocus={() => setErrorForm({ ...errorForm, sortCode: false })}
            />
            <TextInput
              title="Account Number*"
              placeholder="Enter Account Number"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.accountNumber}
              setValue={(value) => dispatch(setAccountNumber(value))}
              error={errorForm.accountNumber}
              onFocus={() =>
                setErrorForm({ ...errorForm, accountNumber: false })
              }
            />
            <TextInput
              title="SWIFT / BIC"
              placeholder="SWIFT / BIC"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
              value={dataForm.swiftOrBic}
              setValue={(value) => dispatch(setSwiftOrBic(value))}
              error={errorForm.swiftOrBic}
              onFocus={() => setErrorForm({ ...errorForm, swiftOrBic: false })}
            />

            <div className="create-invoice-form-content-notification">
              <p className="create-invoice-form-content-notification-text">
                Please note that the required numbers for receiving money
                through bank transfers can vary depending on your country. If
                you are uncertain about the specific requirements, we recommend
                contacting your bank directly for information regarding
                international payments.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
            >
              <StandartButton
                text="Continue with Bank"
                onClick={nextForm}
                style={{ padding: "6px 25px" }}
              />
            </div>
          </div>
        </div>

        {/* <div className="create-invoice-form">
          <div className="create-invoice-form-header">
            <p className="create-invoice-form-header-title">Paypal</p>
          </div>

          <div
            className="create-invoice-form-content"
            style={{ padding: "50px 34px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AltButton text="Connect new PayPal account" />
            </div>

            <div className="create-invoice-form-content-notification">
              <p className="create-invoice-form-content-notification-text">
                <strong>Bank details are required in all instances.</strong>
                <br />
                PayPal details should only be provided in the event you do not
                have a bank account.
                <br />
                <br /> You may be charged fees (up to 6%) by PayPal and in some
                cases money can be held by them before being paid though to you.
                We cannot be held responsible for money held or lost by PayPal
                and we will only be able to re-pay funds if they have been
                returned to us in full.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CreateInvoicePayment;
