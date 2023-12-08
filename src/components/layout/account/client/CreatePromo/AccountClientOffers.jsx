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

const AccountClientOffers = () => {
  const [prices, setPrices] = useState([]);
  const dispatch = useDispatch();
  const [influencers, setInfluencers] = useState([]);

  const currentPrice = useSelector(
    (state) => state.createPromo.data.selectPrice.variant
  );

  const selectInfluencers = useSelector(
    (state) => state.createPromo.data.selectInfluencers
  );

  const selectPrice = (id) => {
    const searchPrice = prices.find((item) => item.id === id);

    const updateList = influencers.map((item) => {
      if (searchPrice.connectInfluencer.includes(item._id)) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }

      return item;
    });
    const filterInfluencers = searchPrice.connectInfluencer.map((item) => ({
      influencerId: item,
      confirmation: "wait",
    }));
    dispatch(setSelectInfluencer([...filterInfluencers]));
    setInfluencers(updateList);

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

  const selectInfluencer = (instagramUsername) => {
    if (currentPrice === 0) return;
    const activePrice = prices.find((item) => item.id === currentPrice);
    if (
      influencers.find((item) => item.instagramUsername === instagramUsername)
        .active === false &&
      selectInfluencers.length === activePrice.maxInfluencer
    )
      return;

    const updateList = influencers.map((item) => {
      if (item.instagramUsername === instagramUsername) {
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
      .filter((item) => item.active)
      .map((item) => ({
        influencerId: item._id,
        instagramUsername: item.instagramUsername,
        confirmation: "wait",
      }));

    dispatch(setSelectInfluencer([...filterInfluencers]));
    setInfluencers(updateList);
  };

  const getData = async () => {
    const result = await axios(
      `${process.env.REACT_APP_SERVER}/auth/influencers`
    );

    const offers = await axios(`${process.env.REACT_APP_SERVER}/promos/offers`);
    if (offers.data.code === 200) {
      setPrices(offers.data.offers);
    }
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

  const createInfList = (score) => {
    const list = [];
    let sum = 0;
    while (sum <= score) {
      sum += 1;
      if (sum > score) break;
      list.push(
        <li className="account-client-offers-text-item">Influencer {sum}</li>
      );
    }
    return list;
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
            {prices.map((item) => (
              <li
                className={`account-client-offers-item ${
                  currentPrice !== 0
                    ? currentPrice === item.id
                      ? ""
                      : "not-active"
                    : ""
                }`}
                onClick={() => selectPrice(item.id)}
              >
                <h3 className="account-client-offers-title">offer {item.id}</h3>
                <div className="account-client-offers-block">
                  <ul className="account-client-offers-text-list">
                    {createInfList(item.maxInfluencer)}
                  </ul>
                </div>

                <button className="account-client-offers-button">
                  {item.price} €
                </button>
              </li>
            ))}
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
                  onClick={() => selectInfluencer(item.instagramUsername)}
                >
                  <img
                    className="account-client-choose-item-image"
                    src={item.logo}
                    style={{ maxWidth: 125 }}
                  />

                  <div
                    className="account-client-choose-item-content"
                    style={{}}
                  >
                    <img
                      className="account-client-choose-item-content-icon"
                      src={instagram}
                    />

                    <p className="account-client-choose-item-content-text">
                      {item.instagramUsername}
                    </p>
                  </div>
                  <p
                    className="account-client-choose-item-content-text"
                    style={{ textAlign: "center", paddingBottom: 10 }}
                  >
                    {item.followersNumber}
                  </p>
                </li>
              ))}
            </ul>

            {/* <div className="account-client-choose-all-block">
              <button className="account-client-choose-all">See more</button>
            </div> */}

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
