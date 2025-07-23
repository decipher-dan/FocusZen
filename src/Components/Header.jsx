import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const linkLabel = ['home', 'features', 'testimonials', 'get started'];
  const [click, setClick] = useState(false); // state to toggle menu

  // Function to toggle mobile menu visibility
  const changeIcon = () => {
    setClick(prev => !prev);
  };

  return (
    <>
      <header>
        <nav className='absolute top-0 left-0 w-full z-20 flex justify-between px-7 py-4 text-lg capitalize bg-gradient-to-b from-[#123456] to-transparent backdrop-blur-sm items-center text-[#1E293B]'>
          {/* Left section: Logo */}
          <span className='font-black hover:text-[#123445] cursor-pointer'>
            focusZen
          </span>

          {/* Middle section: Desktop navigation */}
          <ul className='md:flex flex-row gap-5 hidden'>
            {linkLabel.map((link, index) => (
              <li
                key={index}
                className='hover:bg-[#9191b7b5] rounded-2xl p-1 cursor-pointer'
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Right section: Mobile icon and dropdown */}
          <div className='relative md:hidden'>
            {/* Toggle button */}
            <span
              onClick={changeIcon}
              className='transition-transform duration-300 ease-in-out cursor-pointer'
            >
              {click ? <X /> : <Menu />}
            </span>

            {/* Mobile dropdown menu - shown only when click is true */}
           {click && (
            <ul className='absolute right-0 top-full mt-2 bg-white text-black shadow-lg p-4 rounded-xl w-64 max-w-[90vw] overflow-hidden z-50'>
                {linkLabel.map((link, index) => (
                <li
                    key={index}
                    className='hover:bg-gray-200 rounded-md px-2 py-1 cursor-pointer'
                >
                    {link}
                </li>
                ))}
            </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
