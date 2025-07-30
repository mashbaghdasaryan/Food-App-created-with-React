import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <a
          href="https://play.google.com/store/apps/details?id=com.example.tomato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.play_store} alt="Google Play" />
        </a>
        <a
          href="https://apps.apple.com/app/id123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.app_store} alt="App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
