import React from 'react'
import HeroSec from './coursecomponents/HeroSec'
import AboutIntructour from './coursecomponents/AboutIntructour'
import Curriculum from './coursecomponents/Curriculum'
import FAQ from './coursecomponents/FAQ'
import Main from './coursecomponents/Main'
import { Link } from "react-router-dom"
import "../styles/herosec.css";
import { CheckCircle } from "lucide-react"; 

const Courses = () => {
  return (
    <div className='courses-page'> {/* Added new wrapper class */}
        
        <div className='textarea'>
            <Link to="/" className='textarea'>Home</Link> / 
            <Link to="/courses" className='textarea'>Courses</Link> / 
            <Link to="/currentCourse" className='textarea'>Current</Link>
        </div>
        
        <HeroSec />
        
        {/* The section with the two detail cards */}
        <div className="course-details">
          <div className="detail-card">
            <h3>Includes</h3>
            <ul>
              <li><CheckCircle className="icon" /> Concept Videos</li>
              <li><CheckCircle className="icon" /> Practice Quizzes</li>
              <li><CheckCircle className="icon" /> Certificate of Completion</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>What will I learn?</h3>
            <ul>
              <li>Introduction to Machine Learning</li>
              <li>Basic Concepts of Machine Learning</li>
              <li>Linear Regression, Polynomial Regression, Logistic Regression</li>
            </ul>
          </div>
        </div>
        
        {/* Sections with IDs for smooth scroll */}
        <div id="description">
          <Main />
        </div>
        
        <div id="curriculum">
          <Curriculum />
        </div>
        
        <div id="instructors">
          <AboutIntructour />
        </div>
        
        <div id="faq">
          <FAQ />
        </div>
    </div>
  )
}

export default Courses
