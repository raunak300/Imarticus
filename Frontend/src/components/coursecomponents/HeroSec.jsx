import React from "react";
import studentimg from "../../assets/std.png";
import "../../styles/herosec.css";
import { CheckCircle } from "lucide-react"; 

const HeroSec = () => {
  return (
    <div className="hero-container">
      <img src={studentimg} alt="student" className="hero-img" />
      <div className="hero-content">
        <h1>Introduction to Machine Learning</h1>
        <p className="subtitle">Free certification course of Machine Learning</p>
        <p><b>Created By:</b> Ritesh Singh</p>
        <p><b>Course Duration:</b> 2 Years</p>
        <h2 className="price">Free</h2>
        <button className="enroll-btn">Enroll Now</button>
      </div>
      
    </div>
  );
};

export default HeroSec;
