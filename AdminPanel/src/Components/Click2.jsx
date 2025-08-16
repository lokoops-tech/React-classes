import { useState } from "react";




const Click2 = ()=>{

const [user, setUser] = useState({ email: "", password: "" });
const [userList, setUserList] = useState([])

const handleEmail = (e)=>{
setUser(prevUser=>({...prevUser,email:e.target.value}))
}
const handlePassword = (e)=>{
setUser(prevUser=>({...prevUser, password:e.target.value}))
}

const handleLogin = (e)=>{
    e. preventDefault()
    // validate both email and password
    if (!user.email.trim() || !user.password.trim()) {
        alert("please fill the email and paswword field");
        return;
        
    }
    // now lets create a function that will allow us create a new user
    const newUser ={
        email: user.email,
        password: user.password,
        id:Date.now()
    };
    setUserList(prevList=> [...prevList, newUser])
    //a function to clear the form after a form submission
    setUser({email:"", password:""});
    // to check if we have sent users to correctly lets put a console
    console.log("new user has been added", newUser)
}
const remove =(index)=>{
    setUserList(prevList => prevList.filter((_, i ) => i !== index))

}

    return(
        <div className="login-conatiner">
            <div className="user-form">
            <h1>Welcome Back User!!!!!</h1>
            <h3>LogIn</h3>
            <div className="user-input">
            <label htmlFor="input">Email Address</label>
            <input onChange={handleEmail} value={user.email} type="text" placeholder="type your email..." />
            <label htmlFor="input">Password</label>
            <input onChange={handlePassword} value={user.password} type="password" placeholder="type Password...." />
            <button onClick={handleLogin}>Login</button>
            </div>
            </div>
            <div className="loggedin-users">
                <h1>Registered Users</h1>
                <div className="users">
                 <ul>
                    {/* FIXED: Now maps over userList and displays user information properly */}
                    {userList.map((userData, index) => (
                        <li key={userData.id || index} onClick={() => remove(index)} style={{marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}>
                            {/* Display both email and password */}
                            <div><strong>Email:</strong> {userData.email}</div>
                            <div><strong>Password:</strong> {userData.password}</div>
                            <span style={{fontSize: '12px', color: 'red', fontStyle: 'italic', cursor:"pointer"}}>
                                (click to remove)
                            </span>
                        </li>
                    ))}
                </ul>
                {/* if there are no users show this message */}
                {userList.length  === 0 &&(
                    <p  style={{color:"red"}}> there are no registered users for now</p>
                )}
                </div>
            </div>
        </div>
        

    )
    

}

export default Click2