"use client";
import React from "react";

import { blogData } from "@/data/Data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFilteredBlogs, setTagsFilter } from "@/redux/features/blogSlice";

const BlogCategories = () => {
  const dispatch = useAppDispatch();
  const { categoryFilter, tagsFilter } = useAppSelector((state) => state.blog);

  const handleTagClick = (tag: string) => {
    const updatedTags = tagsFilter.includes(tag)
      ? tagsFilter.filter((t) => t !== tag)
      : [...tagsFilter, tag];

    dispatch(setTagsFilter(updatedTags));

    // Filter blogs based on both category and tags
    const filteredBlogs = blogData.filter(
      (blog) =>
        (!categoryFilter || blog.category === categoryFilter) &&
        (updatedTags.length === 0 ||
          blog.tags.some((t) => updatedTags.includes(t)))
    );

    dispatch(setFilteredBlogs(filteredBlogs));
  };

  // Extract unique tags from blogData
  const uniqueTags = Array.from(new Set(blogData.flatMap((blog) => blog.tags)));

  return (
    <div className="nk-blog-details-widget">
      <div className="nk-blog-details-widget nk-blog-details-categories">
        <h5 className="nk-blog-details-widget__title text-animate">Tags</h5>
        <div className="nk-blog-details-tags flex-wrap">
          {uniqueTags.map((tag) => (
            <a
              role="button"
              className={`nk-blog-details-tag ${
                tagsFilter.includes(tag) ? "active" : ""
              }`}
              onClick={() => handleTagClick(tag)}
              key={tag}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
