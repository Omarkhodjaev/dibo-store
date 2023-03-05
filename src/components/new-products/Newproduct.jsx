import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../../data/best-price.json";
import "./Newproduct.css";
import { Navigation } from "swiper";
import { FiHeart } from "react-icons/fi";

const Newproducts = () => {
  return (
    <div className="container">
      <div className="products-wrapper">
        <h2>Eng zo'r narx</h2>
        <div>
          <Swiper navigation={false} slidesPerView={4} modules={[Navigation]} className="mySwiper">
            
            {Data.map((product, index) => {
              return (
                <SwiperSlide>
                  <div className="product-wrapper" key={index}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} width={"227"} height={"174"} />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-about">{product.about}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <div className="product-btn">
                      <button className="product-buy">Sotib olish</button>
                      <button className="product-sort">
                        <FiHeart />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
