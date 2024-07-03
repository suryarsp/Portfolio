"use client";
import { testimonialData } from "@/data/Data";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
const TestimonialSection = () => {
  return (
    <section className="nk-testimonial nk-section-spacing">
      <div className="container">
        <div className="nk-section__heading nk-section__heading--2">
          <h6 className="nk-section__sub-title text-animate">
            <CustomGsapHeaderAnimate>
              Client's Testimonial
            </CustomGsapHeaderAnimate>
          </h6>
          <h2 className="nk-section__title text-animate">
            <CustomGsapHeaderAnimate>
              What My Clients Say
            </CustomGsapHeaderAnimate>
          </h2>
        </div>

        <Swiper
          className="nk-testimonial-slider"
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={true}
          watchSlidesProgress={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1.4,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonialData.map((item) => (
            <SwiperSlide className="nk-testimony" key={item.id}>
              <CustomGsapDescAnimate className="nk-testimony__txt">
                {item.testimonial}
              </CustomGsapDescAnimate>

              <div className="nk-testimony__bottom">
                <div className="nk-reviewer">
                  <div className="nk-reviewer__img">
                    <img src={item.imgSrc} alt="Reviewer Image" />
                  </div>

                  <div className="nk-reviewer__txt">
                    <CustomGsapHeaderAnimate>
                      <h5 className="nk-reviewer__name text-animate">
                        {item.name}
                      </h5>
                    </CustomGsapHeaderAnimate>
                    <CustomGsapHeaderAnimate>
                      <h6 className="nk-reviewer__label">{item.label}</h6>
                    </CustomGsapHeaderAnimate>
                  </div>
                </div>

                <div className="nk-testimony__icon">
                  <span>&#8221;</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="nk-testimonial-slider__nav nk-slider-nav">
          <button className="prev">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button className="next">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
