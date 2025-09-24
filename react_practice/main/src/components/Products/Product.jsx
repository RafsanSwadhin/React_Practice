import React, { useEffect, useState } from 'react'
import Product from '../Product/Productss'
const Product = () => {
  const [products, setProducts] = useState([])
    useEffect(() => {
      fetch('fakeData.json')
      .then(res=> res.json())
      .then(data => console.log(data))
    },[])
  return (
    <div>Product
    {
      products.map(product => <Product
      key = {product.id}
      product   = {product}
      ></Product> )
    }
    </div>
  )
}

export default Product