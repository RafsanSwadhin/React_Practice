import React from "react";
import Todos from "./Todos";

const Home=() =>{
    const todos = ["todo1","todo2"]
    return <div>
        <Todos todos = {todos}/>
    </div>
}

export default Home