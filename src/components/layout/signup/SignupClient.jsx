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
  setCompany,
  setCompanyType,
  setEmail,
  setFirstName,
  setInstagram,
  setPhone,
  setReferalCode,
} from "../../../redux/slice/signup-client";
import { useNavigate } from "react-router-dom";

const SignupClient = () => {
  const [currentType, setCurrentType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const signClienState = useSelector((state) => state.signupClient);

  const registerNext = () => {
    if (
      (!signClienState.firstName,
      !signClienState.company,
      !signClienState.companyType,
      !signClienState.instagram,
      !signClienState.email,
      !signClienState.phone,
      !signClienState.referalCode)
    ) {
      return;
    }

    setOpenModal(true);
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
                />
                <TextInput
                  title="Company*"
                  placeholder="Enter company name"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.company}
                  setValue={(value) => dispatch(setCompany(value))}
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
                />
                <TextInput
                  title="Instagram*"
                  placeholder="Enter instagram link"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.instagram}
                  setValue={(value) => dispatch(setInstagram(value))}
                />
                <TextInput
                  title="Email*"
                  placeholder="Enter email"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.email}
                  setValue={(value) => dispatch(setEmail(value))}
                />
                <TextInput
                  title="Phone*"
                  placeholder="+_ _ ___ ___ __ __"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.phone}
                  setValue={(value) => dispatch(setPhone(value))}
                />
                <TextInput
                  title="Referal code*"
                  placeholder="Enter referal code"
                  style={{ maxWidth: "665px", margin: "0 auto 60px auto" }}
                  value={signClienState.referalCode}
                  setValue={(value) => dispatch(setReferalCode(value))}
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
                    navigation("/signup/client/agreement");
                  }}
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
