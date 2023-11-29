import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import edit from "../../../../images/icons/edit.svg";
import ModalWindow from "../../../ModalWindow";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";
import axios from "axios";
import UseVerify from "../../../../hooks/useVerify";
import {
  formatPhoneNumber,
  validatePhoneNumber,
} from "../../../../utils/validations";

const AccountInfluencerDetails = () => {
  const [data, setData] = useState({});
  const [isOpenPersonal, setIsOpenPersonal] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenPhone, setIsOpenPhone] = useState(false);

  const [dataPersonal, setDataPersonal] = useState({
    firstName: "",
    influencerName: "",
    instagramUsername: "",
    followersNumber: "",
  });

  const [dataPassword, setDataPassword] = useState({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [dataMusic, setDataMusic] = useState("");
  const [dataEmail, setDataEmail] = useState("");
  const [dataPhone, setDataPhone] = useState("");

  const [errorPersonal, setErrorPersonal] = useState({
    firstName: false,
    influencerName: false,
    instagramUsername: false,
    followersNumber: false,
  });

  const [errorPassword, setErrorPassword] = useState({
    currentPassword: false,
    newPassword: false,
    repeatPassword: false,
  });

  const [errorMusic, setErrorMusic] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const updateClientPersonal = async () => {
    let errorPersonalList = {
      firstName: false,
      influencerName: false,
      instagramUsername: false,
      followersNumber: false,
    };
    if (!dataPersonal.firstName) {
      errorPersonalList = {
        ...errorPersonal,
        firstName: true,
      };
    }

    if (!dataPersonal.influencerName) {
      errorPersonalList = {
        ...errorPersonal,
        influencerName: true,
      };
    }
    if (!dataPersonal.instagramUsername) {
      errorPersonalList = {
        ...errorPersonal,
        instagramUsername: true,
      };
    }

    if (!dataPersonal.followersNumber) {
      errorPersonalList = {
        ...errorPersonal,
        followersNumber: true,
      };
    }
    try {
      if (
        !dataPersonal.firstName ||
        !dataPersonal.instagramUsername ||
        !dataPersonal.influencerName ||
        !dataPersonal.followersNumber
      ) {
        return setErrorPersonal(errorPersonalList);
      }

      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/influencer/personal`,
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
    if (!dataPassword.currentPassword) {
      setErrorPassword({
        ...errorPassword,
        currentPassword: true,
      });
    }
    if (!dataPassword.newPassword) {
      setErrorPassword({
        ...errorPassword,
        newPassword: true,
      });
    }
    if (
      !dataPassword.acceptPassword ||
      !dataPassword.currentPassword ||
      !dataPassword.newPassword
    ) {
      return;
    }
    if (dataPassword.newPassword !== dataPassword.acceptPassword) {
      setErrorPassword({
        ...errorPassword,
        repeatPassword: true,
      });
      return;
    }
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/client/password`,
        {
          role: "client",
          currentPassword: dataPassword.currentPassword,
          newPassword: dataPassword.newPassword,
          id: data._id,
        }
      );
      if (result.data.code === 200) {
        setIsOpenPassword(false);
        setDataPassword({
          currentPassword: "",
          newPassword: "",
          acceptPassword: "",
        });
        return;
      }
      setErrorPassword({
        ...errorPassword,
        repeatPassword: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateMusicStyle = async () => {
    if (!dataMusic) {
      return setErrorMusic(true);
    }

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/influencer/music`,
        { musicStyle: dataMusic, id: data._id }
      );
      if (result.data.code === 200) {
        setIsOpenMusic(false);
        setData({ ...data, musicStyle: dataMusic });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateClientEmail = async () => {
    if (!dataEmail) {
      return setErrorEmail(true);
    }
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
    if (!dataPhone) {
      return setErrorPhone(true);
    }
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/influencer/phone`,
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
        influencerName: dataFetch.influencerName,
        instagramUsername: dataFetch.instagramUsername,
        followersNumber: dataFetch.followersNumber,
      });
      setDataMusic(dataFetch.musicStyle);
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
                      {data.firstName ? data.firstName : "No Data"}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Influencer name
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.influencerName ? data.influencerName : "No Data"}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Instagram username
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.instagramUsername
                        ? data.instagramUsername
                        : "No Data"}
                    </p>
                  </div>
                  <div className="account-influencer-details-wrapper-content-item">
                    <p className="account-influencer-details-wrapper-content-title">
                      Followers number
                    </p>
                    <p className="account-influencer-details-wrapper-content-value">
                      {data.followersNumber ? data.followersNumber : "No Data"}
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
                      {data.musicStyle ? data.musicStyle : "No Data"}
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
                      {data.email ? data.email : "No Data"}
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
                      {data.phone ? data.phone : "No Data"}
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
            error={errorPersonal.firstName}
            onFocus={() =>
              setErrorPersonal({ ...errorPersonal, firstName: false })
            }
          />

          <TextInput
            title="Influencer name"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
            value={dataPersonal.influencerName}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, influencerName: value })
            }
            error={errorPersonal.influencerName}
            onFocus={() =>
              setErrorPersonal({ ...errorPersonal, influencerName: false })
            }
          />
          <TextInput
            title="Instagram username"
            placeholder="John Doe"
            style={{ marginTop: "50px" }}
            value={dataPersonal.instagramUsername}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, instagramUsername: value })
            }
            error={errorPersonal.instagramUsername}
            onFocus={() =>
              setErrorPersonal({ ...errorPersonal, instagramUsername: false })
            }
          />
          <TextInput
            title="Followers number"
            placeholder="30K"
            style={{ marginTop: "50px" }}
            value={dataPersonal.followersNumber}
            setValue={(value) =>
              setDataPersonal({ ...dataPersonal, followersNumber: value })
            }
            error={errorPersonal.followersNumber}
            onFocus={() =>
              setErrorPersonal({ ...errorPersonal, followersNumber: false })
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
              setDataPassword({ ...dataPassword, currentPassword: value })
            }
            error={errorPassword.currentPassword}
            onFocus={() =>
              setErrorPassword({ ...errorPassword, currentPassword: false })
            }
          />
          <TextInput
            type="password"
            title="New Password"
            placeholder="Enter New Password"
            style={{ marginTop: "50px" }}
            value={dataPassword.newPassword}
            setValue={(value) =>
              setDataPassword({ ...dataPassword, newPassword: value })
            }
            error={errorPassword.newPassword}
            onFocus={() =>
              setErrorPassword({ ...errorPassword, newPassword: false })
            }
          />
          <TextInput
            type="password"
            title="Confirm New Password"
            placeholder="Enter Confirm New Password"
            style={{ marginTop: "50px" }}
            value={dataPassword.repeatPassword}
            setValue={(value) =>
              setDataPassword({ ...dataPassword, repeatPassword: value })
            }
            error={errorPassword.repeatPassword}
            onFocus={() =>
              setErrorPassword({ ...errorPassword, repeatPassword: false })
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
        header="Music style"
        isOpen={isOpenMusic}
        setClose={setIsOpenMusic}
      >
        <div className="account-influencer-details-form">
          <TextInput
            title="Music style"
            placeholder="House"
            style={{ marginTop: "80px" }}
            value={dataMusic}
            setValue={(value) => setDataMusic(value)}
            error={errorMusic}
            onFocus={() => setErrorMusic(false)}
          />

          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StandartButton text="Save changes" onClick={updateMusicStyle} />
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
            error={errorEmail}
            onFocus={() => setErrorEmail(false)}
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
            error={errorPhone}
            onFocus={() => setErrorPhone(false)}
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

export default AccountInfluencerDetails;
