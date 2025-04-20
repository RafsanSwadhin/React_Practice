import React from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

function App(){

  const handleNewTodo = (newTodo) =>{
    console.log(newTodo)
  }
  return (
            <div>
              <NewTodo onHandleNewTodo={handleNewTodo}/>
            <Todo title="learn react"/>
            </div>
  )
}

export default App;