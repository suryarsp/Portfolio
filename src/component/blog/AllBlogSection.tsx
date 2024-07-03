"use client";
import { blogData } from "@/data/Data";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";

const AllBlogSection = () => {
  const blogPerPage = 6;

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const startBlogIndex = (currentBlogPage - 1) * blogPerPage;
  const endBlogIndex = startBlogIndex + blogPerPage;
  const currentBlogItems = blogData.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(blogData.length / blogPerPage);

  const handleBlogPageChange = (newPage: number) => {
    setCurrentBlogPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };
  return (
    <section className="nk-blogs nk-inner-blogs nk-section-spacing">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {currentBlogItems.map((item) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-8 col-9 col-xxs-12"
              key={item.id}
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2 + 0.1 * item.id,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
            >
              <div className="nk-blog nk-inner-blog">
                <div className="nk-blog__infos">
                  <span className="nk-blog__category">
                    <Link href="/blog">{item.category}</Link>
                  </span>{" "}
                  /<span className="nk-blog__date">{item.date}</span>
                </div>
                <h4 className="nk-pricing-pack__title text-animate">
                  <Link href={`/blog/${item.slug}`}>
                    <CustomGsapHeaderAnimate>
                      {item.title}
                    </CustomGsapHeaderAnimate>
                  </Link>
                </h4>
                <div className="nk-blog__img">
                  <motion.div
                    className="nk-blog__img-container"
                    initial={{
                      scale: 1.2,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeIn",
                    }}
                    viewport={{ once: true }}
                  >
                    <img src={item.imgSrc} alt="Blog Image" />
                  </motion.div>
                  <Link href={`/blog/${item.slug}`} className="nk-blog__btn">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
                <CustomGsapDescAnimate className="nk-blog__descr">
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </CustomGsapDescAnimate>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="nk-slider-nav nk-pagination"
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
        >
          {Array.from({ length: totalBlogPages }, (_, index) => (
            <a
              role="button"
              className={currentBlogPage === index + 1 ? "active" : ""}
              onClick={() => handleBlogPageChange(index + 1)}
            >
              <span className="number">{index + 1}</span>
            </a>
          ))}
          <a
            role="button"
            onClick={() =>
              currentBlogPage !== totalBlogPages &&
              handleBlogPageChange(currentBlogPage + 1)
            }
          >
            <span className="number">
              <i className="fa-light fa-angle-right"></i>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AllBlogSection;
