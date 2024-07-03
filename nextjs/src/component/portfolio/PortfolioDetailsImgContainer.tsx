"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  imgSrc: string;
  category: string;
};
const PortfolioDetailsImgContainer = ({ imgSrc, category }: Props) => {
  return (
    <div className="nk-portfolio-details__img">
      <motion.div
        className="nk-portfolio-details-img-container"
        initial={{
          clipPath: "polygon(0 0,0 0,0 100%, 0% 100%)",
        }}
        whileInView={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <img src={imgSrc} alt="Portfolio Details Cover" />
      </motion.div>

      <motion.div
        className="nk-portfolio-details__infos bg-defaults"
        initial={{
          x: -80,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
      >
        <h4 className="nk-pricing-pack__title">Portfolio Info</h4>

        <ul>
          <li className="nk-portfolio-details-info nk-about-info">
            <h5 className="nk-about-info__title">Client</h5>
            <p className="nk-about-info__value">Ruby Clinton</p>
          </li>
          <li className="nk-portfolio-details-info nk-about-info">
            <h5 className="nk-about-info__title">Category</h5>
            <p className="nk-about-info__value">{category}</p>
          </li>
          <li className="nk-portfolio-details-info nk-about-info">
            <h5 className="nk-about-info__title">Date</h5>
            <p className="nk-about-info__value">April 09, 2023</p>
          </li>
          <li className="nk-portfolio-details-info nk-about-info">
            <h5 className="nk-about-info__title">Location</h5>
            <p className="nk-about-info__value">
              24 Fifth st.,Los Angeles, USA
            </p>
          </li>
        </ul>

        <div className="nk-portfolio-details__socials">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioDetailsImgContainer;
