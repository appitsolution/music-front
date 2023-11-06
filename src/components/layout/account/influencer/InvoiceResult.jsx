import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import FormContainer from "../../../form/FormContainer";
import TextInput from "../../../form/TextInput";
import StandartButton from "../../../form/StandartButton";

const InvoiceResult = () => {
  const [formData, setFormData] = useState({
    instagram: "",
    screenshot: "",
    reach: "",
    likes: "",
    invoices: "",
  });
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
              title="Instagram post link"
              placeholder="Enter Instagram post link"
              value={formData.instagram}
              setValue={(value) =>
                setFormData({ ...formData, instagram: value })
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
              disabled={true}
              disabledTime="3"
            />
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Reach"
              placeholder="Enter the Reach number here"
              value={formData.reach}
              setValue={(value) => setFormData({ ...formData, reach: value })}
              disabled={true}
              disabledTime="3"
            />
            <TextInput
              style={{ maxWidth: "665px", margin: "60px auto 0 auto" }}
              title="Likes"
              placeholder="Enter the Likes number here"
              value={formData.likes}
              setValue={(value) => setFormData({ ...formData, likes: value })}
              disabled={true}
              disabledTime="3"
            />

            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StandartButton text="Submit" />
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};

export default InvoiceResult;
