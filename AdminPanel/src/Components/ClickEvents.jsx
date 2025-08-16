import React, { useState } from "react";
import profile from '../assets/laptop-1.webp'
import profile2 from '../assets/camera-3.webp'

const ClickEvents = () =>{
    const [profile, setProfile] = useState()
//lets use an image
const handleClick = (e)=> { e.target.imageChange={profile2}.display="flex"
console.log(profile2)}

    // let count = 0;
    // const handleClick = (e) =>
    //     e.target.textContent="creating user.....";
  
 
    // const handleClick2 = (name) =>{
    //   if (count <3 ) {
    //     count ++;
    //     console.log(`${name} clicked me ${count} times`)
    //   }
    //   else{
    //     console.log(`${name} stop clicking me !!`)
    //   }
    // }
    return(

        // <div className="button"> 
        // <h3>create account </h3>
        // <button className="btn" onClick={ (e) => handleClick(e)}>signUp</button>
      

        // </div>
        <div>
            <img src={profile} alt="alex profile" onClick={(e)=> handleClick(e)}/>
        </div>
    )
}
export default ClickEvents