import { configureStore } from "@reduxjs/toolkit";
import { RedditSlice } from "../features/redditPosts/redditSlice";

export const store = configureStore({
    reducer: {
        ReditPosts: RedditSlice.reducer,
    },
});