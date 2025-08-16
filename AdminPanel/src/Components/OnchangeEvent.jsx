import React, {useState} from "react";

const OnchangeEventsHandler= () =>{
    const [name, setName] = useState("Guest");
    const [payment,  setPayment] = useState("select payment option");
    const [delivery, setDelivery] = useState("Choose Delivery Option")

    const nameHandler = (e) =>{
        setName(e.target.value)
    }
    const handlePaymentChange = (e) =>{
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) =>{
        setDelivery(e.target.value)
    }
    return(
        <>
        <div className="onchange">
            <input name="name-area" type="text" value={name} onChange={nameHandler} />
            <p>Name: <span className="name">{name}</span> </p>
             <h1>Please{name} choose Your Payment Option</h1>
    <span>payment section</span>
     <select name="payment" value={payment} onChange={handlePaymentChange}>
    <option value="select payment option">select payment option</option>
     <option value="MasterCard">MaterCard</option>
    <option value="paypal">paypal</option>
    <option value="visaCard">VisaCard</option>
    <option value="debit Card">DebitCard</option>
    <option value="credit Card">Credit</option>
       </select>
       <p>Payment:{payment}</p>
        {/* now let's use radio button to demonstrate how the onchangeHandler works */}
        <h1> Now {name}Select Shipping option</h1>
        <label>
        <input name="pickup" type="radio" value="Pick Up"  checked={delivery === "Pick Up"}onChange={handleShippingChange} />
        pick Up 
       </label>
       <br />
         <label>
        <input name="delivery" type="radio" value="Delivery" checked={delivery === "Delivery"} onChange={handleShippingChange} />
        Delivery
       </label>
       <p>Shipping Cost:{delivery}</p>
        </div>
      
    

        </>
    )
}
export default OnchangeEventsHandler