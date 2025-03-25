import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'

// import './index.css'
// import App from './App.jsx'

const todoTitle = "call-family";
const todoDesc = "mf ahfkj  fkjdf sdhfjkh shfuh"
const date = new Date()
const dateName = date.getDate()
const monthName = date.getMonth()
const currentYear = date.getFullYear()

// const headingStyle = {
//   backgroundColor: "purple",
//   color : "white",
//   textAlign : "center",
//   padding : "15px"
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <div className='card'>
    <h3 className='cardTitle'>{todoTitle}</h3>
    <p className='cardDesc'>{todoDesc}</p>
    <p className='cardFooter'>{dateName+ "/" +monthName+"/"+currentYear}</p>
    </div>
   </div>
  </StrictMode>,
)