import React, { useState, useEffect } from 'react';


const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        {post.title}
      </h1>

      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
       </p>

    </div>
  );
};

export default PostCard;