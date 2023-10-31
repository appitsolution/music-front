import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import edit from "../../../../images/icons/edit.svg";
import ModalWindow from "../../../ModalWindow";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";
import UseVerify from "../../../../hooks/useVerify";
import axios from "axios";

const AccountClientDetails = () => {
  const [data, setData] = useState({});
  const [isOpenPersonal, setIsOpenPersonal] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenPhone, setIsOpenPhone] = useState(false);

  const [dataPersonal, setDataPersonal] = useState({
    firstName: "",
    username: "",
    instagram: "",
    referalCode: "",
  });

  const [dataPassword, setDataPassword] = useState({
    currentPassword: "",
    newPassword: "",
    acceptPassword: "",
  });

  const [dataCompany, setDataCompany] = useState({
    company: "",
    companyType: "",
  });

  const [dataEmail, setDataEmail] = useState("");
  const [dataPhone, setDataPhone] = useState("");

  const updateClientPersonal = async () => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/personal`,
        { ...dataPersonal, id: data._id }
      );
      if (result.data.code === 200) {
        setIsOpenPersonal(false);
        setData({ ...data, ...dataPersonal });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateClientPassword = async () => {
    if (dataPassword.newPassword !== dataPassword.acceptPassword) return;
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/password`,
        {
          currentPassword: dataPassword.currentPassword,
          newPassword: dataPassword.newPassword,
          id: data._id,
        }
      );
      if (result.data.code === 200) {
        setIsOpenPassword(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateClientCompany = async () => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/company`,
        { ...dataCompany, id: data._id }
      );
      if (result.data.code === 200) {
        setIsOpenCompany(false);
        setData({ ...data, ...dataCompany });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateClientEmail = async () => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/email`,
        { email: dataEmail, id: data._id }
      );
      if (result.data.code === 200) {
        setIsOpenEmail(false);
        setData({ ...data, email: dataEmail });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateClientPhone = async () => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/phone`,
        { phone: dataPhone, id: data._id }
      );
      if (result.data.code === 200) {
        setIsOpenPhone(false);
        setData({ ...data, phone: dataPhone });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();
      setData(dataFetch);
      setDataPersonal({
        firstName: dataFetch.firstName,
        username: dataFetch.username,
        instagram: dataFetch.instagram,
        referalCode: dataFetch.referalCode,
      });
      setDataCompany({
        company: dataFetch.company,
        companyType: dataFetch.companyType,
      });
      setDataEmail(dataFetch.email);
      setDataPhone(dataFetch.phone);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
                      {data.firstName}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Username
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.username}
                    </p>
                  </div>

                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Instagram
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.instagram}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Referal code
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.referalCode}
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
                    Company
                  </p>

                  <button
                    className="account-influencer-details-wrapper-header-edit"
                    onClick={() => setIsOpenCompany(true)}
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
                      Company
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.company}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Company type
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.companyType}
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
                      {data.email}
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
                      {data.phone}
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
            value={dataPersonal.firstName}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, firstName: value })
            }
          />
          <TextInput
            title="Username"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
            value={dataPersonal.username}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, username: value })
            }
          />

          <TextInput
            title="Instagram"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
            value={dataPersonal.instagram}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, instagram: value })
            }
          />
          <TextInput
            title="Referal code"
            placeholder="Code"
            style={{ marginTop: "50px" }}
            value={dataPersonal.referalCode}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, referalCode: value })
            }
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton
              text="Save changes"
              onClick={updateClientPersonal}
            />
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
            type="password"
            title="Confirm Current Password"
            placeholder="Enter Current Password"
            style={{ marginTop: "80px" }}
            value={dataPassword.currentPassword}
            setValue={(value) =>
              setDataPassword({
                ...dataPassword,
                currentPassword: value,
              })
            }
          />
          <TextInput
            type="password"
            title="New Password"
            placeholder="Enter New Password"
            style={{ marginTop: "50px" }}
            value={dataPassword.newPassword}
            setValue={(value) =>
              setDataPassword({
                ...dataPassword,
                newPassword: value,
              })
            }
          />
          <TextInput
            type="password"
            title="Confirm New Password"
            placeholder="Enter Confirm New Password"
            style={{ marginTop: "50px" }}
            value={dataPassword.acceptPassword}
            setValue={(value) =>
              setDataPassword({
                ...dataPassword,
                acceptPassword: value,
              })
            }
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton
              text="Update Password"
              onClick={updateClientPassword}
            />
          </div>
        </div>
      </ModalWindow>

      <ModalWindow
        header="Company"
        isOpen={isOpenCompany}
        setClose={setIsOpenCompany}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Company"
            placeholder="Enter Company Name"
            style={{ marginTop: "80px" }}
            value={dataCompany.company}
            setValue={(value) =>
              setDataCompany({ ...dataCompany, company: value })
            }
          />

          <TextInput
            title="Company type"
            placeholder="Enter Company Type"
            style={{ marginTop: "50px" }}
            value={dataCompany.companyType}
            setValue={(value) =>
              setDataCompany({ ...dataCompany, companyType: value })
            }
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Save changes" onClick={updateClientCompany} />
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
            value={dataEmail}
            setValue={(value) => setDataEmail(value)}
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Save changes" onClick={updateClientEmail} />
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
            value={dataPhone}
            setValue={(value) => setDataPhone(value)}
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Save changes" onClick={updateClientPhone} />
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

export default AccountClientDetails;
