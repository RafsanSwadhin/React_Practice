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

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div>
    <h1>Todo App</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <p>{dateName+ "/" +monthName+"/"+currentYear}</p>
   </div>
  </StrictMode>,
)
