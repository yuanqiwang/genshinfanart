import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { getCategories } from '../services';


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categoryData) => setCategories(categoryData))
  }, [])

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className='border-b w-full inline-block border-gray-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-3xl text-white'>
              Genshin Impact Fan Art
            </span>
          </Link>
          <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;