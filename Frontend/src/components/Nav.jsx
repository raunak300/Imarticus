import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import newILLogo from "../assets/newIL12.svg";

const Nav = () => {
  return (
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="nav-link">I-ACE</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
