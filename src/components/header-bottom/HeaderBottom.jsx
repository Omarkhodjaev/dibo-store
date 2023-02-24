import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="container container-bg-white">
      <div className="header-bottom-wrapper">

        <div className="header-bottom-left">
          <Link to="/" className="logo">
            <img src="images/logo.svg" alt="Dibocomputers" />
          </Link>
        </div>

        <div className="header-bottom-right">
            
            <div className="search-wrapper" tabIndex={"1"}>
                <input className="search-inp" type="text" placeholder="Qidirish" />
                <div className="search-icons-wrapper">
                  <button><img src="images/microphone.svg" tabIndex={"2"} alt="voice-search" /></button>
                  <span></span>
                  <button><img src="images/search.svg" tabIndex={"3"} alt="search" /></button>
                </div>
            </div>

            <button className="sorted-wrapper" tabIndex={"3"} title={"Saralanganlar"}>
                <img src="images/heart.svg" alt="sorted" />
            </button>
            
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
