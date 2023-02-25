import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="container">
      <div className="category-wrapper">
        <Link to='/' className="category-computers">
          <div>
            <img src="images/laptop.svg" alt="computers" />
          </div>
          <div>
            <p>Kompyuterlar</p>
          </div>
        </Link>

        <Link to="/" className="category-mobiles">
          <div>
            <img src="images/phone.svg" alt="computers" />
          </div>
          <div>
            <p>Smartfonlar</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
