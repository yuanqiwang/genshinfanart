import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import moment from 'moment';
import Link from 'next/link';
import { getCategories } from '../services';

// import { grpahCMSImageLoader } from '../util';
// import { getSimilarPosts, getRecentPosts } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categoryData) => setCategories(categoryData))
  }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-8 mb-8">
      <h3 className='text-xl mb-5 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;