import React from "react";
import logo from "../images/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import themeNight from "../images/icons/theme-night.svg";
import themeDay from "../images/icons/theme-day.svg";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const navigation = useNavigate();
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <button className="header-logo" onClick={() => navigation("/")}>
              <img src={logo} />
            </button>

            <div className="header-navigation">
              <button className="header-theme" onClick={toggleTheme}>
                {theme.text === "#000" ? (
                  <img className="header-theme-icon" src={themeNight} />
                ) : (
                  <img className="header-theme-icon" src={themeDay} />
                )}
              </button>

              <button className="header-login">Log in</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
