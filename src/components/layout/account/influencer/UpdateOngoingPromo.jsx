import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { is24HoursPassed } from "../../../../utils/validations";

const UpdateOngoingPromo = () => {
  const params = useParams();
  const navigation = useNavigate();
  const [data, setData] = useState({
    isPassed: false,
    daysLeft: 3,
  });
  const [formData, setFormData] = useState({
    brand: "",
    caption: "",
    datePost: "",
    impressions: "",
    reach: "",
    like: "",
    postLink: "",
    screenshot: "",
    video: "",
  });

  const getData = async () => {
    if (!params.influencerId || !params.promoId || !params.instagram) {
      return navigation("/");
    }
    try {
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/promos/get-ongoing-promo-one?influencerId=${params.influencerId}&promoId=${params.promoId}`
      );

      console.log(result.data.date);
      if (result.data.code === 200) {
        setFormData(result.data.promo);
        setData(is24HoursPassed(result.data.date));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async () => {
    if (!params.influencerId || !params.promoId) {
      return navigation("/");
    }
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_SERVER}/promos/update-ongoing?influencerId=${params.influencerId}&promoId=${params.promoId}&instagramUsername=${params.instagram}`,
        formData
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
    <section className="invoice-result">
      <div className="container-form">
        <div className="invoice-result-block">
          <TitleSection title="campaign result" span="& invoice" />

          <FormContainer
            style={{
              marginTop: "60px",
            }}
          >
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Brand"
              placeholder="Enter brand"
              value={formData.brand}
              setValue={(value) => setFormData({ ...formData, brand: value })}
            />
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Caption"
              placeholder="Enter caption"
              value={formData.caption}
              setValue={(value) => setFormData({ ...formData, caption: value })}
            />

            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Date Post"
              placeholder="Enter date post"
              value={formData.datePost}
              setValue={(value) =>
                setFormData({ ...formData, datePost: value })
              }
            />

            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Impressions"
              placeholder="Enter impressions"
              value={formData.impressions}
              setValue={(value) =>
                setFormData({ ...formData, impressions: value })
              }
              disabled={!data.isPassed}
              disabledTime={data.hoursLeft}
            />

            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Video"
              placeholder="Enter video"
              value={formData.video}
              setValue={(value) => setFormData({ ...formData, video: value })}
            />

            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Instagram post link"
              placeholder="Enter Instagram post link"
              value={formData.postLink}
              setValue={(value) =>
                setFormData({ ...formData, postLink: value })
              }
            />
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Screenshoy insights"
              placeholder="Attach here the screenshot of the insights"
              value={formData.screenshot}
              setValue={(value) =>
                setFormData({ ...formData, screenshot: value })
              }
              disabled={!data.isPassed}
              disabledTime={data.hoursLeft}
            />
            {/* <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Reach "
              placeholder="Enter the Reach number here"
              value={formData.impressions}
              setValue={(value) => setFormData({ ...formData, reach: value })}
              disabled={true}
              disabledTime="3"
            /> */}
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Likes"
              placeholder="Enter the Likes number here"
              value={formData.like}
              setValue={(value) => setFormData({ ...formData, like: value })}
              disabled={!data.isPassed}
              disabledTime={data.hoursLeft}
            />

            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StandartButton text="Submit" onClick={updateData} />
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default UpdateOngoingPromo;
