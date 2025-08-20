import './App.css'
import React, { useEffect, useState } from 'react'
import SingleData from './components/SingleData';

const App = () => {
  const [allData,setAllData]=useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  },[])
  return (
    <div>
        <h1>Data:{allData.length}</h1>
        {
          allData.map(singleData => <SingleData
          key = {singleData.id}
          singleData = {singleData}
          ></SingleData>)
        }

    </div>
  )
}

export default App


