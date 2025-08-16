import React from "react";
import { useState } from "react";

const ReactUsestate = () =>{
    const [name, setName] = useState()
    const [age, setAge] = useState(0)
    const [emplyoed, setEmployed] = useState(false)

    const updateName = ()=>{
      setName("Alex Kipkosgei")
    }
    const updateAge = ()=>{
        setAge (age + 1)
    }
    const employmentStatus = () =>{
        setEmployed(!emplyoed)
    }
    return(
        <div>
     <p>Name:{name}</p>
     <button onClick={updateName}>setName</button>
           
     <p>Name:{age}</p>
     <button onClick={updateAge}>setName</button>
        <p>IsEmployed:{emplyoed ? "yes": "No"}</p>
        <button onClick={employmentStatus}>check Status</button>
        </div>
        
    )
}
export default ReactUsestate