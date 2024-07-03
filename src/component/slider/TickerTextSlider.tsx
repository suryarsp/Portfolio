"use client";
import React from "react";
import Slider from "react-slick";

const TickerTextSlider = () => {
  const settings1 = {
    arrows: false,
    autoplay: true,
    dots: false,
    slidesToShow: 4,
    slide: "h4",
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1.2,
          centerPadding: "20px",
        },
      },
    ],
  };
  const settings2 = {
    arrows: false,
    autoplay: true,
    dots: false,
    slidesToShow: 4,
    slide: "h4",
    rtl: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1.2,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="tickers">
      <Slider {...settings1} className="ticker ticker-1 splide">
        <h4 className="splide__slide">20+ Projects</h4>
        <h4 className="splide__slide">5+ JS Frameworks</h4>
        <h4 className="splide__slide">6+ UI Libraries</h4>
        <h4 className="splide__slide">3+ CSS Frameworks</h4>
        <h4 className="splide__slide">5+ Chart Libraries</h4>
      </Slider>

      <Slider {...settings2} className="ticker ticker-2 splide">
        <h4 className="splide__slide">WebApp Development</h4>
        <h4 className="splide__slide">Application Design</h4>
        <h4 className="splide__slide">Mobile App Development</h4>
        <h4 className="splide__slide">Backend Development</h4>
        <h4 className="splide__slide">Testing and Support</h4>
      </Slider>
    </div>
  );
};

export default TickerTextSlider;
