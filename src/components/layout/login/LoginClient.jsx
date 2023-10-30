import React from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import StandartButton from "../../form/StandartButton";

const LoginClient = () => {
  return (
    <section className="login-client">
      <div className="container-form">
        <div className="login-client-block">
          <TitleSection title="Log in to" span="SoundInfluencers" />

          <p className="login-client-second">Embrace Your Influence</p>

          <FormContainer style={{ marginTop: "73px" }}>
            <div className="login-client-form">
              <TextInput
                title="Email"
                placeholder="Enter email"
                style={{ marginTop: "60px" }}
              />
              <TextInput
                title="Password"
                placeholder="Enter password"
                style={{ marginTop: "60px" }}
              />

              <div className="login-client-form-password">
                <button className="login-client-form-password-link">
                  Forgot password?
                </button>
              </div>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StandartButton text="Apply now" />
              </div>
            </div>
          </FormContainer>
          <p className="login-client-form-signup">
            Have not an account?{" "}
            <a className="login-client-form-signup-link">Sign Up Here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginClient;
