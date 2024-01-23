import React, { useState } from 'react';
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='container mx-auto py-8 w-[88%]'>
      <nav className="relative bg-white dark:bg-gray-800">
        <div className="container py-3 mx-auto md:flex">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="Logo" />

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
          >
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <Link to='/' className="px-2.5 py-2 font-[400] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:font-[500] dark:hover:bg-gray-700 md:mx-2">
                Features
              </Link>
              <Link to='/pricing' className="px-2.5 py-2 font-[400] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:font-[500] dark:hover:bg-gray-700 md:mx-2">
                Pricing
              </Link>
            </div>

            <Button
              content='Start Scheduling'
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
