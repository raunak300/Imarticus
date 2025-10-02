import React, { useState } from 'react';

const Main = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveTab(sectionId);
    }
  };

  return (
    <div className="main-container">
      <div className="content-box">
        
        {/* Navigation Tabs */}
        <nav className="tab-navigation">
          <div
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleScroll("description")}
          >
            Description
          </div>
          <div
            className={`tab ${activeTab === "curriculum" ? "active" : ""}`}
            onClick={() => handleScroll("curriculum")}
          >
            Curriculum
          </div>
          <div
            className={`tab ${activeTab === "instructors" ? "active" : ""}`}
            onClick={() => handleScroll("instructors")}
          >
            Instructors
          </div>
          <div
            className={`tab ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => handleScroll("faq")}
          >
            FAQ
          </div>
        </nav>

        {/* Description Section Content */}
        <div className="description-section">
          <h2 className="section-title">Description</h2>
          
          <p className="intro-text">
            <strong>Machine learning</strong> is a field of computer science that uses statistical techniques 
            to give computer systems the ability to "learn" with data, without being explicitly programmed.
          </p>

          <p className="course-elements-text">
            The course of Introduction to Machine Learning is a free online certification course. 
            The important elements of the course are:
          </p>
          <ul className="course-elements-list">
            <li>Concept Videos</li>
            <li>Quizzes</li>
            <li>Certification</li>
            <li>Discussion and Mentorship</li>
          </ul>

          <p className="topics-text">
            The topics covered in the Introduction to Machine Learning Course are:
          </p>
          <ol className="topics-list">
            <li>Introduction</li>
            <li>Project: Cost of Flats</li>
            <li>Linear Regression</li>
            <li>Polymer Regression</li>
            <li>Project: Spam Email Filter and App Recommendation</li>
            <li>Neural Network</li>
            <li>Deep Learning</li>
          </ol>

          <p className="duration-text">
            The excellent introduction course is a <strong>75 mins</strong> course which will give you 
            an overview of the most trending topic, <strong>Machine Learning and Artificial Intelligence</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
