import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../styles/nav.css";
import newILLogo from "../assets/newIL12.svg";
const Nav2 = () => {
    const Navigate=useNavigate();
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
                       <button
                       onClick={()=>Navigate("/login")}
                       className='btn btn-success'
                       >
                        Login
                       </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav2