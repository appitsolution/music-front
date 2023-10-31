import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from "react-router-dom";
import UseVerify from "../hooks/useVerify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../redux/slice/authenticated";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const dispatch = useDispatch();
  const [isAuth, setisAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UseVerify().then((res) => {
      setisAuth(res.verify);
      setLoading(false);
      dispatch(setAuthenticated(res.verify));
    });
  });

  if (loading) return null;
  return isAuth ? <Element /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
