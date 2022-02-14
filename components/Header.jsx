import React, { useContext, useEffect } from 'react';
import Link from 'next/link'

const categories = [{name: 'Characters', slug:'characters'}, { name: 'Weapons', slug: 'weapons'}]
const Header = () => {

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className='border-b w-full inline-block border-gray-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              元神
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