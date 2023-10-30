import React from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import StandartButton from "../../form/StandartButton";

const ForgotPasswordEmail = () => {
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
              />

              <div
                style={{
                  marginTop: "44px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StandartButton text="Continue" />
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordEmail;
