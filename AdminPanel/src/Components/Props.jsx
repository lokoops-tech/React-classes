import React from "react";
import './Props.css'
import Student from "../Students";


const Students = (props)=>{
    return(
        <div className="students">
            <p>Name: {props.Student.fullName}</p>
            <p>Age: {props.age}</p>
            <p>MaritalStatus: {props.isMarried ? "yes Married" : " not Married"}</p>
        </div>
    )
    
}
export default Students