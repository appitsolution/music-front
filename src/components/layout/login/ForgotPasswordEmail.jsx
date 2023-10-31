import React, { useState } from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import StandartButton from "../../form/StandartButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPasswordEmail = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const sendCode = async () => {
    if (!email) return;

    const result = await axios.post(
      `${process.env.REACT_APP_SERVER}/forgot/email?email=${email}`
    );

    if (result.data.code === 200) {
      navigation(`/forgot/code/${email}`);
      setEmail("");
      return;
    }
    setErrorEmail(true);
  };
  return (
    <section className="forgot-password">
      <div className="container-form">
        <div className="forgot-password-block">
          <TitleSection title="Log in to" span="SoundInfluencers" />

          <p className="login-client-second">Embrace Your Influence</p>

          <FormContainer style={{ marginTop: "73px" }}>
            <div className="login-client-form">
              <TextInput
                title="Email"
                placeholder="Enter email"
                style={{ marginTop: "60px" }}
                value={email}
                setValue={(value) => setEmail(value)}
                error={errorEmail}
              />

              <div
                style={{
                  marginTop: "44px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StandartButton text="Continue" onClick={sendCode} />
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordEmail;
