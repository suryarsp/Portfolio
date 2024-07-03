"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { motion } from "framer-motion";
import ContactForm from "../form/ContactForm";
import { Links } from "@/data/Links";
type Props = {
  style: string;
  innerPage?: boolean;
};
const ContactSection = ({ style, innerPage }: Props) => {
  const isThemeDark = useAppSelector((state) => state.themeToggle.isThemeDark);

  const arrowIcon = isThemeDark
    ? "/assets/img/banner-link-arrow-light.png"
    : "/assets/img/banner-link-arrow.png";
  return (
    <section
      className={`nk-contact ${style} ${innerPage ? "nk-contact-page" : ""}`}
      id="contact"
    >
      <div className="container position-relative">
        <div className="nk-contact-bg">
          <div className="row gy-5 justify-content-between">
            <motion.div
              className="col-lg-6"
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
              <div className="nk-contact__txt">
                <div className="nk-section__heading w-100 text-start">
                  <h6 className="nk-section__sub-title text-animate">
                    <CustomGsapHeaderAnimate>
                      Conatct Me
                    </CustomGsapHeaderAnimate>
                  </h6>
                  <h2 className="nk-section__title text-animate">
                    <CustomGsapHeaderAnimate>
                      Let's get in touch
                    </CustomGsapHeaderAnimate>
                  </h2>
                </div>

                <div className="nk-contact__infos">
                  <div className="nk-contact-info">
                    <div className="nk-contact-info__icon">
                      <i className="fa-regular fa-phone"></i>
                    </div>

                    <div className="nk-contact-info__txt">
                      <h6 className="nk-contact-info__title">phone</h6>
                      <h5 className="nk-contact-info__value">
                        <a href="tel:+18008009000">+91 9962393870</a>
                      </h5>
                    </div>
                  </div>

                  <div className="nk-contact-info">
                    <div className="nk-contact-info__icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>

                    <div className="nk-contact-info__txt">
                      <h6 className="nk-contact-info__title">email</h6>
                      <h5 className="nk-contact-info__value">
                        <a href="mailto:contact@mydomain.com">
                          rspsuriya777@gmail.com
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div className="nk-contact-info">
                    <div className="nk-contact-info__icon">
                      <i className="fa-location-dot fa-regular"></i>
                    </div>

                    <div className="nk-contact-info__txt">
                      <h6 className="nk-contact-info__title">location</h6>
                      <h5 className="nk-contact-info__value">
                        Chennai, India
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="nk-contact__links">
                  <a href={Links.LinkedIn} target="_blank" className="nk-banner__link">
                    <span className="main-icon">
                      <img src="/assets/img/banner-link-6.png" alt="icon" />
                    </span>
                    <span className="link-txt">Linked In</span>
                    <span className="arrow-icon">
                      <img src={arrowIcon} alt="icon" />
                    </span>
                  </a>

                  <a href={Links.Skype} target="_blank" className="nk-banner__link">
                    <span className="main-icon">
                      <img src="/assets/img/banner-link-5.png" alt="icon" />
                    </span>
                    <span className="link-txt">Skype</span>
                    <span className="arrow-icon">
                      <img src={arrowIcon} alt="icon" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{
                x: 80,
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
              <div className="nk-contact__form-area">
                <h4 className="nk-pricing-pack__title">Fill The Form</h4>

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="nk-contact__circles">
          <img src="/assets/img/contact-vector-1.png" alt="vector" />
          <img src="/assets/img/contact-vector-1.png" alt="vector" />
        </div>
      </div>

      {!innerPage && (
        <div className="nk-contact__wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1920px"
            height="533px"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                fill="#8670ef"
                d="M -0.5,-0.5 C 0.833333,-0.5 2.16667,-0.5 3.5,-0.5C 233.016,62.1211 466.849,95.1211 705,98.5C 750.561,98.1639 796.061,96.3306 841.5,93C 965.86,79.2467 1090.19,65.2467 1214.5,51C 1305.59,41.4319 1396.92,36.2652 1488.5,35.5C 1572.3,34.3442 1655.3,41.8442 1737.5,58C 1802.39,71.0108 1863.05,94.5108 1919.5,128.5C 1919.5,263.167 1919.5,397.833 1919.5,532.5C 1279.5,532.5 639.5,532.5 -0.5,532.5C -0.5,354.833 -0.5,177.167 -0.5,-0.5 Z"
              />
            </g>
          </svg>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
