import React from "react";
import Terms from "../components/layout/Terms";
import Header from "../components/Header";
import Background from "../components/Background";

const TermsPage = () => {
  return (
    <>
      <Header />
      <Terms />
      <Background theme={"dark"} />
    </>
  );
};

export default TermsPage;
