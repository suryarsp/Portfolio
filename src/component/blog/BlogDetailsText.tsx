"use client";
import React from "react";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { motion } from "framer-motion";
const BlogDetailsText = () => {
  return (
    <div className="nk-blog-details-txt">
      <CustomGsapDescAnimate className="nk-service-details__descr">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All Loremgenerators
        on the Internet tend to repeat predefined chunks as necessary
      </CustomGsapDescAnimate>

      <CustomGsapDescAnimate className="nk-service-details__descr">
        Making this the first true generator on the Internet. It uses a
        dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic
      </CustomGsapDescAnimate>

      <blockquote className="nk-blog-details__descr blockquote">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path d="M0 30V0L12 15V30H0Z" />
            <path d="M18 30V0L30 15V30H18Z" />
          </svg>
        </span>
        <CustomGsapDescAnimate>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, adipisci velit, sed quia non
          numquam
        </CustomGsapDescAnimate>

        <h5 className="blockquote__author-name">David Kingston</h5>
      </blockquote>

      <CustomGsapDescAnimate className="nk-service-details__descr">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam
      </CustomGsapDescAnimate>

      <h4 className="nk-service-details__title nk-blog-details__inner-title text-animate">
        <CustomGsapHeaderAnimate>
          Seeing trends before they start
        </CustomGsapHeaderAnimate>
      </h4>

      <CustomGsapDescAnimate className="nk-service-details__descr">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the generators
        on the Internet tend to repeat predefined chunks as necessary
      </CustomGsapDescAnimate>

      <CustomGsapDescAnimate className="nk-service-details__descr">
        Making this the first true generator on the Internet. It uses a
        dictionary of over combined with a handful of structures, to generate
        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
        therefore always free from injected humour, or non-characteristic words
        etc.
      </CustomGsapDescAnimate>

      <div className="nk-blog-details__inner-img">
        <motion.img
          src="/assets/img/blog-details-img.jpg"
          alt="Inner Image"
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
        />
      </div>
    </div>
  );
};

export default BlogDetailsText;
