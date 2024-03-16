import React from "react";

function Card({ imageUrl, title, description, ups, downs }) {
    return (
        <div className="card w-96 bg-gray-300 shadow-xl m-5">
            <figure>
                <img src={imageUrl} alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-green-500 text-white">
                        {ups}
                    </div>
                    <div className="badge badge-outline bg-red-500 text-white">
                        {downs}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
