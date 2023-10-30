import React from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import CheckBox from "../../form/CheckBox";
import StandartButton from "../../form/StandartButton";

const SignupClientAgreement = () => {
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
              />
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
              <TextInput
                title="Repeat Password"
                placeholder="Repeat Password"
                style={{ marginTop: "60px" }}
              />
              <CheckBox
                text="Agree to terms and conditions"
                style={{ marginTop: "57px" }}
              />

              <StandartButton
                text="Continue"
                style={{ margin: "0 auto", marginTop: "50px" }}
              />
            </form>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default SignupClientAgreement;
