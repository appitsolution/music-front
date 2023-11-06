import React, { useEffect, useState } from "react";
import logo from "../images/icons/logo.svg";
import profile from "../images/icons/profile.svg";
import { useNavigate } from "react-router-dom";
import themeNight from "../images/icons/theme-night.svg";
import themeDay from "../images/icons/theme-day.svg";
import { useTheme } from "../ThemeContext";
import UseVerify from "../hooks/useVerify";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../redux/slice/authenticated";

const Header = ({ userType = "client", path = "" }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { toggleTheme, theme } = useTheme();
  const isAuth = useSelector((state) => state.authenticated.isAuthenticated);
  const role = useSelector((state) => state.authenticated.role);

  const logoutRequest = () => {
    localStorage.setItem("token", "");
    dispatch(setAuthenticated(false));
    navigation("/login/client");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <div className="header-thoomb">
              <button className="header-logo" onClick={() => navigation("/")}>
                <img src={logo} />
              </button>
              <p className="header-path">{path}</p>
            </div>

            <div className="header-navigation">
              {isAuth && (
                <button
                  className="header-logout"
                  type="button"
                  onClick={logoutRequest}
                >
                  Logout
                </button>
              )}
              <button className="header-theme" onClick={toggleTheme}>
                {theme.text === "#000" ? (
                  <img className="header-theme-icon" src={themeNight} />
                ) : (
                  <img className="header-theme-icon" src={themeDay} />
                )}
              </button>

              {!isAuth && (
                <div className="header-mobile">
                  <button
                    className="header-login"
                    type="button"
                    onClick={() => {
                      if (userType === "influencer") {
                        navigation("/login/influencer");
                      }

                      if (userType === "client") {
                        navigation("/login/client");
                      }
                    }}
                  >
                    Log in {userType === "influencer" && "client"}
                    {userType === "client" && "influencer"}
                  </button>
                  <button
                    className="header-login"
                    type="button"
                    onClick={() => {
                      if (userType === "influencer") {
                        navigation("/signup/client");
                      }

                      if (userType === "client") {
                        navigation("/signup/influencer");
                      }
                    }}
                  >
                    Sign up as {userType === "influencer" && "client"}
                    {userType === "client" && "influencer"}
                  </button>
                </div>
              )}
              {isAuth && (
                <button
                  className="header-profile"
                  onClick={() => {
                    if (role === "influencer") {
                      navigation("/account/influencer");
                    }
                    if (role === "client") {
                      navigation("/account/client");
                    }
                  }}
                >
                  <img className="header-profile-icon" src={profile} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
