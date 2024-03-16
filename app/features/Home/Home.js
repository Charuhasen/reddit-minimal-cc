"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "@/app/components/TextInput/TextInput";
import { getRedditPosts } from "@/app/api/reddit";
import {
    setPosts,
    startGetPosts,
    getPostsSuccess,
} from "@/lib/redditPosts/redditSlice";
import Card from "@/app/components/Card/Card";

function Home() {
    const reddit = useSelector((state) => state.ReditPosts);
    const { posts, isLoading, error, selectedSubreddit, searchTerm } = reddit;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetPosts());
        getRedditPosts("/houses")
            .then((posts) => {
                dispatch(getPostsSuccess(posts));
            })
            .catch(() => {
                dispatch(getPostsFailed());
            });
    }, []);

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <button
                    type="button"
                    onClick={() => dispatch(fetchPosts(selectedSubreddit))}
                >
                    Try again
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                {/* <button
                    type="button"
                    onClick={() => dispatch(setSearchTerm(""))}
                >
                    Go home
                </button> */}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-10">
                <TextInput />
            </div>
            <div className="mt-10">
                {posts.map((post) => (
                    <div key={post.id}>
                        <Card
                            imageUrl={post.thumbnail}
                            title={post.title}
                            description={post.description}
                            ups={post.ups}
                            downs={post.downs}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
