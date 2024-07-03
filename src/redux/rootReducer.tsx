"use client";
import { combineReducers } from "@reduxjs/toolkit";
import themeToggleReducer from "./features/themeToggleSlice";
import blogReducer from "./features/blogSlice";
const rootReducer = combineReducers({
  themeToggle: themeToggleReducer,
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
