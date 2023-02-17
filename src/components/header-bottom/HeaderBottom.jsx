import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="container">
      <div className="header-bottom-wrapper">

        <div className="left">
          <Link to="/" className="logo">
            <img src="images/dibo.png" alt="Logo" />
          </Link>
        </div>

        <div className="right">
            <div className="search-wrapper">
                <input type="search" placeholder="Qidirish" />
                <button></button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
