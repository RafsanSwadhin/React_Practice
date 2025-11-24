import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/SharedComponents/Header/Header'
const Root = () => {
  return (
    <div>
        <Header></Header>
        <h1>this is Root layout</h1>
        <Outlet></Outlet>
    </div>
    
  )
}

export default Root