"use client";
import React from "react";
import {
  setCategoryFilter,
  setFilteredBlogs,
} from "@/redux/features/blogSlice";
import { blogData } from "@/data/Data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const BlogCategories = () => {
  const dispatch = useAppDispatch();
  const categoryFilter = useAppSelector((state) => state.blog.categoryFilter);

  // Extract unique categories from blogData using Set
  const uniqueCategories = Array.from(
    new Set(blogData.map((blog) => blog.category))
  );

  const handleCategoryClick = (category: string) => {
    // Dispatch action to set the category filter
    dispatch(setCategoryFilter(category));

    // Filter the original blogData based on the selected category
    const filteredBlogs = blogData.filter((blog) => blog.category === category);

    // Dispatch action to set the filtered blogs
    dispatch(setFilteredBlogs(filteredBlogs));

    // If you are fetching blogs from an API, you may want to trigger a new API request based on the selected category
    // and update the Redux store with the new data.
  };

  return (
    <div className="nk-blog-details-widget nk-blog-details-categories">
      <h5 className="nk-blog-details-widget__title text-animate">Categories</h5>
      <ul>
        {uniqueCategories.map((category) => (
          <li key={category}>
            <a
              role="button"
              className={`nk-blog-details-category ${
                categoryFilter === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="nk-blog-details-category-name">{category}</span>
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
