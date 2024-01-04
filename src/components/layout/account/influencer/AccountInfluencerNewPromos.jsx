import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UseVerify from "../../../../hooks/useVerify";
import acceptIcon from "../../../../images/icons/accept.svg";
import ResponseButton from "../../../form/ResponseButton";
import ModalWindow from "../../../ModalWindow";
import StandartButton from "../../../form/StandartButton";

const AcountInfluencerNewPromos = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalReject, setIsOpenModalReject] = useState(false);

  const [templateDate, setTemplate] = useState();
  const navigation = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/promos/get-new-promos?influencerId=${dataFetch._id}`
      );

      const filterData = result.data.promos.filter((item) => item);
      setData(filterData);
      console.log(filterData);
    } catch (err) {
      console.log(err);
    }
  };

  const responsePromo = async (id, res, instagramUsername) => {
    if (!id || !res || !instagramUsername) return;
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/promos/update-response?influencerId=${dataFetch._id}&instagramUsername=${instagramUsername}&promoId=${id}&promoResponse=${res}`
      );

      if (result.data.code === 200) {
        getData();
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
      <div className="container">
        <div className="account-client-past-promos-block">
          <TitleSection title="MY" span="account" />

          <p className="account-client-past-promos-second">New promos</p>

          {data.map((item, index) => (
            <FormContainer
              style={{
                marginTop: "70px",
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <div className="account-client-past-promos-form-current">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 80,
                  }}
                >
                  <div style={{ width: "45%" }}>
                    <img
                      style={{ width: "100%" }}
                      src={item ? (item.clientLogo ? item.clientLogo : "") : ""}
                    />
                  </div>
                  <div
                    className="account-client-past-promos-form-current-content"
                    style={{ padding: "0 20px 30px 20px" }}
                  >
                    <h2 className="account-client-past-promos-form-current-content-title">
                      Promo {index + 1}
                    </h2>
                    <p className="account-client-past-promos-form-current-content-client">
                      Client:{" "}
                      <span className="account-client-past-promos-form-current-content-client-value">
                        {item ? item.client : "No Data"}
                      </span>
                    </p>
                    <p className="account-client-past-promos-form-current-content-link">
                      Videolink:{" "}
                      <span className="account-client-past-promos-form-current-content-link-value">
                        {item ? item.videoLink : "No Data"}
                      </span>
                    </p>
                    <p className="account-client-past-promos-form-current-content-desc">
                      Description:{" "}
                      <span className="account-client-past-promos-form-current-content-desc-value">
                        {item ? item.postDescription : "No Data"}
                      </span>
                    </p>
                    <p className="account-client-past-promos-form-current-content-date">
                      Date Request:{" "}
                      <span className="account-client-past-promos-form-current-content-date-value">
                        {item ? item.dateRequest : "No Data"}
                      </span>
                    </p>
                    <p className="account-client-past-promos-form-current-content-wish">
                      Special Wishes:{" "}
                      <span className="account-client-past-promos-form-current-content-wish-value">
                        {item ? item.specialWishes : "No Data"}
                      </span>
                    </p>
                  </div>
                </div>
                <ResponseButton
                  onClickYes={() => {
                    setIsOpenModal(true);
                    responsePromo(item._id, "accept", item.instagramUsername);
                  }}
                  onClickNo={() => {
                    setIsOpenModalReject(true);
                    setTemplate({
                      id: item._id,
                      res: "refusing",
                      instagramUsername: item.instagramUsername,
                    });
                  }}
                />
              </div>
            </FormContainer>
          ))}

          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <a
              href="mailto:admin@soundinfluencers.com?subject=Support%20Request"
              className="account-client-past-promos-current-report"
            >
              Click here for Report
            </a>
          </div> */}
        </div>
      </div>

      <ModalWindow isOpen={isOpenModal} setClose={setIsOpenModal}>
        <div className="signup-client-modal">
          <img className="signup-client-modal-icon" src={acceptIcon} />

          <h2 className="signup-client-modal-title">Congratulations!</h2>

          <p className="signup-client-modal-second">
            Your Promo Information is Now Live in the{" "}
            <button
              className="signup-client-modal-second"
              style={{
                color: "#3330E4",
                textDecorationLine: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigation("/account/influencer/ongoing-promos")}
            >
              "Ongoing Promo"
            </button>{" "}
            Section!
          </p>

          <p className="signup-client-modal-desc">
            Kindly proceed from there to fulfil the content distribution.
          </p>

          <StandartButton
            text="Ok"
            style={{
              padding: "8px 80px",
              marginTop: "30px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={() => navigation("/signup/influencer/agreement")}
          />
        </div>
      </ModalWindow>
      <ModalWindow isOpen={isOpenModalReject} setClose={setIsOpenModalReject}>
        <div className="signup-client-modal">
          <p className="signup-client-modal-desc">
            You agree that your brand WILL NOT take part of promoting this
            content as provided by us here.
          </p>
          <div style={{ display: "flex" }}>
            <StandartButton
              text="Accept"
              style={{
                padding: "8px 80px",
                marginTop: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={() => {
                responsePromo(
                  templateDate.id,
                  templateDate.res,
                  templateDate.instagramUsername
                );
                setIsOpenModalReject(false);
                setTemplate({});
              }}
            />
            <StandartButton
              text="Reject"
              style={{
                padding: "8px 80px",
                marginTop: "30px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={() => {
                setIsOpenModalReject(false);
                setTemplate({});
              }}
            />
          </div>
        </div>
      </ModalWindow>
    </section>
  );
};

export default AcountInfluencerNewPromos;
