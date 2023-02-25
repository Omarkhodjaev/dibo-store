import React from "react";
import "./Category.css"

const Category = () => {
  return (
    <div className="container">
      <div className="category-wrapper">
        <div className="category-computers">
          <div>
            <img src="images/laptop.svg" alt="computers" />
          </div>
          <div>
            <p>Kompyuterlar</p>
          </div>
        </div>

        <div className="category-mobiles">
          <div>
            <img src="images/phone.svg" alt="computers" />
          </div>
          <div>
            <p>Smartfonlar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
