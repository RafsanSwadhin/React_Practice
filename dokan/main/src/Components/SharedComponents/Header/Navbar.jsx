import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <div className='bg'>
        <div className='txc flex gap-2 py-2 items-center'>
          <BiCategory></BiCategory>
          <p>All Category</p>
        </div>
      </div>
      <div>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
        <NavLink to="/blog" >Blog</NavLink>

      </div>
    </div>
  )
}

export default Navbar