import React,{useState} from "react";

const ReactUpdaterFunctions = () =>{
    const [count, setCount] = useState(0)
    
    // with updater function allows you to update based on the previous state using the arrow function

    const increment = ()=>{
        //i can do like the example below as a simple way
            // setCount(c => c +3)
        // also i can do like this three times to achieve an increament of three in any click;
        //the same way applies fo other functions for decrease 
            setCount(c => c +1 )
            setCount(c => c +1 )
            setCount(c => c +1 )
        }
    const dicrement = ()=>{
        //using this method you can write many codes as possibel but remeber we need to minimize codes as possible 
        // setCount(count => count - 1)
        // setCount(count => count - 1)
        // setCount(count => count - 1)
        //to use less code go this way 
        setCount(c => c -3)
        }
    const reset = ()=>{
            setCount(0)
        }
    return(
          <div className="counter">
        <div className="results">
         <p className="count">{count}</p>
        <button className="increase" onClick={increment}>increase</button>
        <button className="reset"  onClick={reset}>reset</button>
        <button className="decrease" onClick={dicrement}>decrease</button>
        </div>

    </div>
    )
}
export default ReactUpdaterFunctions