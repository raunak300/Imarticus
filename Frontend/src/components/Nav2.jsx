import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../styles/nav.css";
import newILLogo from "../assets/newIL12.svg";

const Nav2 = () => {
    const Navigate = useNavigate();

    // 1. Create the asynchronous logout function
    const handleLogout = async () => {
        try {
            // Call the backend logout endpoint
            const res = await fetch("https://imarticus.onrender.com/api/auth/logout", {
                method: "POST",
                // Crucial: Includes the cookie/token needed for the server to log the user out
                credentials: "include", 
            });

            if (res.status === 200) {
                // 2. Redirect to the login page on success
                Navigate("/login", { replace: true });
                console.log("Logged out successfully");
            } else {
                // Handle cases where the server returns a non-200 but not an error
                console.error("Logout failed with status:", res.status);
                // Optionally navigate anyway, as the user is likely already logged out on the frontend
                Navigate("/login", { replace: true });
            }
        } catch (err) {
            // Handle network errors or issues reaching the server
            console.error("Logout error:", err);
            // In a real app, you'd show a notification here
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white custom-nav">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand d-flex align-items-center">
                        <img
                            src={newILLogo}
                            alt="Logo"
                            className="logo"
                        />
                        <span className="brand-text">IMARTICUS LEARNING</span>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end">
                        {/* 3. Attach the new handler to the button */}
                        <button
                            onClick={handleLogout}
                            // Changed class name for a common 'danger/red' logout look
                            className='btn btn-danger'
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav2;