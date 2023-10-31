import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import TextInput from "../../../form/TextInput";
import TextArea from "../../../form/TextArea";
import StandartButton from "../../../form/StandartButton";
import UseVerify from "../../../../hooks/useVerify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountClientPostContent = () => {
  const navigation = useNavigate();
  const [dataPromo, setDataPromo] = useState({
    videolink: "",
    description: "",
    storyTag: "",
    swipeLink: "",
    dateRequest: "",
    specialWishes: "",
  });

  const createPromo = async () => {
    try {
      const { dataFetch } = UseVerify();
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/promos`,
        { ...dataPromo, userId: dataFetch._id }
      );

      if (result.data.code === 201) {
        navigation("account/client");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="account-client">
      <div className="container-form">
        <div className="account-client-block">
          <TitleSection title="post" span="this content" />

          <FormContainer style={{ marginTop: "60px" }}>
            <form className="account-client-post">
              <TextInput
                title="Videolink"
                placeholder="Enter videolink"
                style={{ marginTop: "60px" }}
                value={dataPromo.videolink}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, videolink: value })
                }
              />
              <TextArea
                title="Post Description"
                placeholder="Enter description"
                style={{ marginTop: "60px" }}
                value={dataPromo.description}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, description: value })
                }
              />
              <TextInput
                title="Story Tag"
                placeholder="Enter story tag"
                style={{ marginTop: "60px" }}
                value={dataPromo.storyTag}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, storyTag: value })
                }
              />
              <TextInput
                title="Swipe Up Link"
                placeholder="Enter swipe up link"
                style={{ marginTop: "60px" }}
                value={dataPromo.swipeLink}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, swipeLink: value })
                }
              />
              <TextInput
                title="Date Request"
                placeholder="Enter data"
                style={{ marginTop: "60px" }}
                value={dataPromo.dateRequest}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, dateRequest: value })
                }
              />
              <TextArea
                title="Special Wishes"
                placeholder="Enter special wishes"
                style={{ marginTop: "60px" }}
                value={dataPromo.specialWishes}
                setValue={(value) =>
                  setDataPromo({ ...dataPromo, specialWishes: value })
                }
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                }}
              >
                <StandartButton
                  text="Request this post"
                  onClick={createPromo}
                />
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default AccountClientPostContent;
