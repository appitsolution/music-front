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
  setCompany,
  setCompanyType,
  setEmail,
  setFirstName,
  setInstagram,
  setPassword,
  setPhone,
  setReferalCode,
  setRepeatPassword,
  setSignupClear,
  setUsername,
} from "../../../redux/slice/signup-client";
import { useNavigate } from "react-router-dom";
import {
  formatPhoneNumber,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils/validations";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import CheckBox from "../../form/CheckBox";
import axios from "axios";

const SignupClient = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const signClienState = useSelector((state) => state.signupClient);
  const [openModal, setOpenModal] = useState(false);

  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorCompany, setErrorCompany] = useState(false);
  const [errorCompanyType, setErrorCompanyType] = useState(false);
  const [errorInstagram, setErrorInstagram] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorReferalCode, setErrorReferalCode] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);

  const registerNext = async () => {
    if (!signClienState.firstName) {
      setErrorFirstName(true);
    }
    if (!signClienState.company) {
      setErrorCompany(true);
    }
    if (!signClienState.companyType) {
      setErrorCompanyType(true);
    }
    if (!signClienState.instagram) {
      setErrorInstagram(true);
    }
    if (!signClienState.email || !validateEmail(signClienState.email)) {
      setErrorEmail(true);
    }
    if (!signClienState.phone ) {
      setErrorPhone(true);
    }

    if (!signClienState.username) {
      setErrorUsername(true);
    }
    if (!signClienState.email) {
      setErrorEmail(true);
    }
    if (!signClienState.password) {
      setErrorPassword(true);
    }
    if (
      (!signClienState.firstName ||
      !signClienState.company ||
      !signClienState.companyType||
      !signClienState.instagram ||
      !signClienState.email||
      !signClienState.phone ||
      !signClienState.username ||
      !signClienState.email ||
      !signClienState.password)
    ) {
      return;
    }
    if (signClienState.password !== signClienState.repeatPassword) {
      setErrorRepeatPassword(true);
      return;
    }

    if (!signClienState.acceptAgree) return;
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth/create/client`,
        {
          firstName: signClienState.firstName,
          company: signClienState.company,
          companyType: signClienState.companyType,
          instagram: signClienState.instagram,
          email: signClienState.email,
          phone: signClienState.phone,
          referalCode: signClienState.referalCode,
          username: signClienState.username,
          password: signClienState.password,
        }
      );

      if (result.data.code === 201) {
        const requestToken = await axios.post(
          `${process.env.REACT_APP_SERVER}/auth/login/client`,
          {
            email: signClienState.email,
            password: signClienState.password,
          }
        );
        setOpenModal(true);
        localStorage.setItem("token", requestToken.data.token);
        dispatch(setSignupClear());
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
              span="a sponsoring client"
            />

            <FormContainer style={{ marginTop: "60px" }}>
              <form className="signup-client-form">
                <TextInput
                  title="First name*"
                  placeholder="Enter name"
                  style={{ maxWidth: "665px", margin: "30px auto 60px auto" }}
                  value={signClienState.firstName}
                  setValue={(value) => dispatch(setFirstName(value))}
                  error={errorFirstName}
                  onFocus={() => setErrorFirstName(false)}
                />
                <TextInput
                  title="Company*"
                  placeholder="Enter company name"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.company}
                  setValue={(value) => dispatch(setCompany(value))}
                  error={errorCompany}
                  onFocus={() => setErrorCompany(false)}
                />
                <SelectedInput
                  data={["Techno", "EDM", "House", "Other"]}
                  title="Company type*"
                  changeValue={(value) => dispatch(setCompanyType(value))}
                  placeholder={
                    signClienState.companyType === ""
                      ? "Сhoose company type"
                      : signClienState.companyType
                  }
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  error={errorCompanyType}
                />
                <TextInput
                  title="Instagram*"
                  placeholder="Enter instagram link"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.instagram}
                  setValue={(value) => dispatch(setInstagram(value))}
                  error={errorInstagram}
                  onFocus={() => setErrorInstagram(false)}
                />
                 <TextInput
                title="Username"
                placeholder="Enter username"
                style={{ maxWidth: "665px", margin: "0 auto 60px auto"  }}
                value={signClienState.username}
                setValue={(value) => dispatch(setUsername(value))}
                error={errorUsername}
                onFocus={() => setErrorUsername(false)}
              />
                <TextInput
                  type={"email"}
                  title="Email*"
                  placeholder="Enter email"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.email}
                  setValue={(value) => dispatch(setEmail(value))}
                  error={errorEmail}
                  onFocus={() => setErrorEmail(false)}
                />
                <TextInput
                  title="Phone*"
                  placeholder="+_ _ ___ ___ __ __"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.phone}
                  setValue={(value) =>
                    dispatch(setPhone(value))
                  }
                  error={errorPhone}
                  onFocus={() => setErrorPhone(false)}
                />
                <TextInput
                  title="Referal code"
                  placeholder="Enter referal code"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.referalCode}
                  setValue={(value) => dispatch(setReferalCode(value))}
                  error={errorReferalCode}
                  onFocus={() => setErrorReferalCode(false)}
                />
                 <TextInput
                type="password"
                title="Password"
                placeholder="Enter password"
                style={{ maxWidth: "665px", margin: "0 auto 60px auto"  }}
                value={signClienState.password}
                setValue={(value) => dispatch(setPassword(value))}
                error={errorPassword}
                onFocus={() => setErrorPassword(false)}
              />
              <TextInput
                type="password"
                title="Repeat Password"
                placeholder="Repeat Password"
                style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                value={signClienState.repeatPassword}
                setValue={(value) => dispatch(setRepeatPassword(value))}
                error={errorRepeatPassword}
                onFocus={() => setErrorRepeatPassword(false)}
              />
              <CheckBox
                text="Agree to terms and conditions"
                style={{ maxWidth: "665px", margin: "0 auto 60px auto"  }}
                checked={signClienState.acceptAgree}
                setChecked={(value) => dispatch(setAcceptAgree(value))}
              />

                <StandartButton
                  text="Apply now"
                  style={{ margin: "70px auto 0 auto" }}
                  onClick={registerNext}
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
                  onClick={() => {
                    setOpenModal(false);
                    navigation("/account/client");
                  }}
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

export default SignupClient;
