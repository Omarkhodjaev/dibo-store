import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="container">
      <div className="header-bottom-wrapper">

        <div className="left">
          <Link to="/" className="logo">
            <img src="images/logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="right">
            
            <div className="search-wrapper">
                <input type="search" placeholder="Qidirish" />
                <button><img src="images/microphone.svg" alt="voice-search" /></button>
                <button><img src="images/search.svg" alt="search" /></button>
            </div>

            <div className="liked-wrapper">
                <img src="images/heart.svg" alt="liked" />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
