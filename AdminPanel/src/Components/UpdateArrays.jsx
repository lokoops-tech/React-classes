import React, {useState}from "react";

const ArraysUpdate = () =>{
    const [fruits, setFruits] = useState([])

    const remove = (index)=>{
    setFruits(fruits.filter((_, i)=>(i !==index)))
    }
    const Add = (e)=>{
    const newFood = document.getElementById("fruit").value;
                   document.getElementById("fruit").value= "";
    setFruits(f => [...f, newFood])
    }
    return(
        <div className="fruits">
            <h1>Fruits List</h1>
            <ul>
              {fruits.map((fruits, index) =>
            <li  key={index} onClick={()=>remove(index)}>
             {fruits}
            </li>)}
            </ul>
            <input type="text" id="fruit" placeholder="type fruit name" />
            <button onClick={Add}>Add Fruit</button>
          



        </div>
    )
}
export default ArraysUpdate