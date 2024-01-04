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

  const customePrice = useSelector(
    (state) => state.createPromo.data.selectPrice.price
  );

  const selectInfluencers = useSelector(
    (state) => state.createPromo.data.selectInfluencers
  );

  const selectPrice = (id) => {
    const searchPrice = prices.find((item) => item.id === id);

    const updateList = influencers.map((item, index) => {
      if (
        searchPrice.connectInfluencer.find(
          (fin) =>
            fin.influencerId === item._id &&
            fin.instagramUsername === item.instagramUsername
        )
      ) {
        return {
          ...item,
          active: true,
          connect: true,
          connect_text: `Offer ${searchPrice.id}`,
        };
      } else {
        return {
          ...item,
        };
      }
    });

    // console.log(updateList);
    const filterInfluencers = searchPrice.connectInfluencer.map((item) => ({
      influencerId: item.influencerId,
      confirmation: "wait",
      instagramUsername: item.instagramUsername,
    }));

    if (selectInfluencers.length !== 0) {
      const currentSelectInfluencers = selectInfluencers.map((item) => ({
        influencerId: item.influencerId,
        confirmation: "wait",
        instagramUsername: item.instagramUsername,
      }));
      dispatch(
        setSelectInfluencer([...filterInfluencers, ...currentSelectInfluencers])
      );
    } else {
      dispatch(setSelectInfluencer([...filterInfluencers]));
    }
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
    if (customePrice !== 0) {
      dispatch(
        setSelectPrice({
          variant: id,
          price: prices.find((item) => item.id === id).price + customePrice,
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
    // dispatch(
    //   setSelectPrice({
    //     variant: 0,
    //     price: 0,
    //   })
    // );
    const updateList = influencers.map((item) => {
      if (item.instagramUsername === instagramUsername) {
        if (item.active) {
          return {
            ...item,
            active: false,
            connect: false,
          };
        }
        return {
          ...item,
          active: true,
          connect: false,
        };
      }

      return item;
    });

    const newPrice = updateList.reduce((acc, current) => {
      if (!current.price) return acc;
      const price = current.price.replace(/\D/g, "");

      if (current.active) {
        const checkOffer = prices.find((item) => {
          const check = item.connectInfluencer.find(
            (fin) => fin.instagramUsername === current.instagramUsername
          );
          return check;
        });
        const updatePrice = checkOffer ? Number(price) : Number(price) * 2;
        return acc + updatePrice;
      } else {
        return acc;
      }
    }, 0);

    const filterInfluencers = updateList
      .filter((item) => item.active)
      .map((item) => ({
        influencerId: item._id,
        instagramUsername: item.instagramUsername,
        confirmation: "wait",
      }));

    console.log(filterInfluencers);

    dispatch(
      setSelectPrice({
        variant: 0,
        price: newPrice,
      })
    );

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
      if (selectInfluencers.length !== 0) {
        const list = result.data.influencers.map((item) => {
          const findInfluencer = selectInfluencers.find(
            (inf) =>
              inf.influencerId === item._id &&
              inf.instagramUsername === item.instagramUsername
          );
          if (findInfluencer) {
            return {
              ...item,
              active: true,
              connect: false,
            };
          }

          return {
            ...item,
            active: false,
            connect: false,
          };
        });
        return setInfluencers(list);
      }
      const listInfluencers = result.data.influencers.map((item) => ({
        ...item,
        active: false,
        connect: false,
      }));
      setInfluencers(listInfluencers);
    }
  };

  const nextForm = () => {
    if (customePrice === 0 || selectInfluencers.length === 0) return;

    dispatch(setCurrentWindow(1));
  };

  const createInfList = (score) => {
    const list = [];
    let sum = 0;
    while (sum <= score) {
      sum += 1;
      if (sum > score) break;
      list.push(
        <li key={sum} className="account-client-offers-text-item">
          Influencer {sum}
        </li>
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
            {prices.map((item, index) => (
              <li
                key={item.id}
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
                    {item.connectInfluencer.map((item, index) => (
                      <li
                        key={index}
                        className="account-client-offers-text-item"
                      >
                        I{item.instagramUsername}
                      </li>
                    ))}
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
                  key={index}
                  className={`account-client-choose-item ${
                    item.connect ? "connect" : item.active ? "active" : ""
                  }`}
                  onClick={() => selectInfluencer(item.instagramUsername)}
                >
                  {item.connect ? (
                    <div className="account-client-choose-item-connect">
                      <p className="account-client-choose-item-connect-text">
                        {item.connect_text}
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
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
                {customePrice} €
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
