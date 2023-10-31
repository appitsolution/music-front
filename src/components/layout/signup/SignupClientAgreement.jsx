import React from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import CheckBox from "../../form/CheckBox";
import StandartButton from "../../form/StandartButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAcceptAgree,
  setEmail,
  setPassword,
  setRepeatPassword,
  setSignupClear,
  setUsername,
} from "../../../redux/slice/signup-client";
import axios from "axios";

const SignupClientAgreement = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const signupClientState = useSelector((state) => state.signupClient);

  const register = async () => {
    if (
      !signupClientState.username ||
      !signupClientState.email ||
      !signupClientState.password
    ) {
      return;
    }

    if (signupClientState.password !== signupClientState.repeatPassword) {
      return;
    }

    if (!signupClientState.acceptAgree) return;
    console.log(`${process.env.REACT_APP_SERVER}/auth/create/client`);
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth/create/client`,
        {
          firstName: signupClientState.firstName,
          company: signupClientState.company,
          companyType: signupClientState.companyType,
          instagram: signupClientState.instagram,
          email: signupClientState.email,
          phone: signupClientState.phone,
          referalCode: signupClientState.referalCode,
          username: signupClientState.username,
          password: signupClientState.password,
        }
      );

      if (result.data.code === 201) {
        const requestToken = await axios.post(
          `${process.env.REACT_APP_SERVER}/auth/login/client`,
          {
            email: signupClientState.email,
            password: signupClientState.password,
          }
        );
        localStorage.setItem("token", requestToken.data.token);
        dispatch(setSignupClear());
        navigation("/account/client");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="signup-client-agreement">
      <div className="container-form">
        <div className="signup-client-agreement-block">
          <TitleSection
            title="You have now received access"
            span="to your account"
          />
          <p className="signup-client-agreement-second">Create Your account:</p>

          <FormContainer>
            <form className="signup-client-agreement-form">
              <TextInput
                title="Username"
                placeholder="Enter username"
                style={{ marginTop: "30px" }}
                value={signupClientState.username}
                setValue={(value) => dispatch(setUsername(value))}
              />
              <TextInput
                title="Email"
                placeholder="Enter email"
                style={{ marginTop: "60px" }}
                value={signupClientState.email}
                setValue={(value) => dispatch(setEmail(value))}
              />
              <TextInput
                type="password"
                title="Password"
                placeholder="Enter password"
                style={{ marginTop: "60px" }}
                value={signupClientState.password}
                setValue={(value) => dispatch(setPassword(value))}
              />
              <TextInput
                type="password"
                title="Repeat Password"
                placeholder="Repeat Password"
                style={{ marginTop: "60px" }}
                value={signupClientState.repeatPassword}
                setValue={(value) => dispatch(setRepeatPassword(value))}
              />
              <CheckBox
                text="Agree to terms and conditions"
                style={{ marginTop: "57px" }}
                checked={signupClientState.acceptAgree}
                setChecked={(value) => dispatch(setAcceptAgree(value))}
              />

              <StandartButton
                text="Continue"
                style={{ margin: "0 auto", marginTop: "50px" }}
                onClick={register}
              />
            </form>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default SignupClientAgreement;
