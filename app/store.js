import { configureStore } from "@reduxjs/toolkit";
import { RedditSlice } from "../lib/redditPosts/redditSlice";

export const store = configureStore({
    reducer: {
        ReditPosts: RedditSlice.reducer,
    },
});