import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import edit from "../../../../images/icons/edit.svg";
import ModalWindow from "../../../ModalWindow";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";

const AccountInfluencerDetails = () => {
  const [isOpenPersonal, setIsOpenPersonal] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenPhone, setIsOpenPhone] = useState(false);

  return (
    <>
      <section className="account-influencer-details">
        <div className="container-form">
          <div className="account-influencer-details-block">
            <TitleSection title="MY" span="account" />

            <p className="account-influencer-details-second">
              My Account Details
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
                      John Doe
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Username
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      John Doe
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Influencer name
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      John Doe
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Instagram
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      John Doe
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Followers number
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      30K
                    </p>
                  </div>
                </div>
              </div>

              <div className="account-influencer-details-wrapper">
                <div className="account-influencer-details-wrapper-header">
                  <p className="account-influencer-details-wrapper-header-title">
                    Password
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenPassword(true)}
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
                      Password
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      **********
                    </p>
                  </div>
                </div>
              </div>

              <div className="account-influencer-details-wrapper">
                <div className="account-influencer-details-wrapper-header">
                  <p className="account-influencer-details-wrapper-header-title">
                    Music style
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenMusic(true)}
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
                      Music style
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      House
                    </p>
                  </div>
                </div>
              </div>

              <div className="account-influencer-details-wrapper">
                <div className="account-influencer-details-wrapper-header">
                  <p className="account-influencer-details-wrapper-header-title">
                    Email address
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenEmail(true)}
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
                      Email
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      User_email@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="account-influencer-details-wrapper">
                <div className="account-influencer-details-wrapper-header">
                  <p className="account-influencer-details-wrapper-header-title">
                    Phone
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenPhone(true)}
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
                      Phone
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      +1 234 567 89 00
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
            placeholder="John Doe"
            style={{ marginTop: "80px" }}
          />
          <TextInput
            title="Username"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
          />
          <TextInput
            title="Influencer name"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
          />
          <TextInput
            title="Instagram"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
          />
          <TextInput
            title="Followers number"
            placeholder="30K"
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
      <ModalWindow
        header="Password"
        isOpen={isOpenPassword}
        setClose={setIsOpenPassword}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Confirm Current Password"
            placeholder="Enter Current Password"
            style={{ marginTop: "80px" }}
          />
          <TextInput
            title="New Password"
            placeholder="Enter New Password"
            style={{ marginTop: "50px" }}
          />
          <TextInput
            title="Confirm New Password"
            placeholder="Enter Confirm New Password"
            style={{ marginTop: "50px" }}
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Update Password" />
          </div>
        </div>
      </ModalWindow>
      <ModalWindow
        header="Music style"
        isOpen={isOpenMusic}
        setClose={setIsOpenMusic}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Music style"
            placeholder="House"
            style={{ marginTop: "80px" }}
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
      <ModalWindow
        header="Email address"
        isOpen={isOpenEmail}
        setClose={setIsOpenEmail}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Email"
            placeholder="User_email@gmail.com"
            style={{ marginTop: "80px" }}
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
      <ModalWindow
        header="Phone"
        isOpen={isOpenPhone}
        setClose={setIsOpenPhone}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Phone"
            placeholder="+1 234 567 89 00"
            style={{ marginTop: "80px" }}
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

export default AccountInfluencerDetails;
