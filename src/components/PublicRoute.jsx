import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from "react-router-dom";
import UseVerify from "../hooks/useVerify";

const PublicRoute = ({ element: Element, ...rest }) => {
  const [isAuth, setisAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UseVerify().then((res) => {
      setisAuth(res.verify);
      setLoading(false);
    });
  });

  if (loading) return null;
  return !isAuth ? <Element /> : <Navigate to="/account/client" />;
};

export default PublicRoute;
