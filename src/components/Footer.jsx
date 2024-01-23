import React from 'react'
import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className='container mx-auto py-8 w-[88%] lg:grid lg:grid-cols-2 lg:items-center lg:py-14 lg:justify-between'>
        <img src={Logo} alt="Logo" />

        <div className='flex flex-wrap gap-x-20 gap-y-5 mt-5 lg:col-start-1 lg:col-end-2'>
          <div>
            <h4 className='font-bold'>Product</h4>
            <ul className='text-gray'>
              <li className='mb-1'>Homepage</li>
              <li className='mb-1'>Pricing</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold'>Help</h4>
            <ul className='text-gray'>
              <li className='mb-1'>Live Chat</li>
              <li className='mb-1'>Send Email</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold'>Company</h4>
            <ul className='text-gray'>
              <li className='mb-1'>About</li>
              <li className='mb-1'>Customers</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className='font-bold mt-8'>Try TweetNow</h4>
          
          <div className="relative flex items-center mt-2">
            <button className="p-3 bg-blue-200 mr-2 hover:bg-blue-100 transition-all rounded text-white font-bold absolute right-0 md:right-1/2 focus:outline-none">
              Start Scheduling
            </button>

            <input
              type="text"
              placeholder='Email Address'
              className="block w-full mt-2 py-5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 md:w-1/2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600  dark:focus:border-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
    </footer>
  )
}

export default Footer
