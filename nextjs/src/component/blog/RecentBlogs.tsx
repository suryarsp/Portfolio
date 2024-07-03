import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";

const RecentBlogs = () => {
  return (
    <div className="nk-blog-details-widget nk-blog-details-recents">
      <h5 className="nk-blog-details-widget__title text-animate">
        Recent Posts
      </h5>
      {blogData.slice(0, 3).map((item) => (
        <div className="nk-recent-blog" key={item.id}>
          <div className="nk-recent-blog__img">
            <Link href={`/blog/${item.slug}`}>
              <img
                className="nk-recent-blog__img"
                src={item.imgSrc}
                alt="blog image"
              />
            </Link>
          </div>
          <div className="nk-recent-blog__txt">
            <span className="nk-recent-blog__date">
              <i className="fa-regular fa-calendar-alt"></i> {item.date}
            </span>
            <h5 className="nk-recent-blog__title">
              <Link href={`/blog/${item.slug}`}>
                <CustomGsapHeaderAnimate>{item.title}</CustomGsapHeaderAnimate>
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogs;
