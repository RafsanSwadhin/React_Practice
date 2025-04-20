import React from "react";
import Child from "./components/State_Lifting/Child"
function App(){
  const data = "I am from parent"
  const handleChildData = (childData) =>{
    console.log(childData)
  }
  return (
            <div>
              <Child data = {data} onChildData = {handleChildData}/>
            </div>
  )
}

export default App;