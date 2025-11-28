import React from 'react'
import MidHeader from './MidHeader'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='container'>
<div >
          <TopHeader></TopHeader>
        <MidHeader></MidHeader>
        <Navbar ></Navbar>
</div>
    </div>
  )
}
export default Header