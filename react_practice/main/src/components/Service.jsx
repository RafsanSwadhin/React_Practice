import React from 'react'
import './Service.css'
const Service = () => {
    function Update() {
        const serviceCompo = document.getElementById('service-component');
        serviceCompo.innerText = 'hello ia '

        
    }
  return (
    <div >
        <h1 id = 'service-component'> Services components..</h1>
        <button onClick= {Update} className='click-btn' >click here</button>
    </div>
  )
}

export default Service