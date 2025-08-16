import React from "react";

const ConditionalRender = (props)=>{

    //   if (props.isLoggedIn) {
    //     return <h2>welcome {props.userName}</h2>
        
    //   }
    //   else{
    //     return <h2>please LogIn to view the details</h2>
    //   }

    //now lets use ternary operator for this case
    return(props.isLoggedIn ? <h2 className="true">welcome{props.userName}</h2> :
         <h2 className="false">please logIn to view the content</h2>)
    
 
}
export default ConditionalRender