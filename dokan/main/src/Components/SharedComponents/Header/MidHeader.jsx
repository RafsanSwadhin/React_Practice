import React from 'react'
import logo from '../../../assets/image/rafsanlogo.jpg'
import { FaRegUser } from "react-icons/fa";
const MidHeader = () => {
  return (
    <div>
      <div className='flex items-center justify-between container mx-auto px-24' > 
        <img className='w-23'  src={logo} alt="" />
        <div>
          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center gap-2'>
                <FaRegUser className='text-2xl'/>
                <div>
                  <p className='tc text-xl'> ACCOUNT</p>
                  <p className='tc text-xs'>Log in</p>
                </div>

                
          </div>

           <div className='flex items-center gap-2'>
                <FaRegUser className='text-2xl'/>
                <div>
                  <p className='tc text-xl'> Add To Cart</p>
                  <p className='tc text-xs'>Log in</p>
                </div>

                
          </div>

        </div>
      </div>
    </div>
  )
}

export default MidHeader