import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import edit from "../../../../images/icons/edit.svg";
import ModalWindow from "../../../ModalWindow";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";

const AccountClientInvoiceDetails = () => {
  const [isOpenPersonal, setIsOpenPersonal] = useState(false);

  return (
    <>
      <section className="account-influencer-details">
        <div className="container-form">
          <div className="account-influencer-details-block">
            <TitleSection title="MY" span="account" />

            <p className="account-influencer-details-second">
              My Invoice Details
            </p>

            <div className="account-influencer-details-thoomb">
              <div className="account-influencer-details-wrapper">
                <div className="account-influencer-details-wrapper-header">
                  <p className="account-influencer-details-wrapper-header-title">
                    Personal Details
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenPersonal(true)}
                  >
                    <img
                      className="account-influencer-details-wrapper-header-edit-icon"
                      src={edit}
                    />
                  </button>
                </div>

                <div className="account-influencer-details-wrapper-content">
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      First name
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      John
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Last name
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      Doe
                    </p>
                  </div>

                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Address
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      16212TH Avenue NY. Manhattan AB TIR
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Country
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      USA
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      VAT Number
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      1234 5678 9012 3456
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalWindow
        header="Personal Details"
        isOpen={isOpenPersonal}
        setClose={setIsOpenPersonal}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="First name"
            placeholder="John"
            style={{ marginTop: "80px" }}
          />
          <TextInput
            title="Last name"
            placeholder="Doe"
            style={{ marginTop: "50px" }}
          />

          <TextInput
            title="Address"
            placeholder="16212TH Avenue NY. Manhattan AB TIR"
            style={{ marginTop: "50px" }}
          />
          <TextInput
            title="Country"
            placeholder="
            USA"
            style={{ marginTop: "50px" }}
          />

          <TextInput
            title="VAT Number"
            placeholder="1234 5678 9012 3456"
            style={{ marginTop: "50px" }}
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Save changes" />
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

export default AccountClientInvoiceDetails;
