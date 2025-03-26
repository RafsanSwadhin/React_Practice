import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import Card from './Card'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <Card/>
   </div>
  </StrictMode>,
)