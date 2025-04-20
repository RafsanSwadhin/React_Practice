import React from "react";


const NewTodo =(props)=>{
    props.onHandleNewTodo({title:"I am new todo"})
    return (
        <div>
            <h1>Mew Todo</h1>
        </div>
    )
}

export default NewTodo 