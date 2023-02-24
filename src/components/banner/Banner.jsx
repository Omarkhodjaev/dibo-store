import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner-wrapper"
      >

        <SwiperSlide>
          <Link to="/" className="banner-img">
            <img src="images/banner.png" alt="" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className="banner-img">
            <img src="images/banner.png" alt="" />
          </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
