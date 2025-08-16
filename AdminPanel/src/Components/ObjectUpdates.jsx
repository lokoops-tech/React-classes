import React, {useState} from "react";


const ObjectsUpdates = () =>{

    const [car, setCar] = useState({year:2024, 
                                 make: "Toyota", 
                                 Model:"Mazda Cx4"});
// for safe updates we will use updater functions
    const handleYearChange = (e) =>{
        setCar(c => ({...c, year: e.target.value}))

    } 
    
    const handleMakeChange = (e) =>{
        setCar(c => ({...c, make: e.target.value}))
        
    }  
    
    const handleModelChange = (e) =>{
        setCar(c =>({...c, Model: e.target.value}))
        
    }                       
     return(
 <div className="update">
    <h1>Learning How to Update Objects</h1>
    <p>Your Car is {car.year} {car.make} {car.Model} </p>
    <div className="car">
        <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
        <input type="text" value={car.make} onChange={handleMakeChange} /><br/>
        <input type="text" value={car.Model} onChange={handleModelChange} /><br/>

    </div>
 
 </div>
     )
}
export default ObjectsUpdates