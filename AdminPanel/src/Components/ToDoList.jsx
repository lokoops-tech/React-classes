import React from "react";


const ToDoList = (props) =>{
    ToDoList.defaultProps ={
        category:"category",
        item:[]
    } 
        //for ascending order
        //fruits.sort((a, b)=> a.name.localeCompare(b.name))
        //for discending order
        // fruits.sort((a, b)=> b.name.localeCompare(a.name))
        //for calories
    //  fruits.sort((a, b) => a.calories - b.calories);//numeric ascending order
    //discending order
    //fruits.sort((a, b)=> b.calories - a.calories)
  const ItemList = props.items;
  const category = props.category;

    // const localeFruits = fruits.filter(fruit => fruit.calories <100) // to show fruits with low calories 
      //const highCaloriesFruits = fruits.filter(fruit => fruit.calories >= 100) // show fruits with big number of calories
    
     const ListItems = ItemList.map(item=><li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b> </li>) 
   


    
    return(
        <div className="fruts"> 
        <h3>{category}</h3>
       <ol>{ListItems}</ol>

   
        </div>
    )
   
}
 

export default ToDoList