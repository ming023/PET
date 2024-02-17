import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

const Slide = () => {
  return (
    <div>
      <div className="slide_container">
        <SliderImage />
      </div>
    </div>
  );
};

export const SliderImage = () => {
  const images = [
    "./images/slide/slide1.jpeg",
    "./images/slide/slide2.jpeg",
    "./images/slide/slide3.jpeg",
    "./images/slide/slide4.jpeg",
    "./images/slide/slide5.jpeg",
  ];

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <Slider {...settings} className="slide">
      {images.map((image, index) => (
        <div key={index} className="slide_img">
          <img src={image} alt={`슬라이드 이미지 ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Slide;
