import React from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import AltButton from "../../../form/AltButton";

const AcountClientPastPromosCurrent = () => {
  return (
    <section className="account-client-past-promos">
      <div className="container">
        <div className="account-client-past-promos-block">
          <TitleSection title="MY" span="account" />

          <p className="account-client-past-promos-second">Past promos</p>

          <FormContainer style={{ marginTop: "70px" }}>
            <div className="account-client-past-promos-form-current">
              <div className="account-client-past-promos-form-current-video">
                <div
                  style={{
                    width: "551px",
                    height: "312px",
                    background: "#3330E4",
                  }}
                ></div>
              </div>
              <div className="account-client-past-promos-form-current-content">
                <h2 className="account-client-past-promos-form-current-content-title">
                  Promo 1
                </h2>
                <p className="account-client-past-promos-form-current-content-client">
                  Client:{" "}
                  <span className="account-client-past-promos-form-current-content-client-value">
                    John Doe
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-link">
                  Videolink:{" "}
                  <span className="account-client-past-promos-form-current-content-link-value">
                    https://miro.com/app/board/uXjVPim30ko=/
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-desc">
                  Description:{" "}
                  <span className="account-client-past-promos-form-current-content-desc-value">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-date">
                  Date Request:{" "}
                  <span className="account-client-past-promos-form-current-content-date-value">
                    01.06.2023
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-wish">
                  Special Wishes:{" "}
                  <span className="account-client-past-promos-form-current-content-wish-value">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </p>
              </div>
            </div>
          </FormContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button className="account-client-past-promos-current-report">
              Click here for Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcountClientPastPromosCurrent;
