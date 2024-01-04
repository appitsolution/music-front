import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import AltButton from "../../../form/AltButton";
import UseVerify from "../../../../hooks/useVerify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function formatDate(inputDate) {
  const date = new Date(inputDate);

  // Получаем компоненты даты
  const day = date.getDate();
  const month = date.getMonth() + 1; // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Добавляем ведущий ноль, если компонент даты меньше 10
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Собираем дату в нужном формате
  const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

  return formattedDate;
}

const AccountInfluencerOngoingPromos = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/promos/get-ongoing-promos?influencerId=${dataFetch._id}`
      );
      if (result.data.code === 200) {
        console.log(result.data.promos);
        setData(result.data.promos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="account-client-past-promos">
      <div className="container-form">
        <div className="account-client-past-promos-block">
          <TitleSection title="MY" span="account" />

          <p className="account-client-past-promos-second">Ongoing promos</p>

          <FormContainer style={{ marginTop: "70px" }}>
            <div className="account-client-past-promos-form">
              <ul className="account-client-past-promos-form-list">
                {data.map((item, index) => (
                  <li
                    className="account-client-past-promos-form-item"
                    key={item._id}
                  >
                    <button
                      className="account-client-past-promos-form-item-button"
                      onClick={() =>
                        navigation(
                          `/account/influencer/ongoing-promos/${item._id}/${item.instagramUsername}`
                        )
                      }
                    >
                      <div className="account-client-past-promos-form-image">
                        {item.client}
                      </div>
                      <p className="account-client-past-promos-form-text">
                        Promo {index + 1}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>

              {data.length > 20 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "45px",
                  }}
                >
                  <AltButton text="See more" />
                </div>
              )}
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default AccountInfluencerOngoingPromos;
