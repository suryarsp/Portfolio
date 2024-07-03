"use client";
import React from "react";
import { motion } from "framer-motion";

const PortfolioDetailsInnerImage = () => {
  return (
    <div className="nk-portfolio-details__inner-img">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="nk-portfolio-details__inner-img-small">
            <motion.div
              className="nk-portfolio-details-img-container"
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
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
              <img
                src="/assets/img/portfolio-details-2.jpg"
                alt="Portfolio Details Image"
              />
            </motion.div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="nk-portfolio-details__inner-img-small">
            <motion.div
              className="nk-portfolio-details-img-container"
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
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
              <img
                src="/assets/img/portfolio-details-3.jpg"
                alt="Portfolio Details Image"
              />
            </motion.div>
          </div>
        </div>
        <div className="col-12">
          <div className="nk-portfolio-details__inner-img-big">
            <motion.div
              className="nk-portfolio-details-img-container"
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
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
              <img
                src="/assets/img/portfolio-details-4.jpg"
                alt="Portfolio Details Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsInnerImage;
