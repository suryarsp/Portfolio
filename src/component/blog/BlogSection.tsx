"use client";
import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";

const BlogSection = () => {
  return (
    <section className="nk-blogs nk-section-spacing">
      <div className="container">
        <div className="nk-section__heading">
          <h6 className="nk-section__sub-title text-animate">
            <CustomGsapHeaderAnimate>From My Blog</CustomGsapHeaderAnimate>
          </h6>
          <h2 className="nk-section__title text-animate">
            <CustomGsapHeaderAnimate>
              Visit my blog and keep your feedback
            </CustomGsapHeaderAnimate>
          </h2>
        </div>

        <Swiper
          className="nk-blogs-slider"
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={true}
          watchSlidesProgress={true}
          navigation={{
            prevEl: "#nk-blogs-slider-nav .prev",
            nextEl: "#nk-blogs-slider-nav .next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1.3,
              centeredSlides: true,
            },
            576: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {blogData.slice(0, 6).map((item) => (
            <SwiperSlide className="nk-blog" key={item.id}>
              <div className="nk-blog__infos">
                <CustomGsapHeaderAnimate>
                  <span className="nk-blog__category">
                    <Link href="/blog">{item.category}</Link>
                  </span>{" "}
                  /<span className="nk-blog__date">{item.date}</span>
                </CustomGsapHeaderAnimate>
              </div>
              <h4 className="nk-pricing-pack__title text-animate ">
                <CustomGsapHeaderAnimate>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </CustomGsapHeaderAnimate>
              </h4>
              <div className="nk-blog__img">
                <div className="nk-blog-image-container">
                  <img src={item.imgSrc} alt="Blog Image" />
                </div>
                <Link href={`/blog/${item.slug}`} className="nk-blog__btn">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
              <CustomGsapDescAnimate className="nk-blog__descr">
                Duis aute irure dolor in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CustomGsapDescAnimate>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="nk-slider-nav" id="nk-blogs-slider-nav">
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

export default BlogSection;
