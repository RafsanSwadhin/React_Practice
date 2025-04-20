import React, { use, useState } from "react";

export default function Form(){
    
    const [user,setUser] = useState({name:'',email:'',password:''})
    const {name,email,password} =user
    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        console.log("Form is submitted")
        console.log(user)
        e.preventDefault() //bcz of this fun , forms items will not be removed
         
    }
    return <div>
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} name="name" id="name" onChange={handleChange} required />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} name="email" id="email" onChange={handleChange} required />
            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} name="password" id="password" onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
}