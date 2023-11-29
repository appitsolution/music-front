import React, { useState } from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import StandartButton from "../../form/StandartButton";
import SelectedInput from "../../form/SelectedInput";
import ModalWindow from "../../ModalWindow";
import acceptIcon from "../../../images/icons/accept.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setAcceptAgree,
  setEmail,
  setFirstName,
  setFollowersNumber,
  setInfluencerName,
  setInstagram,
  setMusicStyle,
  setMusicStyleOther,
  setPassword,
  setPhone,
  setPrice,
  setRepeatPassword,
  setSignupClear,
  setUsername,
} from "../../../redux/slice/signup-influencer";
import {
  formatPhoneNumber,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils/validations";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import CheckBox from "../../form/CheckBox";

const SignupInfluencer = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.signupInfluencer);

  const [openModal, setOpenModal] = useState(false);

  const [errorsForm, setErrorsForm] = useState({
    firstName: false,
    influencerName: false,
    musicStyle: false,
    musicStyleOther: false,
    instagram: false,
    followersNumber: false,
    email: false,
    phone: false,
    price: false,
    password: false,
    repeatPassword: false,
  });

  const nextForm = async () => {
    let errrosList = {
      firstName: false,
      influencerName: false,
      musicStyle: false,
      musicStyleOther: false,
      instagram: false,
      followersNumber: false,
      email: false,
      phone: false,
      price: false,
      password: false,
      repeatPassword: false,
    };
    if (!dataForm.firstName) {
      errrosList = { ...errrosList, firstName: true };
    }
    if (!dataForm.influencerName) {
      errrosList = { ...errrosList, influencerName: true };
    }
    if (!dataForm.musicStyle) {
      errrosList = { ...errrosList, musicStyle: true };
    }
    if (dataForm.musicStyle === "Other" && !dataForm.musicStyleOther) {
      errrosList = { ...errrosList, musicStyleOther: true };
    }
    if (!dataForm.instagram) {
      errrosList = { ...errrosList, instagram: true };
    }
    if (!dataForm.followersNumber) {
      errrosList = { ...errrosList, followersNumber: true };
    }
    if (!validateEmail(dataForm.email)) {
      errrosList = { ...errrosList, email: true };
    }
    if (!dataForm.phone) {
      errrosList = { ...errrosList, phone: true };
    }
    if (!dataForm.price) {
      errrosList = { ...errrosList, price: true };
    }

    if (!dataForm.password) {
      errrosList = { ...errrosList, password: true };
    }

    if (
      !dataForm.firstName ||
      !dataForm.influencerName ||
      !dataForm.musicStyle ||
      (dataForm.musicStyle === "Other" && !dataForm.musicStyleOther) ||
      !dataForm.instagram ||
      !dataForm.followersNumber ||
      !dataForm.email ||
      !dataForm.phone ||
      !dataForm.price ||
      !dataForm.password
    ) {
      return setErrorsForm(errrosList);
    }

    if (dataForm.password !== dataForm.repeatPassword) {
      return setErrorsForm({ ...errrosList, repeatPassword: true });
    }

    if (!dataForm.acceptAgree) return;
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth/create/influencer`,
        {
          firstName: dataForm.firstName,
          influencerName: dataForm.influencerName,
          musicStyle:
            dataForm.musicStyle === "Other"
              ? dataForm.musicStyleOther
              : dataForm.musicStyle,
          instagramUsername: dataForm.instagram,
          followersNumber: dataForm.followersNumber,
          email: dataForm.email,
          phone: dataForm.phone,
          price: dataForm.price,
          password: dataForm.password,
        }
      );

      if (result.data.code === 201) {
        const requestToken = await axios.post(
          `${process.env.REACT_APP_SERVER}/auth/login/influencer`,
          {
            email: dataForm.email,
            password: dataForm.password,
          }
        );
        localStorage.setItem("token", requestToken.data.token);
        dispatch(setSignupClear());
        setOpenModal(true);
      }

      if (
        result.data.code === 409 &&
        result.data.message === "This instagram already exists"
      ) {
        return setErrorsForm({ ...errorsForm, instagram: true });
      }

      if (result.data.code === 409) {
        NotificationManager.error(
          "An account with this email already exists",
          "Error"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="signup-client">
        <div className="container-form">
          <div className="signup-client-block">
            <TitleSection
              title="Add Your details here
              to get approved as"
              span="an influencer"
            />

            <FormContainer style={{ marginTop: "60px" }}>
              <form className="signup-client-form">
                <TextInput
                  title="First name*"
                  placeholder="Enter name"
                  style={{ maxWidth: "665px", margin: "30px auto 60px auto" }}
                  value={dataForm.firstName}
                  setValue={(value) => dispatch(setFirstName(value))}
                  error={errorsForm.firstName}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, firstName: false })
                  }
                />
                <TextInput
                  title="Influencer name*"
                  placeholder="Enter influencer name"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.influencerName}
                  setValue={(value) => dispatch(setInfluencerName(value))}
                  error={errorsForm.influencerName}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, influencerName: false })
                  }
                />
                <SelectedInput
                  data={["Techno", "EDM", "House", "Other"]}
                  changeValue={(value) => {
                    dispatch(setMusicStyle(value));
                    setErrorsForm({ ...errorsForm, musicStyle: false });
                  }}
                  title="Music style*"
                  placeholder={
                    dataForm.musicStyle === ""
                      ? "Сhoose music style"
                      : dataForm.musicStyle
                  }
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  error={errorsForm.musicStyle}
                />
                {dataForm.musicStyle === "Other" ? (
                  <TextInput
                    title="Music Style Other*"
                    placeholder="Enter music style other"
                    style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                    value={dataForm.musicStyleOther}
                    setValue={(value) => dispatch(setMusicStyleOther(value))}
                    error={errorsForm.musicStyleOther}
                    onFocus={() =>
                      setErrorsForm({ ...errorsForm, musicStyleOther: false })
                    }
                  />
                ) : (
                  <></>
                )}
                <TextInput
                  title="Instagram username*"
                  placeholder="Enter instagram username"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.instagram}
                  setValue={(value) => dispatch(setInstagram(value))}
                  error={errorsForm.instagram}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, instagram: false })
                  }
                />
                <TextInput
                  title="Followers number*"
                  placeholder="Enter followers number"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.followersNumber}
                  setValue={(value) => dispatch(setFollowersNumber(value))}
                  error={errorsForm.followersNumber}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, followersNumber: false })
                  }
                />
                <TextInput
                  title="Email*"
                  placeholder="Enter email"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.email}
                  setValue={(value) => dispatch(setEmail(value))}
                  error={errorsForm.email}
                  onFocus={() => setErrorsForm({ ...errorsForm, email: false })}
                />

                <TextInput
                  title="Phone*"
                  placeholder="+_ _ ___ ___ __ __"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.phone}
                  setValue={(value) => dispatch(setPhone(value))}
                  error={errorsForm.phone}
                  onFocus={() => setErrorsForm({ ...errorsForm, phone: false })}
                />
                <TextInput
                  title="Price for 1 Instagram Post & Story, include your currency*"
                  placeholder="Enter your price here for 1 Instagram Post & Story, include your currency"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.price}
                  setValue={(value) => dispatch(setPrice(value))}
                  error={errorsForm.price}
                  onFocus={() => setErrorsForm({ ...errorsForm, price: false })}
                />
                <TextInput
                  type="password"
                  title="Password"
                  placeholder="Enter password"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.password}
                  setValue={(value) => dispatch(setPassword(value))}
                  error={errorsForm.password}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, password: false })
                  }
                />
                <TextInput
                  type="password"
                  title="Repeat Password"
                  placeholder="Repeat Password"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={dataForm.repeatPassword}
                  setValue={(value) => dispatch(setRepeatPassword(value))}
                  error={errorsForm.repeatPassword}
                  onFocus={() =>
                    setErrorsForm({ ...errorsForm, repeatPassword: false })
                  }
                />
                <CheckBox
                  text="Agree to"
                  linkText="terms and conditions"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  checked={dataForm.acceptAgree}
                  setChecked={(value) => dispatch(setAcceptAgree(value))}
                />

                <StandartButton
                  text="Apply now"
                  style={{ margin: "70px auto 0 auto" }}
                  onClick={nextForm}
                />
              </form>
            </FormContainer>

            <ModalWindow isOpen={openModal} setClose={setOpenModal}>
              <div className="signup-client-modal">
                <img className="signup-client-modal-icon" src={acceptIcon} />

                <h2 className="signup-client-modal-title">Internal approval</h2>

                <p className="signup-client-modal-second">
                  Thank you for providing us with your information. We
                  appreciate your interest.
                </p>

                <p className="signup-client-modal-desc">
                  Rest assured that we have received your submission, and our
                  team will carefully review it internally. If your submission
                  meets our criteria and aligns with our requirements, we will
                  notify you promptly. We value your patience and look forward
                  to sharing updates with you soon.
                </p>

                <StandartButton
                  text="Ok"
                  style={{
                    padding: "8px 80px",
                    marginTop: "30px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  onClick={() => navigation("/account/influencer")}
                />
              </div>
            </ModalWindow>
          </div>
        </div>
        <NotificationContainer />
      </section>
    </>
  );
};

export default SignupInfluencer;
