import React from "react"
import UpdateObjects from "./Components/UpdateObjects"
import ReactCard from "./Components/ReactCard"
import Students from "./Components/Props"
import ConditionalRender from "./Components/conditionalRender"
import ToDoList from "./Components/ToDoList"
import ClickEvents from "./Components/ClickEvents"

import ReactUsestate from "./Components/UseStateHook"
import Counter from "./Counter"
import OnchangeEventsHandler from "./Components/OnchangeEvent"
import ColorPicker from "./Components/ColorPicker"
import ReactUpdaterFunctions from "./Components/ReactUpdaterFunction"
import ObjectsUpdates from "./Components/ObjectUpdates"
import ArraysUpdate from "./Components/UpdateArrays"
import Click2 from "./Components/Click2"
import Click from './Components/Click'
import Cart from "./Components/Cart/Cart"
import Chan from "./Components/Chan/Chan"
import Modal from "./Components/Modal/Modal"
const App = () => {
    //  const fruits = 
    //     [{id:1, name:"apple", calories:103},
    //      {id:2, name:"Mango", calories:90},
    //      {id:3, name:"Ovacado", calories:106},
    //      {id:4, name:"Pineapple", calories:120},
    //      {id:5, name:"Orange", calories:200},
    //     ]
    //   const vegetables = 
    //     [{id:6, name:"Kales", calories:103},
    //      {id:7, name:"Tomato", calories:90},
    //      {id:8, name:"Carrots", calories:106},
    //      {id:9, name:"Onions", calories:120},
    //      {id:9, name:"Broccoli", calories:200},
    //     ]
  return(
    <>
   {/* <UpdateObjects/> */}
   {/* <ReactCard/> */}
   {/* <Students name ="Alex Kipkosgei" age={23} isMarried = {false} /> */}
   {/* <ConditionalRender isLoggedIn ={false} userName="Alex Kipkosgei"/> */}
   {/* to do list data */}
   {/* <ToDoList items={fruits} category="fruits"/> 
  <ToDoList Vegetable={vegetables}  category="vegetables"/>  */}
  {/* <ClickEvents/> */}
  
  {/* <ReactUsestate/> */}
  {/* <Counter/> */}
  {/* <OnchangeEventsHandler/> */}
  {/* <ColorPicker/> */}
  {/* <ReactUpdaterFunctions/> */}
  {/* <ObjectsUpdates/> */}
  {/* <ArraysUpdate/> */}
  {/* <Click/> */}
  {/* <Click2/> */}
  {/* <Cart/> */}
  <Chan/>
  {/* <Modal/> */}
    </>
  )
}
export default App