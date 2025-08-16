import { useState } from "react"

const Click = () => {
    // FIXED: Changed from array to object for user state
    // Original had [{email:""}, {password:""}] which is an array of two separate objects
    // This should be a single object with both email and password properties
    const [user, setUser] = useState({ email: "", password: "" });
    
    // FIXED: Added separate state for storing list of users
    // This maintains the list of logged-in users separately from the current form data
    const [userList, setUserList] = useState([]);

    // REMOVED: newUser function was problematic
    // It was trying to add the function itself to the array instead of user data
    // This functionality is now properly handled in handleLogin

    // FIXED: handleEmail function now works with object state
    // Uses object spread syntax to update only the email property
    // Preserves the password value while updating email
    const handleEmail = (e) => {
        // Update the email property of the user object
        // Spread operator (...user) keeps existing properties intact
        setUser(prevUser => ({ ...prevUser, email: e.target.value }));
    }
    
    // FIXED: handlePassword function now works with object state  
    // Uses object spread syntax to update only the password property
    // Preserves the email value while updating password
    const handlePassword = (e) => {
        // Update the password property of the user object
        // Spread operator (...user) keeps existing properties intact
        setUser(prevUser => ({ ...prevUser, password: e.target.value }));
    }
    
    // COMPLETELY FIXED: handleLogin function
    // Removed DOM manipulation and fixed the logic
    const handleLogin = (e) => {
        // Prevent form submission if this were in a form
        e.preventDefault();
        
        // Validate that both email and password are provided
        if (!user.email.trim() || !user.password.trim()) {
            alert("Please enter both email and password");
            return;
        }
        
        // Create a user object with current form data
        const newUser = {
            email: user.email,
            password: user.password,
            id: Date.now() // Simple ID generation for demo purposes
        };
        
        // Add the new user to the userList array
        setUserList(prevList => [...prevList, newUser]);
        
        // Clear the form after successful login
        setUser({ email: "", password: "" });
        
        // Log the new user for debugging
        console.log("New user added:", newUser);
    }
    
    // FIXED: remove function now uses correct state variable
    // Uses userList instead of user, and properly filters by index
    const remove = (index) => {
        // Filter out the user at the specified index
        // Keep all users except the one at the clicked index
        setUserList(prevList => prevList.filter((_, i) => i !== index));
    }

    return (
        <div className="login">
            {/* Login form section */}
            <div className="login-area">
                <h1>Welcome Back User!!</h1>
                <h1>Login</h1>
                
                {/* Email input field */}
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    onChange={handleEmail} 
                    type="email" // Changed to email type for better validation
                    placeholder="Type Email address here.." 
                    value={user.email} // Now correctly references user.email
                />
                
                {/* Password input field */}
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    type="password" 
                    onChange={handlePassword} 
                    value={user.password} // Now correctly references user.password
                    placeholder="Enter your password...." 
                />
                
                {/* Login button - FIXED: Removed id, it's not needed */}
                <button 
                    onClick={handleLogin} 
                    className="login-btn"
                    type="button" // Explicitly set type to prevent form submission
                >
                    LogIn
                </button>
            </div>
            
            {/* User list section - displays all logged-in users */}
            <div className="user-list">
                <h2>Logged Users:</h2>
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
                {/* Show message if no users are logged in */}
                {userList.length === 0 && (
                    <p style={{fontStyle: 'italic', color: '#666'}}>
                        No users logged in yet
                    </p>
                )}
            </div>
        </div>
    )
}

export default Click