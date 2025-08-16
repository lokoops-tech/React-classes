import React from "react";
import watch from '../assets/profile_img.svg'
import './ReactCard.css'

const ReactCard = () =>{
return(
    <div className="card">
        <img className="card-img" src={watch} alt="" />
        <h2 className="card-title">Alex Kipkosgei</h2>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur<br/>
        adipisicing elit. Illum quidem molestias aspernatur,<br/>
        fugiat nesciunt neque saepe? Numquam, <br/>
        hic aut eligendi corporis, <br/>
        natus dicta eius officia dolorum iste, nam eaque minima.</p>
        <button className="call-btn">call me now</button>
        
    </div>
)
}

export default ReactCard