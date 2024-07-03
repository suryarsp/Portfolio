// blogSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Blog {
  id: number;
  category: string;
  date: string;
  title: string;
  slug: string;
  imgSrc: string;
  tags: string[];
}

interface BlogState {
  searchQuery: string;
  filteredBlogs: Blog[];
  categoryFilter: string | null; // Category filter
  tagsFilter: string[]; // Tags filter
}

const initialState: BlogState = {
  searchQuery: "",
  filteredBlogs: [],
  categoryFilter: null,
  tagsFilter: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCategoryFilter(state, action: PayloadAction<string | null>) {
      state.categoryFilter = action.payload;
    },
    setTagsFilter(state, action: PayloadAction<string[]>) {
      state.tagsFilter = action.payload;
    },
    setFilteredBlogs(state, action: PayloadAction<Blog[]>) {
      state.filteredBlogs = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setCategoryFilter,
  setTagsFilter,
  setFilteredBlogs,
} = blogSlice.actions;
export default blogSlice.reducer;
