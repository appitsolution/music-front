import React, { useEffect, useState } from "react";
import TitleSection from "../../../../TitleSection";
import choose1 from "../../../../../images/gentleman.png";
import instagram from "../../../../../images/icons/instagram.svg";
import axios from "axios";
import StandartButton from "../../../../form/StandartButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentWindow,
  setSelectInfluencer,
  setSelectPrice,
} from "../../../../../redux/slice/create-promo";

const prices = [
  {
    id: 1,
    price: 299,
  },
  {
    id: 2,
    price: 599,
  },
  {
    id: 3,
    price: 899,
  },
];
const AccountClientOffers = () => {
  const dispatch = useDispatch();
  const [influencers, setInfluencers] = useState([]);

  const currentPrice = useSelector(
    (state) => state.createPromo.data.selectPrice.variant
  );

  const selectInfluencers = useSelector(
    (state) => state.createPromo.data.selectInfluencers
  );

  const selectPrice = (id) => {
    if (currentPrice === id) {
      dispatch(
        setSelectPrice({
          variant: 0,
          price: 0,
        })
      );
      return;
    }
    dispatch(
      setSelectPrice({
        variant: id,
        price: prices.find((item) => item.id === id).price,
      })
    );
  };

  const selectInfluencer = (id) => {
    if (currentPrice === 0) return;
    if (
      currentPrice === 1 &&
      influencers.find((item) => item._id === id).active === false &&
      selectInfluencers.length === 5
    )
      return;

    if (
      currentPrice === 2 &&
      influencers.find((item) => item._id === id).active === false &&
      selectInfluencers.length === 8
    )
      return;
    if (
      currentPrice === 3 &&
      influencers.find((item) => item._id === id).active === false &&
      selectInfluencers.length === 10
    )
      return;
    const updateList = influencers.map((item) => {
      if (item._id === id) {
        if (item.active) {
          return {
            ...item,
            active: false,
          };
        }
        return {
          ...item,
          active: true,
        };
      }

      return item;
    });

    const filterInfluencers = updateList
      .filter((item) => {
        if (item.active) {
          return item;
        } else {
          return;
        }
      })
      .map((item) => item._id);
    dispatch(setSelectInfluencer([...filterInfluencers]));
    setInfluencers(updateList);
  };

  const getData = async () => {
    const result = await axios(
      `${process.env.REACT_APP_SERVER}/auth/influencers`
    );

    if (result.data.code === 200) {
      const listInfluencers = result.data.influencers.map((item) => ({
        ...item,
        active: false,
      }));
      setInfluencers(listInfluencers);
    }
  };

  const nextForm = () => {
    if (currentPrice.variant === 0 || selectInfluencers.length === 0) return;

    dispatch(setCurrentWindow(1));
  };

  useEffect(() => {
    getData();
  }, []);
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
            <li
              className={`account-client-offers-item ${
                currentPrice !== 0
                  ? currentPrice === 1
                    ? ""
                    : "not-active"
                  : ""
              }`}
              onClick={() => selectPrice(1)}
            >
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
            <li
              className={`account-client-offers-item ${
                currentPrice !== 0
                  ? currentPrice === 2
                    ? ""
                    : "not-active"
                  : ""
              }`}
              onClick={() => selectPrice(2)}
            >
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
            <li
              className={`account-client-offers-item ${
                currentPrice !== 0
                  ? currentPrice === 3
                    ? ""
                    : "not-active"
                  : ""
              }`}
              onClick={() => selectPrice(3)}
            >
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
              {influencers.map((item, index) => (
                <li
                  key={item._id}
                  className={`account-client-choose-item ${
                    item.active ? "active" : ""
                  }`}
                  onClick={() => selectInfluencer(item._id)}
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
                      {item.followersNumber}
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
              <span className="account-client-choose-total-span">
                {prices.find((item) => item.id === currentPrice)
                  ? prices.find((item) => item.id === currentPrice).price
                  : 0}{" "}
                €
              </span>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <StandartButton text="Continue" onClick={nextForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountClientOffers;
