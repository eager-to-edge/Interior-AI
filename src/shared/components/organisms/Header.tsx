import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-blue-700 text-white py-4 px-72 shadow-md sticky">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          Logo
        </div>
        <div className="flex justify-center gap-6">
          <Link href="#" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">About</Link>
          <Link href="#" className="hover:text-gray-300">Services</Link>
          <Link href="#" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
