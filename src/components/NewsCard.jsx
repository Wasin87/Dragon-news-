import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-5">
            {/* Author Section */}
            <div className="flex items-center justify-between p-4 bg-base-200 mb-2">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author?.img}
                        alt={news.author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{news.author?.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(news.author?.published_date).toLocaleDateString('en-GB', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit',
                            })}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <button className="hover:text-primary"><CiBookmark /></button>
                    <button className="hover:text-primary"><IoShareSocial /></button>
                </div>
            </div>

            {/* Thumbnail */}
            <figure>
                <img
                    src={news.image_url}
                    alt={news.title}
                    className="w-11/12 h-56 object-cover rounded-md"
                />
            </figure>

            {/* Body Section */}
            <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold leading-snug">
                    {news.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {news.details?.slice(0, 200)}...
                </p>

                <p className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold">Tags:</span> {news.tags?.join(', ')}
                </p>

                <button className="link mt-1 font-medium text-amber-500">
                    Read More
                </button>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t mt-3">
                    <div className="flex items-center text-yellow-500 gap-1">
                        {/* ⭐ Dynamic Rating Stars */}
                        {Array.from({ length: news.rating?.number || 0 }).map((_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                        <span className="font-semibold ml-1">{news.rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        👁️
                        <span className="text-sm">{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
