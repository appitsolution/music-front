import React, { useState } from "react";
import TitleSection from "../../TitleSection";
import FormContainer from "../../form/FormContainer";
import TextInput from "../../form/TextInput";
import StandartButton from "../../form/StandartButton";
import SelectedInput from "../../form/SelectedInput";
import ModalWindow from "../../ModalWindow";
import acceptIcon from "../../../images/icons/accept.svg";

const SignupClient = () => {
  const [currentType, setCurrentType] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
                />
                <TextInput
                  title="Company*"
                  placeholder="Enter company name"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />
                <SelectedInput
                  data={["Techno", "EDM", "House", "Other"]}
                  changeValue={setCurrentType}
                  title="Company type*"
                  placeholder={
                    currentType === "" ? "Сhoose company type" : currentType
                  }
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />
                <TextInput
                  title="Instagram*"
                  placeholder="Enter instagram link"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />
                <TextInput
                  title="Email*"
                  placeholder="Enter email"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />
                <TextInput
                  title="Phone*"
                  placeholder="+_ _ ___ ___ __ __"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />
                <TextInput
                  title="Referal code*"
                  placeholder="Enter referal code"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                />

                <StandartButton
                  text="Apply now"
                  style={{ margin: "70px auto 0 auto" }}
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
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </ModalWindow>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupClient;
