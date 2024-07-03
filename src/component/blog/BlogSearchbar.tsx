"use client";
import { blogData } from "@/data/Data";
import { setSearchQuery, setFilteredBlogs } from "@/redux/features/blogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { FormEvent, useEffect } from "react";

const BlogSearchbar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.blog.searchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterBlogs();
  };

  // useEffect to initially filter blogs when the search query changes
  useEffect(() => {
    filterBlogs();
  }, [searchQuery]);

  const filterBlogs = () => {
    const filtered = blogData.filter((blog) => {
      return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    dispatch(setFilteredBlogs(filtered));
  };

  return (
    <div className="nk-blog-details-widget nk-blog-details-search">
      <h5 className="nk-blog-details-widget__title text-animate">Search</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nk-search"
          id="nk-blog-details-search-input"
          placeholder="Search Here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <i className="fa-regular fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default BlogSearchbar;
