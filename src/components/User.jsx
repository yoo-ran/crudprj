// src/components/User.jsx
import { useState } from "react";
import Edit from "./Edit";
import Logout from './Logout';

const User = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is initially logged in

    const handleLogout = () => {
        // Perform any necessary cleanup tasks here, such as updating state or clearing user data
        setIsLoggedIn(false); // Update the isLoggedIn state to reflect that the user is logged out
    };


    return (
        <div>
            <h1>Welcome, {user.fname}</h1>
            {/* Display user data */}
            <Edit user={user} setUser={setUser} />
            <Logout onLogout={handleLogout} />
        </div>
    );
};

export default User;
