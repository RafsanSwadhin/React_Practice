import React from 'react'
const dynamic_style = {
    border : '2px solid red',
    padding : '50px 50px',
    background : 'aqua',
    margin : '10px'
}
const Dynamic = (props) => {

    
  return (
    <div   style={dynamic_style}    >
        <h1>Dynamic data </h1>
        <h2>name:{props.name}</h2>
    </div>
  )
}

export default Dynamic