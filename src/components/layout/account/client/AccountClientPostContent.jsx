import React from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import TextInput from "../../../form/TextInput";
import TextArea from "../../../form/TextArea";
import StandartButton from "../../../form/StandartButton";

const AccountClientPostContent = () => {
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
              />
              <TextArea
                title="Post Description"
                placeholder="Enter description"
                style={{ marginTop: "60px" }}
              />
              <TextInput
                title="Story Tag"
                placeholder="Enter story tag"
                style={{ marginTop: "60px" }}
              />
              <TextInput
                title="Swipe Up Link"
                placeholder="Enter swipe up link"
                style={{ marginTop: "60px" }}
              />
              <TextInput
                title="Date Request"
                placeholder="Enter data"
                style={{ marginTop: "60px" }}
              />
              <TextArea
                title="Special Wishes"
                placeholder="Enter special wishes"
                style={{ marginTop: "60px" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                }}
              >
                <StandartButton text="Request this post" />
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default AccountClientPostContent;
