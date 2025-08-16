import { useState } from "react";
import './Modal.css'

const Modal= ()=>{
    const [user, setUser]= useState({Name:""})
    const [name, setName] = useState();
    const [error, setErrors]= useState({})
    const [goon, setGoon]= useState(false)
    const [isSubmitting, setIsSubmitting]=useState(false)
//validations form
const ValidationForm = ()=>{
    const newErrors = {};
    if (!user.Name.trim() ) {
        newErrors.Name="Name is required"
        
    }
}

    const handleName = (e)=>{
        setUser(u=>({...u, Name:e.target.value}))
        if (error.Name) {
            setErrors(prev =>({...prev, Name:""}))
            
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!ValidationForm()) {
            return;
            
        }
        setIsSubmitting(true)
        const newUser ={
            Name:user.Name
        }

        setTimeout(()=>{
        setList(u=>({...u, newUser}))
        alert("name already in the input")
    }, 1000)
    }


    
    return(
        <div className="input-container">
            <div className="content-input">
               <h1>Lokoops</h1> 
               <label>Full Name</label>
               <input type="text"
               placeholder="type your Name....."
               onChange={handleName}
               value={user.Name}
               className={`input${error.Name ? "error-input": ""}`}
               />
               {error.Name && <span className="errors-text">{error.Name}</span>}
               
               <p>Name:{user.Name}</p>
               <button 
                onClick={handleSubmit}
                className={`submit-button${isSubmitting ? 'submit-button-disabled':""}`}
                >
             {isSubmitting ? "submitting...." :"submit"}
                </button>
                
            </div>
        <p>Designed By <span>Lokoops</span></p>
        </div>
    )

}
export default Modal