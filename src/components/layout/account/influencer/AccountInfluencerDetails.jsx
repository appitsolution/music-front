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

import deleteIcon from "../../../../images/icons/close.svg";
import SelectedInput from "../../../form/SelectedInput";

const AccountInfluencerDetails = () => {
  const [data, setData] = useState({});
  const [isOpenPersonal, setIsOpenPersonal] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenPhone, setIsOpenPhone] = useState(false);

  const [dataPersonal, setDataPersonal] = useState({
    firstName: "",
    instagram: [
      {
        musicStyle: "",
        musicStyleOther: "",
        instagramUsername: "",
        followersNumber: "",
        logo: "",
        price: "",
      },
    ],
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
    instagram: [
      {
        musicStyle: false,
        instagramUsername: false,
        followersNumber: false,
        logo: false,
        price: false,
      },
    ],
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
      instagram: {
        musicStyle: false,
        instagramUsername: false,
        followersNumber: false,
        logo: false,
        price: false,
      },
    };
    if (!dataPersonal.firstName) {
      errorPersonalList = {
        ...errorPersonal,
        firstName: true,
      };
    }

    let checkInstagram = false;
    const checkFormErrorInstagram = errorPersonal.instagram.map(
      (item, index) => {
        let instagramUsername = !Boolean(
          dataPersonal.instagram[index].instagramUsername
        );
        let followersNumber = !Boolean(
          dataPersonal.instagram[index].followersNumber
        );
        let logo = !Boolean(dataPersonal.instagram[index].logo);
        let musicStyle = !Boolean(dataPersonal.instagram[index].musicStyle);

        if (instagramUsername || followersNumber || logo || musicStyle)
          checkInstagram = true;

        return {
          musicStyle: musicStyle,
          instagramUsername: instagramUsername,
          followersNumber: followersNumber,
          logo: logo,
        };
      }
    );

    errorPersonalList = {
      ...errorPersonalList,
      instagram: checkFormErrorInstagram,
    };
    try {
      if (!dataPersonal.firstName || checkInstagram) {
        return setErrorPersonal(errorPersonalList);
      }

      const checkInstagramList = dataPersonal.instagram.map((item) => {
        if (item.musicStyle === "Other") {
          return {
            ...item,
            musicStyle: item.musicStyleOther,
          };
        } else {
          return {
            ...item,
            musicStyle: item.musicStyle,
          };
        }
      });

      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/profile/influencer/personal`,
        { ...dataPersonal, instagram: checkInstagramList, id: data._id }
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
    console.log("1");
    if (!dataPassword.currentPassword) {
      setErrorPassword({
        ...errorPassword,
        currentPassword: true,
      });
    }
    console.log("2");
    if (!dataPassword.newPassword) {
      setErrorPassword({
        ...errorPassword,
        newPassword: true,
      });
    }
    console.log("3");
    if (
      !dataPassword.repeatPassword ||
      !dataPassword.currentPassword ||
      !dataPassword.newPassword
    ) {
      return;
    }
    console.log("4");
    if (dataPassword.newPassword !== dataPassword.repeatPassword) {
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
          role: "influencer",
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
          repeatPassword: "",
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
        `${process.env.REACT_APP_SERVER}/profile/influencer/email`,
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
      setErrorPersonal({
        ...errorPersonal,
        instagram: Array.from({ length: dataFetch.instagram.length }, () => ({
          musicStyle: false,
          instagramUsername: false,
          followersNumber: false,
          logo: false,
          price: false,
        })),
      });
      setDataPersonal({
        firstName: dataFetch.firstName,
        instagram: dataFetch.instagram,
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

                  {dataPersonal.instagram.map((instagram, index) => (
                    <div className="account-influencer-details-wrapper-content-item">
                      <p className="account-influencer-details-wrapper-content-title">
                        ({index + 1}) Instagram username
                      </p>
                      <p className="account-influencer-details-wrapper-content-value">
                        {instagram.instagramUsername
                          ? instagram.instagramUsername
                          : "No Data"}
                      </p>
                    </div>
                  ))}
                  {dataPersonal.instagram.map((instagram, index) => (
                    <div className="account-influencer-details-wrapper-content-item">
                      <p className="account-influencer-details-wrapper-content-title">
                        ({index + 1}) Followers number
                      </p>
                      <p className="account-influencer-details-wrapper-content-value">
                        {instagram.followersNumber
                          ? instagram.followersNumber
                          : "No Data"}
                      </p>
                    </div>
                  ))}
                  {dataPersonal.instagram.map((instagram, index) => (
                    <div className="account-influencer-details-wrapper-content-item">
                      <p className="account-influencer-details-wrapper-content-title">
                        ({index + 1}) Logo Link
                      </p>
                      <p className="account-influencer-details-wrapper-content-value">
                        {instagram.logo ? instagram.logo : "No Data"}
                      </p>
                    </div>
                  ))}
                  {dataPersonal.instagram.map((instagram, index) => (
                    <div className="account-influencer-details-wrapper-content-item">
                      <p className="account-influencer-details-wrapper-content-title">
                        ({index + 1}) Price
                      </p>
                      <p className="account-influencer-details-wrapper-content-value">
                        {instagram.price ? instagram.price : "No Data"}
                      </p>
                    </div>
                  ))}
                  {dataPersonal.instagram.map((instagram, index) => (
                    <div className="account-influencer-details-wrapper-content-item">
                      <p className="account-influencer-details-wrapper-content-title">
                        ({index + 1}) Music Style
                      </p>
                      <p className="account-influencer-details-wrapper-content-value">
                        {instagram.musicStyle
                          ? instagram.musicStyle
                          : "No Data"}
                      </p>
                    </div>
                  ))}
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

          {dataPersonal.instagram.map((ins, index) => (
            <>
              <div className="instagram-select-item" key={index}>
                <SelectedInput
                  data={["Techno", "EDM", "House", "Other"]}
                  changeValue={(value) => {
                    const updateInstagram = dataPersonal.instagram;
                    updateInstagram[index].musicStyle = value;
                    setDataPersonal({
                      ...dataPersonal,
                      instagram: updateInstagram,
                    });

                    const errorInstagram = errorPersonal.instagram;
                    errorInstagram[index].price = false;
                    setErrorPersonal({
                      ...errorPersonal,
                      instagram: errorInstagram,
                    });
                  }}
                  title={`(${index + 1}) Music style*`}
                  placeholder={
                    dataPersonal.instagram[index].musicStyle === ""
                      ? "Сhoose music style"
                      : dataPersonal.instagram[index].musicStyle
                  }
                  style={{ marginTop: "60px" }}
                  error={errorPersonal.instagram[index].musicStyle}
                />
                {dataPersonal.instagram[index].musicStyle === "Other" ? (
                  <TextInput
                    title={`(${index + 1}) Music Style Other*`}
                    placeholder="Enter music style other"
                    style={{ marginTop: "60px" }}
                    value={dataPersonal.instagram[index].musicStyleOther}
                    setValue={(value) => {
                      const updateInstagram = dataPersonal.instagram;
                      updateInstagram[index].musicStyleOther = value;
                      setDataPersonal({
                        ...dataPersonal,
                        instagram: updateInstagram,
                      });
                    }}
                    error={errorPersonal.musicStyleOther}
                    onFocus={() => {
                      const errorInstagram = errorPersonal.instagram;
                      errorInstagram[index].price = false;
                      setErrorPersonal({
                        ...errorPersonal,
                        instagram: errorInstagram,
                      });
                    }}
                  />
                ) : (
                  <></>
                )}
                <TextInput
                  title={`(${index + 1}) Instagram username`}
                  placeholder="John Doe"
                  style={{ marginTop: "50px" }}
                  value={dataPersonal.instagram[index].instagramUsername}
                  setValue={(value) => {
                    const updateInstagram = dataPersonal.instagram;
                    updateInstagram[index].instagramUsername = value;
                    setDataPersonal({
                      ...dataPersonal,
                      instagram: updateInstagram,
                    });
                  }}
                  error={errorPersonal.instagram[index].instagramUsername}
                  onFocus={() => {
                    const errorInstagram = errorPersonal.instagram;
                    errorInstagram[index].price = false;
                    setErrorPersonal({
                      ...errorPersonal,
                      instagram: errorInstagram,
                    });
                  }}
                />
                <TextInput
                  title={`(${index + 1}) Followers number`}
                  placeholder="30K"
                  style={{ marginTop: "50px" }}
                  value={dataPersonal.instagram[index].followersNumber}
                  setValue={(value) => {
                    const updateInstagram = dataPersonal.instagram;
                    updateInstagram[index].followersNumber = value;
                    setDataPersonal({
                      ...dataPersonal,
                      instagram: updateInstagram,
                    });
                  }}
                  error={errorPersonal.instagram[index].followersNumber}
                  onFocus={() => {
                    const errorInstagram = errorPersonal.instagram;
                    errorInstagram[index].followersNumber = false;
                    setErrorPersonal({
                      ...errorPersonal,
                      instagram: errorInstagram,
                    });
                  }}
                />
                {index === 0 ? (
                  <></>
                ) : (
                  <button
                    type="button"
                    className="instagram-select-item-delete"
                    onClick={() => {
                      const editErrorFormInstagram =
                        errorPersonal.instagram.filter(
                          (item, itemIndex) => itemIndex !== index
                        );
                      setErrorPersonal({
                        ...errorPersonal,
                        instagram: editErrorFormInstagram,
                      });
                      const editInstagram = dataPersonal.instagram.filter(
                        (fil, indexFil) => index !== indexFil
                      );

                      setDataPersonal({
                        ...dataPersonal,
                        instagram: editInstagram,
                      });
                    }}
                  >
                    <img
                      className="instagram-select-item-delete-icon"
                      src={deleteIcon}
                    />
                  </button>
                )}
                <TextInput
                  title={`(${index + 1}) Logo Link`}
                  placeholder="https://link.com"
                  style={{ marginTop: "50px" }}
                  value={dataPersonal.instagram[index].logo}
                  setValue={(value) => {
                    const updateInstagram = dataPersonal.instagram;
                    updateInstagram[index].logo = value;
                    setDataPersonal({
                      ...dataPersonal,
                      instagram: updateInstagram,
                    });
                  }}
                  error={errorPersonal.instagram[index].logo}
                  onFocus={() => {
                    const errorInstagram = errorPersonal.instagram;
                    errorInstagram[index].logo = false;
                    setErrorPersonal({
                      ...errorPersonal,
                      instagram: errorInstagram,
                    });
                  }}
                />
                <TextInput
                  title={`(${index + 1}) Price`}
                  placeholder="30"
                  style={{ marginTop: "50px", pointerEvents: "none" }}
                  value={dataPersonal.instagram[index].price}
                />
              </div>
            </>
          ))}
          <StandartButton
            text="Add a New Instagram Account"
            style={{ fontSize: 15, margin: "10px auto 0 auto" }}
            onClick={() => {
              setErrorPersonal({
                ...errorPersonal,
                instagram: [
                  ...errorPersonal.instagram,
                  {
                    musicStyle: false,
                    instagramUsername: false,
                    followersNumber: false,
                    logo: false,
                    price: false,
                  },
                ],
              });
              setDataPersonal({
                ...dataPersonal,
                instagram: [
                  ...dataPersonal.instagram,
                  {
                    musicStyle: "",
                    musicStyleOther: "",
                    instagramUsername: "",
                    followersNumber: "",
                    logo: "",
                    price: "",
                  },
                ],
              });
            }}
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
