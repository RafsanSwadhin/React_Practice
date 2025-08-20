import React, { useEffect, useState } from 'react'

const products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json)
        .then(data => setProducts(data))
    },[])
  return (
    <div>products</div>
  )
}

export default products