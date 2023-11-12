import React, { useState } from "react";
import TitleSection from "../../../../TitleSection";
import FormContainer from "../../../../form/FormContainer";
import TextInput from "../../../../form/TextInput";
import TextArea from "../../../../form/TextArea";
import StandartButton from "../../../../form/StandartButton";
import UseVerify from "../../../../../hooks/useVerify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setClearForm,
  setCurrentWindow,
  setDateRequest,
  setPostDescription,
  setSpecialWishes,
  setStoryTag,
  setSwipeUpLink,
  setVideoLink,
} from "../../../../../redux/slice/create-promo";
import { formatDateString, validateDate } from "../../../../../utils/validations";

const AccountClientPostContent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const dataPromo = useSelector((state) => state.createPromo.data);

  const [formError, setFormError] = useState({
    videoLink: false,
    postDescription: false,
    storyTag: false,
    swipeUpLink: false,
    dateRequest: false,
    specialWishes: false,
  });

  const createPromo = async () => {
    let listError = {
      videoLink: false,
      postDescription: false,
      storyTag: false,
      swipeUpLink: false,
      dateRequest: false,
      specialWishes: false,
    };

    

    let haveError = false;
    for (let checkError in dataPromo) {
      if (
        checkError !== "selectPrice" &&
        checkError !== "selectInfluencers" &&
        checkError !== "paymentType" &&
        checkError !== "paymentStatus"
      ) {
        if (dataPromo[checkError] === "") {
          haveError = true;
          listError = {
            ...listError,
            [checkError]: true,
          };
        }
      }
    }


    if(!validateDate(dataPromo.dateRequest)){
      haveError = true;
      setFormError({...listError, dateRequest: true})
      return 
    }

    if (haveError) {
      setFormError(listError);
      return;
    }
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER}/promos`,
        { ...dataPromo, userId: dataFetch._id }
      );

      if (result.data.code === 201) {
        dispatch(setClearForm());
        dispatch(setCurrentWindow(0));
        navigation("/account/client");
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
                value={dataPromo.videoLink}
                setValue={(value) => dispatch(setVideoLink(value))}
                error={formError.videoLink}
                onFocus={() => setFormError({ ...formError, videoLink: false })}
              />
              <TextArea
                title="Post Description"
                placeholder="Enter description"
                style={{ marginTop: "60px" }}
                value={dataPromo.postDescription}
                setValue={(value) => dispatch(setPostDescription(value))}
                error={formError.postDescription}
                onFocus={() =>
                  setFormError({ ...formError, postDescription: false })
                }
              />
              <TextInput
                title="Story Tag"
                placeholder="Enter story tag"
                style={{ marginTop: "60px" }}
                value={dataPromo.storyTag}
                setValue={(value) => dispatch(setStoryTag(value))}
                error={formError.storyTag}
                onFocus={() => setFormError({ ...formError, storyTag: false })}
              />
              <TextInput
                title="Swipe Up Link"
                placeholder="Enter swipe up link"
                style={{ marginTop: "60px" }}
                value={dataPromo.swipeUpLink}
                setValue={(value) => dispatch(setSwipeUpLink(value))}
                error={formError.swipeUpLink}
                onFocus={() =>
                  setFormError({ ...formError, swipeUpLink: false })
                }
              />
              <TextInput
                title="Date Request"
                placeholder="Enter data"
                style={{ marginTop: "60px" }}
                value={dataPromo.dateRequest}
                setValue={(value) => dispatch(setDateRequest(formatDateString(value)))}
                error={formError.dateRequest}
                onFocus={() =>
                  setFormError({ ...formError, dateRequest: false })
                }
              />
              <TextArea
                title="Special Wishes"
                placeholder="Enter special wishes"
                style={{ marginTop: "60px" }}
                value={dataPromo.specialWishes}
                setValue={(value) => dispatch(setSpecialWishes(value))}
                error={formError.specialWishes}
                onFocus={() =>
                  setFormError({ ...formError, specialWishes: false })
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
