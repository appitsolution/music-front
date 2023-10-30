import React from "react";
import TextInput from "../../../../form/TextInput";
import StandartButton from "../../../../form/StandartButton";
import AltButton from "../../../../form/AltButton";

const CreateInvoicePayment = () => {
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
            />
            <TextInput
              title="Bank Name*"
              placeholder="Enter Bank Name"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="Bank Branch Name*"
              placeholder="Enter Branch Name"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="Bank Country*"
              placeholder="Enter Bank Country"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="Bank Account Currency*"
              placeholder="Enter Bank Account Currency"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="Sort Code*"
              placeholder="Enter Sort Code"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="Account Number*"
              placeholder="Enter Account Number"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />
            <TextInput
              title="SWIFT / BIC"
              placeholder="SWIFT / BIC"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
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
              <StandartButton text="Continue with Bank" />
            </div>
          </div>
        </div>

        <div className="create-invoice-form">
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
        </div>
      </div>
    </>
  );
};

export default CreateInvoicePayment;
