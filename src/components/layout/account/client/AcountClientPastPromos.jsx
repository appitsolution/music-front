import React from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import AltButton from "../../../form/AltButton";

const AcountClientPastPromos = () => {
  return (
    <section className="account-client-past-promos">
      <div className="container-form">
        <div className="account-client-past-promos-block">
          <TitleSection title="MY" span="account" />

          <p className="account-client-past-promos-second">Past promos</p>

          <FormContainer style={{ marginTop: "70px" }}>
            <div className="account-client-past-promos-form">
              <ul className="account-client-past-promos-form-list">
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
                <li className="account-client-past-promos-form-item">
                  <img className="account-client-past-promos-form-image" />
                  <p className="account-client-past-promos-form-text">
                    Promo 1
                  </p>
                </li>
              </ul>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "45px",
                }}
              >
                <AltButton text="See more" />
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default AcountClientPastPromos;
