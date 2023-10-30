import React from "react";
import TitleSection from "../../../TitleSection";
import past from "../../../../images/icons/past.svg";
import ongoing from "../../../../images/icons/ongoing.svg";
import newIcon from "../../../../images/icons/new.svg";
import invoice from "../../../../images/icons/invoice.svg";
import accountDetails from "../../../../images/icons/details-account.svg";
import support from "../../../../images/icons/support.svg";
import AltButton from "../../../form/AltButton";

const AccountInfluencerHome = () => {
  return (
    <section className="account-client">
      <div className="container">
        <div className="account-client-block">
          <TitleSection title="MY" span="account" />

          <div className="account-influencer-balance">
            <p className="account-influencer-balance-score">
              Balance Due:{" "}
              <span className="account-influencer-balance-score-span">
                1 111 $
              </span>
            </p>

            <AltButton
              text="Create an Invoice"
              style={{ padding: "9px 45px" }}
            />
          </div>

          <ul className="account-client-menu">
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={past}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">Past Promos</p>
              </button>
            </li>
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={ongoing}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">
                  Ongoing Promos
                </p>
              </button>
            </li>
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={newIcon}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">New Promos</p>
              </button>
            </li>
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={invoice}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">
                  My Invoice Details
                </p>
              </button>
            </li>
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={accountDetails}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">
                  My Account Details
                </p>
              </button>
            </li>
            <li className="account-client-menu-item">
              <button className="account-client-menu-button">
                <img
                  className="account-client-menu-button-icon"
                  src={support}
                  alt="account-menu-icon"
                />
                <p className="account-client-menu-button-text">
                  Contact Support
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccountInfluencerHome;
