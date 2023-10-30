import React from "react";
import TitleSection from "../../../TitleSection";
import choose1 from "../../../../images/gentleman.png";
import instagram from "../../../../images/icons/instagram.svg";

const testData = [
  {
    instagram: "299k",
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "30k",
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "190k",
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "10k",
  },
  {
    instagram: "10k",
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "190k",
  },
  {
    instagram: "259k",
    active: true,
  },
  {
    instagram: "10k",
  },
  {
    instagram: "10k",
  },
  {
    instagram: "10k",
  },
  {
    instagram: "10k",
  },
];

const AccountClientOffers = () => {
  return (
    <section className="account-client">
      <div className="container">
        <div className="account-client-block">
          <h1 className="account-client-title">service offered</h1>
          <h2 className="account-client-second">
            influencers post for clients
          </h2>

          <TitleSection title="Our" span="offers" />

          <ul className="account-client-offers">
            <li className="account-client-offers-item">
              <h3 className="account-client-offers-title">offer 1</h3>
              <div className="account-client-offers-block">
                <ul className="account-client-offers-text-list">
                  <li className="account-client-offers-text-item">
                    Influencer 1
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 2
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 3
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 4
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 5
                  </li>
                </ul>
              </div>

              <button className="account-client-offers-button">299 €</button>
            </li>
            <li className="account-client-offers-item">
              <h3 className="account-client-offers-title">offer 2</h3>
              <div className="account-client-offers-block">
                <ul className="account-client-offers-text-list">
                  <li className="account-client-offers-text-item">
                    Influencer 1
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 2
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 3
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 4
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 5
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 6
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 7
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 8
                  </li>
                </ul>
              </div>

              <button className="account-client-offers-button">599 €</button>
            </li>
            <li className="account-client-offers-item">
              <h3 className="account-client-offers-title">offer 2</h3>
              <div className="account-client-offers-block">
                <ul className="account-client-offers-text-list">
                  <li className="account-client-offers-text-item">
                    Influencer 1
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 2
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 3
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 4
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 5
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 6
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 7
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 8
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 9
                  </li>
                  <li className="account-client-offers-text-item">
                    Influencer 10
                  </li>
                </ul>
              </div>

              <button className="account-client-offers-button">899 €</button>
            </li>
          </ul>

          <TitleSection title="Pick &" span="choose" />

          <div className="account-client-choose">
            <ul className="account-client-choose-list">
              {testData.map((item, index) => (
                <li
                  key={index}
                  className={`account-client-choose-item ${
                    item.active ? "active" : ""
                  }`}
                >
                  <img
                    className="account-client-choose-item-image"
                    src={choose1}
                  />
                  <div className="account-client-choose-item-content">
                    <img
                      className="account-client-choose-item-content-icon"
                      src={instagram}
                    />
                    <p className="account-client-choose-item-content-text">
                      {item.instagram}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="account-client-choose-all-block">
              <button className="account-client-choose-all">See more</button>
            </div>

            <p className="account-client-choose-total">
              Total{" "}
              <span className="account-client-choose-total-span">599 €</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountClientOffers;
