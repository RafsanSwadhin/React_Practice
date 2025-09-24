import React from 'react'

const Product = ({product}) => {

      const {name , roll } = product
  return (
    <div>
      <h1>{name}</h1>
      <p>{roll}</p>
    </div>
  )
}

export default Product