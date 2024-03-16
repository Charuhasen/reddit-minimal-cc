import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/lib/redditPosts/redditSlice";

function TextInput() {
    const [textField, settextField] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        settextField(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(setSearchTerm(textField));
    };

    return (
        <div className="flex">
            <input
                type="text"
                placeholder="Search Minimal Reddit..."
                className="input input-bordered w-full max-w-xs h-10"
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
                className="btn btn-xs ml-5 sm:btn-sm md:btn-md lg:btn-lg h-5"
            >
                Search
            </button>
        </div>
    );
}

export default TextInput;
