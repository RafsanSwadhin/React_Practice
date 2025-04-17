import React, { useState } from "react";

export default function Form(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log("Form is submitted")
        console.log(name,email,password)
        e.preventDefault() //bcz of this fun , forms items will not be removed
         
    }
    return <div>
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} name="name" id="name" onChange={handleNameChange} required />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} name="email" id="email" onChange={handleEmailChange} required />
            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} name="password" id="password" onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
}