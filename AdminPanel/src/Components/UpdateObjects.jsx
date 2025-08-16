import React from "react";
import './UpdateObjects.css'

const UpdateObjects = () =>{

    const User = {
        name:"alex Kosgei",
        Age:24,
        Adress: "38, Tambach",
        Email:"kosgeialex3581@gmail.com",
        Hobby:"codding",
        FevFood:"omena",
        FevQuote:"push your limits and watc the results"
    }
    return(
        <ul className="user-object">
            <li style={{listStyle:"none"}}>
            <ol className="user-details">{User.name}</ol>
            <ol className="user-details">{User.Age}</ol>
            <ol className="user-details">{User.Adress}</ol>
            <ol className="user-details">{User.Email}</ol>
            <ol className="user-details">{User.Hobby}</ol>
            <ol className="user-details">{User.FevFood}</ol>
            <ol className="user-details">{User.FevQuote}</ol>
            </li>
        </ul>
  
    )
}
export default UpdateObjects