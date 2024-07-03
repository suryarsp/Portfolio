"use client";
import Link from "next/link";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { motion } from "framer-motion";
type Props = {
  category: string;
  date: string;
  title: string;
};

const BlogDetailsHeading = ({ category, date, title }: Props) => {
  return (
    <div className="nk-blog-details__heading">
      <motion.div
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
        <Link href="/blog" className="nk-blog-details__category">
          {category}
        </Link>

        <CustomGsapHeaderAnimate className="nk-blog-details__infos">
          <h6 className="nk-blog-details__info">{date}</h6>
          <span className="divider">/</span>
          <h6 className="nk-blog-details__info">Comments (0)</h6>
          <span className="divider">/</span>
          <h6 className="nk-blog-details__info">3 Min Read</h6>
        </CustomGsapHeaderAnimate>

        <h1 className="nk-blog-details__title text-animate">
          <CustomGsapHeaderAnimate>{title}</CustomGsapHeaderAnimate>
        </h1>

        <div className="nk-blog-details-author">
          <div className="nk-blog-details-author__img">
            <img src="/assets/img/reviewer-2.jpg" alt="Author Image" />
          </div>

          <div className="nk-blog-details-author__txt">
            <span className="sub-title">Written By</span>
            <h6 className="nk-blog-details-author__name">
              <Link href="#">Williamson</Link>
            </h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetailsHeading;
