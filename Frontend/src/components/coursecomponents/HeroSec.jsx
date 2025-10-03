import React from "react";
import studentimg from "../../assets/std.png";
import "../../styles/herosec.css";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; 

const HeroSec = () => {
  const navigate = useNavigate();

  const handleEnroll = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/check", {
        method: "GET",
        credentials: "include", // important if using cookies
      });

      if (res.status === 200) {
        // ✅ user logged in → go to course video page
        navigate("/course/introduction-to-machine-learning/video");
      } else {
        // ❌ not logged in → go to login
        navigate("/login");
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      navigate("/login");
    }
  };

  return (
    <div className="hero-container">
      <img src={studentimg} alt="student" className="hero-img" />
      <div className="hero-content">
        <h1>Introduction to Machine Learning</h1>
        <p className="subtitle">Free certification course of Machine Learning</p>
        <p><b>Created By:</b> Ritesh Singh</p>
        <p><b>Course Duration:</b> 2 Years</p>
        <h2 className="price">Free</h2>
        <button className="enroll-btn" onClick={handleEnroll}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default HeroSec;
