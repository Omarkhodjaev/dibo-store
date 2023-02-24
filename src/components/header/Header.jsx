import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
          <ul className="header-left">
            <li className="location">
              <Link to="./images/geo-alt-fill">
                <img src="images/location.svg"/>
                Tashkent
              </Link>
            </li>
            <li className="our-store">
              <Link to="/">Bizning do'konlarimiz</Link>
            </li>
            <li className="term-payment">
              <Link to="/">Muddatli to'lovga sotib olish</Link>
            </li>
            <li className="payment-methods">
              <Link to="/">To'lov usullari</Link>
            </li>
            <li className="guarantee">
              <Link to="/">Maxsulotlar uchun kafolat</Link>
            </li>
          </ul>

          <div className="header-right">
            <ul className="languages">
              <li className="lang-item">Русский</li>
              <li className="lang-item">O'zbekcha</li>
              <li className="lang-item">Узбекча</li>
            </ul>
            <div className="phone-link">
                <a href='tel:+998 33 244 55 55'>+998 33 244 55 55</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
