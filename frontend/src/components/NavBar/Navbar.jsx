import React, { useContext, useState } from "react";
import "../NavBar/Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useTranslation } from "react-i18next";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleMobileToggle = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className={`navbar-menu ${showMobileMenu ? "show-menu" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          {t("navbar:home")}
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          {t("navbar:menu")}
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          {t("navbar:mobileApp")}
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          {t("navbar:contactUs")}
        </a>
      </ul>
      <div className="mobile-menu-icon" onClick={handleMobileToggle}>
        <svg viewBox="0 0 512 512" width="25" height="25">
          <g>
            <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
            <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
            <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
          </g>
        </svg>
      </div>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />

        <div className="language-dropdown">
          <div
            className="language-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="#49557e"
            >
              <path d="M20,2.5V7.704l-2.352-2.353-.707,.707,2.506,2.507c.58,.58,1.525,.58,2.105,0l2.506-2.507-.707-.707-2.352,2.353V2.5c0-1.379-1.122-2.5-2.5-2.5h-4.5V1h4.5c.827,0,1.5,.673,1.5,1.5Zm2,8.5H14c-1.103,0-2,.897-2,2v9h7.821l2.167,1.775c.789,.606,2.073-.092,2.011-1.061V13c0-1.103-.897-2-2-2Zm.847,11.961c-.038,.02-.168,.079-.251,.021l-2.417-1.981h-7.179V13c0-.552,.449-1,1-1h8c.551,0,1,.448,1,1v9.73c.004,.136-.116,.211-.153,.23Zm-4.906-9.961c-.692-.022-1.32,.51-1.455,1.196l-1.33,5.804h1.026l.458-2h2.625l.472,2h1.027l-1.38-5.853c-.156-.672-.754-1.147-1.443-1.147Zm-1.071,4l.591-2.578c.065-.28,.237-.424,.481-.422,.225,0,.418,.153,.47,.376l.619,2.624h-2.16ZM10,0H2C.897,0,0,.897,0,2V11.707c-.052,.999,1.234,1.678,2.038,1.048l2.141-1.755h7.821V2c0-1.103-.897-2-2-2Zm1,10H3.822l-2.39,1.961c-.227,.091-.383,.008-.432-.231V2c0-.552,.449-1,1-1H10c.551,0,1,.448,1,1V10Zm-4.154-2.574c.674,.347,1.536,.574,2.655,.574v1c-1.522,0-2.654-.36-3.501-.894-.848,.533-1.978,.894-3.499,.894v-1c1.119,0,1.976-.228,2.65-.572-.763-.763-1.176-1.674-1.394-2.429h1.028c.21,.605,.588,1.286,1.224,1.849,1.038-.92,1.358-2.163,1.451-2.849H2.5v-1h3v-1h1v1h3v1h-1.042c-.1,.767-.45,2.265-1.612,3.426Z" />
            </svg>
          </div>

          {dropdownOpen && (
            <ul className="language-options">
              <li onClick={() => changeLanguage("en")}>English</li>
              <li onClick={() => changeLanguage("hy")}>Հայերեն</li>
              <li onClick={() => changeLanguage("ru")}>Русский</li>
            </ul>
          )}
        </div>

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>{t("navbar:signIn")}</button>
      </div>
    </div>
  );
};

export default Navbar;
