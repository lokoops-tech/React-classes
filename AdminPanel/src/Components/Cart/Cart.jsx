import { useState } from "react";
// import watch from '../../assets/Watch-2.webp'
import './Cart.css'
const Cart = ()=>{
    const [cartItems, setCartItems]= useState(0);
    const [cartList, setCartList] = useState([]);

    let name= "Casio Classic with a long Lasting Battery,Water Proof";
    let Price= 3000;
    
    //increase cart count
    const increase = ()=>{
        setCartItems(c=>(c+1))

    }
    //ddecrease cart Count
      const decrease = ()=>{
        setCartItems(c =>(c -1))
        
    }
    const handleAdd =(e)=>{
    e.preventDefault();
    if (!cartItems ) {
        alert(`The please select a quantity`)
        return;
        
    }
    else{
        alert("The quantity should be a positive number")
  
    }
  
   setCartList(prevList =>[...prevList, cartItems])
   console.log(`new ${cartItems} items have been added to your cart`)


    }
       const total = ()=>{
        setCartItems(cartItems * Price)
        console.log(Price)
        console.log(cartItems)
        console.log(total)
    }
  
    const remove = (index)=>{
    setCartList(prevUserList =>prevUserList.filter((_, i)=> i !==index))
    }
return(
    <div className="cart-container">
        <div className="content">
            <img src={watch} alt="watch-image" />
            <div className="product-details">
                <h2>{name}</h2>
                <span className="new">Sh{Price}</span>
                <span className="old">Sh5000</span>
            </div>
           
            <p>select Quantity</p>
             <div className="buttons">
              <button onClick={increase}>+</button>
              <p>{cartItems}</p>
              <button onClick={decrease} className="decrease">-</button>
                </div>
            <button onClick={handleAdd}>Add To Cart</button>
          
        </div>
        <div>
        <ul>
            <h1>CartItems</h1>
            {cartList.map((cartItems, index)=>
            <li key={ index} onClick={()=>remove(index)} 
        
            style={{color:"dark", border:"1px solid blue", borderRadius:"10px", 
            padding:"20px", marginTop:"20px", listStyle:"none"}} >
               
                <div>Your Cart Has {cartItems}{name} with a price of Sh <div>{total}</div></div>
               <span style={{color:"blue", textDecoration:"underline", cursor:"pointer"}}> (click here to remove) </span>
                </li>
            )}
           
        </ul>
 {cartList.length === 0 &&(
    <p style={{color:"red"}}>No Items Added to Cart</p>
 )}
 </div>
    </div>
)
}
export default Cart