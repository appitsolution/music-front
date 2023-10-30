import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import LoginClient from "../../components/layout/login/LoginClient";

const LoginClientPage = () => {
  return (
    <>
      <Header />
      <LoginClient />
      <Background />
    </>
  );
};

export default LoginClientPage;
