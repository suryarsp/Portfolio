import React from "react";
import BlogSearchbar from "./BlogSearchbar";
import BlogCategories from "./BlogCategories";
import RecentBlogs from "./RecentBlogs";
import BlogTags from "./BlogTags";

const BlogDetailSidebar = () => {
  return (
    <div className="nk-blog-details-sidebar">
      <BlogSearchbar />

      <BlogCategories />

      <RecentBlogs />

      <BlogTags />
    </div>
  );
};

export default BlogDetailSidebar;
