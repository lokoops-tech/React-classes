import React, {useState} from "react"
const Counter = ()=>{
const [count, setCount] = useState(0)

// to increase Count
const increment = ()=>{
        setCount(count + 1)
    }

    //to decrease count
const dicrement = ()=>{
        setCount(count - 1)
    }
    // To reset count to 0
const reset = ()=>{
        setCount(0)
    }



 return(
    <>
    
    <div className="counter">
 
        <div className="results">
         <p className="count">{count}</p>
        <button id="increase-btn" className="increase" onClick={increment}>increase</button>
        <button className="reset"  onClick={reset}>reset</button>
        <button className="decrease" onClick={dicrement}>decrease</button>
        </div>

    </div>
    </>

)

}



export default Counter