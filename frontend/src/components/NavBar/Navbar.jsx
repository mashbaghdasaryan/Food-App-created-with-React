import React, { useContext, useState } from "react";
import "../NavBar/Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext)

  const handleMobileToggle = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className={`navbar-menu ${showMobileMenu ? "show-menu" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
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
        <div className="navbar-search-icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="Basket Icon" /></Link>
          <div className={getTotalCartAmount()===0 ? '' : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
