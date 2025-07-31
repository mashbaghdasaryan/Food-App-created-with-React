import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="header">
      <div className="header-contents">
        <h2>{t("banner:title")}</h2>
        <p>
         {t("banner:descr")}
        </p>
        <button>
          <a href="#explore-menu">{t("banner:btn")}</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
