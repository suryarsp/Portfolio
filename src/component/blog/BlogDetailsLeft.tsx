"use client";
import React from "react";
import BlogDetailsText from "./BlogDetailsText";
import BlogDetailBottomAction from "./BlogDetailBottomAction";
import { useAppSelector } from "@/redux/hooks";
import FilteredBlogs from "./FilteredBlogs";
import BlogCommentSection from "./BlogCommentSection";

const BlogDetailsLeft = () => {
  const filteredBlogs = useAppSelector((state) => state.blog.filteredBlogs);
  return (
    <div className="nk-blog-details-left">
      {!filteredBlogs ? (
        <>
          <BlogDetailsText />

          <BlogDetailBottomAction />

          <BlogCommentSection />
        </>
      ) : (
        <FilteredBlogs />
      )}
    </div>
  );
};

export default BlogDetailsLeft;
