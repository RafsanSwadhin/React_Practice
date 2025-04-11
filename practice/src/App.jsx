import React from "react"
import Card from "./components/Card"
import Data from "./data.json"
function App(){
  let items = []
  for ( let x = 0 ; x<Data.length; x++){
    items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>)
  }

  return <div>
     <h1 className='headingStyle largeText'>Todo App</h1>
     {items}
    {/* <Card titleText = {Data[0].title} descText ={Data[0].desc}/>
    <Card titleText = {Data[1].title} descText ={Data[1].desc}/>
    <Card titleText = {Data[2].title} descText ={Data[2].desc}/>
    <Card titleText = {Data[3].title} descText ={Data[3].desc}/> */}

  </div>

}

export default App