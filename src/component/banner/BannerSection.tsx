"use client";
import React from "react";
import TickerTextSlider from "../slider/TickerTextSlider";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { Links } from "@/data/Links";

const BannerSection = () => {
  const isThemeDark = useAppSelector((state) => state.themeToggle.isThemeDark);

  const arrowIcon = isThemeDark
    ? "/assets/img/banner-link-arrow-light.png"
    : "/assets/img/banner-link-arrow.png";
  const shapes = isThemeDark
    ? "assets/img/banner-shape-stroke-light.png"
    : "assets/img/banner-shape-stroke.png";
  return (
    <section className="nk-banner">
      <div className="container">
        <h1 className="nk-banner__title text-animate">
          <CustomGsapHeaderAnimate>
            Hello, <img src="assets/img/banner-emoji.png" alt="emoji" /> I am
            Surya, Full Stack  / User Interface{" "}
            <span className="colored">Developer</span>
          </CustomGsapHeaderAnimate>
        </h1>

        <div className="row g-3">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="nk-banner__links text-end">
              <Link href="/about" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-1.png" alt="icon" />
                </span>
                <span className="link-txt">About Me</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>

              <Link href={Links.Resume} target="_blank" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-2.png" alt="icon" />
                </span>
                <span className="link-txt">Resume</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>

              <Link href="/portfolio" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-3.png" alt="icon" />
                </span>
                <span className="link-txt">My Works</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-4 order-2 order-md-1">
            <div className="nk-banner__img">
              <img src="assets/img/banner-img.png" className="image-fluid w-100" alt="Banner Image" />

              <div className="vectors">
                <img src="assets/img/banner-vector-1.png" alt="vector" />
                <img
                  src={
                    isThemeDark
                      ? "assets/img/banner-vector-3.png"
                      : "assets/img/banner-vector-2.png"
                  }
                  alt="vector"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 order-1 order-md-2">
            <div className="nk-banner__links">
              <Link href="#contact" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-4.png" alt="icon" />
                </span>
                <span className="link-txt">Message</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>

              <Link href={Links.Skype}  target="_blank" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-5.png" alt="icon" />
                </span>
                <span className="link-txt">Skype</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>

              <Link href={Links.LinkedIn} target="_blank" className="nk-banner__link">
                <span className="main-icon">
                  <img src="assets/img/banner-link-6.png" alt="icon" />
                </span>
                <span className="link-txt">Linked In</span>
                <span className="arrow-icon">
                  <img src={arrowIcon} alt="icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="nk-banner__shapes">
        <img src={shapes} alt="stroke shape" />
        <img src={shapes} alt="stroke shape" />
      </div>
      <TickerTextSlider />
    </section>
  );
};

export default BannerSection;
