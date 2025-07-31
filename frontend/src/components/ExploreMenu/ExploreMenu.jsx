import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useTranslation } from "react-i18next";

const ExploreMenu = ({ category, setCategory }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="explore-menu" id="explore-menu">
      <h1> {t("exploreMenu:title")}</h1>
      <p className="explore-menu-text">
        {t("exploreMenu:descr")}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="Menu image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
