import React from 'react'
import logo from '../../../assets/image/rafsanlogo.jpg'
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const MidHeader = () => {
  return (
    <div className="bg-white shadow-sm py-3">
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <img 
          className="w-[90px] object-contain"  
          src={logo} 
          alt="Logo" 
        />

        {/* Search bar */}
        <div className="flex-1 mx-10">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full py-2 px-4 pl-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Search Icon */}
            <svg 
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-4-4"></path>
              </g>
            </svg>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-8">

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-black transition">
            <FaRegUser className="text-2xl text-gray-700" />
            <div>
              <p className="text-sm font-medium">ACCOUNT</p>
              <p className="text-xs text-gray-500">Log in</p>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-black transition">
            <FaShoppingCart className="text-2xl text-gray-700" />
            <div>
              <p className="text-sm font-medium">CART</p>
              <p className="text-xs text-gray-500">0 items</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MidHeader

















