import React, { useState } from "react";
import StandartButton from "../../../../form/StandartButton";
import TextInput from "../../../../form/TextInput";
import TextArea from "../../../../form/TextArea";

const CreateInvoiceDetails = () => {
  const [selectDetails, setSelectDetails] = useState(false);
  const [switchVAT, setSwitchVAT] = useState(false);
  return (
    <>
    <div className="container-form">
      <p className="create-invoice-second">Fill Invoice Recipient details</p>

      <div className="create-invoice-select">
        <button
          className={`create-invoice-select-button ${
            !selectDetails && "active"
          }`}
          onClick={() => setSelectDetails(false)}
        >
          Individual
        </button>
        <button
          className={`create-invoice-select-button ${
            selectDetails && "active"
          }`}
          onClick={() => setSelectDetails(true)}
        >
          Company
        </button>
      </div>

      <div className="create-invoice-form">
        <div className="create-invoice-form-header">
          <p className="create-invoice-form-header-title">Contact</p>
        </div>

        <div className="create-invoice-form-content">
          <TextInput
            title="Contact Name*"
            placeholder="Enter Contact Name"
            style={{ maxWidth: "665px", margin: "0 auto" }}
          />
          <TextInput
            title="Contact Phone*"
            placeholder="Enter Contact Phone"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />
          <TextInput
            title="Contact Email*"
            placeholder="Enter Contact Email"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />

          {!selectDetails && (
            <div
              className="create-invoice-form-content-switch"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            >
              <button
                className={`create-invoice-form-content-switch-input ${
                  switchVAT && "active"
                }`}
                onClick={() => setSwitchVAT(!switchVAT)}
              >
                <div className="create-invoice-form-content-switch-input-decor"></div>
              </button>

              <p className="create-invoice-form-content-switch-text">
                VAT Registrated
              </p>
            </div>
          )}
        </div>
      </div>

      {selectDetails && (
        <div className="create-invoice-form">
          <div className="create-invoice-form-header">
            <p className="create-invoice-form-header-title">Company</p>
          </div>

          <div className="create-invoice-form-content">
            <TextInput
              title="Company Name*"
              placeholder="Enter Company Name"
              style={{ maxWidth: "665px", margin: "0 auto" }}
            />
            <TextInput
              title="Company Id*"
              placeholder="Enter Company Id"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            />

            <div
              className="create-invoice-form-content-switch"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            >
              <button
                className={`create-invoice-form-content-switch-input ${
                  switchVAT && "active"
                }`}
                onClick={() => setSwitchVAT(!switchVAT)}
              >
                <div className="create-invoice-form-content-switch-input-decor"></div>
              </button>

              <p className="create-invoice-form-content-switch-text">
                VAT Registrated
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="create-invoice-form">
        <div className="create-invoice-form-header">
          <p className="create-invoice-form-header-title">Address</p>
        </div>

        <div className="create-invoice-form-content">
          <TextInput
            title="Street*"
            placeholder="Enter Street"
            style={{ maxWidth: "665px", margin: "0 auto" }}
          />
          <TextInput
            title="City*"
            placeholder="Enter City"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />
          <TextInput
            title="State*"
            placeholder="Enter State"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />
          <TextInput
            title="Postcode*"
            placeholder="Enter Postcode"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />
          <TextInput
            title="Country*"
            placeholder="Enter Country"
            style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
          />

          {selectDetails && (
            <div
              className="create-invoice-form-content-switch"
              style={{ maxWidth: "665px", margin: "0 auto", marginTop: "60px" }}
            >
              <button
                className={`create-invoice-form-content-switch-input ${
                  switchVAT && "active"
                }`}
                onClick={() => setSwitchVAT(!switchVAT)}
              >
                <div className="create-invoice-form-content-switch-input-decor"></div>
              </button>

              <p className="create-invoice-form-content-switch-text">
                My registrated office is different
              </p>
            </div>
          )}
        </div>
      </div>

      <div
        className="create-invoice-form"
        style={{ paddingTop: "34px", paddingBottom: "34px" }}
      >
        <TextArea
          placeholder="Add a note to the invoice"
          style={{ maxWidth: "665px", margin: "0 auto" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <StandartButton text="Continue" />
      </div>
      </div>
    </>
  );
};

export default CreateInvoiceDetails;
