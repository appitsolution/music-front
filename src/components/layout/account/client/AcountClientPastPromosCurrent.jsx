import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import AltButton from "../../../form/AltButton";
import { useParams } from "react-router-dom";
import UseVerify from "../../../../hooks/useVerify";
import axios from "axios";

const AcountClientPastPromosCurrent = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/promos/history/one?userId=${dataFetch._id}&promosId=${params.id}`
      );

      setData(result.data.promo);
      console.log(result.data.promo);
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

          <p className="account-client-past-promos-second">Past promos</p>

          <FormContainer style={{ marginTop: "70px" }}>
            <div className="account-client-past-promos-form-current">
              {/* <div className="account-client-past-promos-form-current-video">
                <div
                  style={{
                    width: "551px",
                    height: "312px",
                    background: "#3330E4",
                  }}
                ></div>
              </div> */}
              <div className="account-client-past-promos-form-current-content">
                <h2 className="account-client-past-promos-form-current-content-title">
                  Promo {data._id}
                </h2>
                <p className="account-client-past-promos-form-current-content-client">
                  Client:{" "}
                  <span className="account-client-past-promos-form-current-content-client-value">
                    {data.firstName}
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-link">
                  Videolink:{" "}
                  <span className="account-client-past-promos-form-current-content-link-value">
                    {data.videoLink}
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-desc">
                  Description:{" "}
                  <span className="account-client-past-promos-form-current-content-desc-value">
                    {data.postDescription}
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-date">
                  Date Request:{" "}
                  <span className="account-client-past-promos-form-current-content-date-value">
                    {data.dateRequest}
                  </span>
                </p>
                <p className="account-client-past-promos-form-current-content-wish">
                  Special Wishes:{" "}
                  <span className="account-client-past-promos-form-current-content-wish-value">
                    {data.specialWishes}
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
            <a
              href="mailto:admin@soundinfluencers.com?subject=Support%20Request"
              className="account-client-past-promos-current-report"
            >
              Click here for Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcountClientPastPromosCurrent;
