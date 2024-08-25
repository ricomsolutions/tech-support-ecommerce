import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/Slider.css";

import image1 from "../images/pexels-mart-production-7709173.jpg";
import image2 from "../images/pexels-mart-production-7709177.jpg";
import image3 from "../images/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg";

function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 6000 }}
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
          <div className="overlay"></div>
          <div className="text-container">
            <h2>Expert Tech Solutions</h2>
            <h3>
              Reliable & Efficient <br></br>Support
            </h3>
            <p>
              Get the best tech support services for your devices. Fast, secure,
              and <br></br>reliable assistance at your fingertips.
            </p>
            <button onClick={() => (window.location.href = "/services")}>
              Book A Service
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" />
          <div className="overlay"></div>
          <div className="text-container">
            <h2>Professional In-Home Services</h2>
            <h3>
              Tech Support At Your <br></br> Doorstep
            </h3>
            <p>
              Experience hassle-free tech support <br></br>with our expert team
              ready to assist you right at home.
            </p>
            <button onClick={() => (window.location.href = "/contact")}>
              Contact Us
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" />
          <div className="overlay"></div>
          <div className="text-container">
            <h2>Seamless Tech Integration</h2>
            <h3>
              Innovative Solutions <br></br> For Your Needs
            </h3>
            <p>
              Discover cutting-edge solutions to keep your tech running
              smoothly. <br></br> Your satisfaction is our priority.
            </p>
            <button onClick={() => (window.location.href = "/about")}>
              Discover More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
