"use client";
import React from "react";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";

const FilteredBlogs = () => {
  const allBlogs = useAppSelector((state) => state.blog.filteredBlogs);
  return (
    <div className="filtered-blog-container">
      <div className="row g-4 justify-content-center">
        {allBlogs.length > 0 ? (
          allBlogs.map((item) => (
            <motion.div
              className="col-6"
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
          ))
        ) : (
          <div className="empty-filtered-blog">No Such Blogs!</div>
        )}
      </div>
    </div>
  );
};

export default FilteredBlogs;
