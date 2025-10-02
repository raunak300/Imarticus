import React from "react";
import img from "../assets/course-img.webp"
import { useNavigate } from "react-router-dom";
const Coursesell = () => {
    const navigate=useNavigate()
  const courses = [
    {
      title: "Certified Investment Banking  Professional",
      duration: "3 or 6 Months | Classroom or Live Online Training",
      assurance: "Guaranteed 100% Job Assurance",
      extra: "1200+ Successful Batches",
      placements: "36,000+ Candidates Placed",
      companies: ["J.P.Morgan", "Goldman Sachs", "Nomura"],
      image: {img},
    },
    {
      title: "Postgraduate Financial Analysis Program",
      duration: "4 or 8 Months | Classroom or Online Training",
      assurance: "100% Job Assurance with Top Recruiters",
      extra: "Up to ₹18 LPA Highest Package",
      placements: "4,500+ Career Transitions",
      companies: ["Bank of America", "BNP Paribas", "Capgemini"],
      image:  {img},
    },
    {
      title: "Postgraduate Program in Banking and Finance",
      duration: "3 Months | Classroom Training",
      assurance: "100% Job Assurance with Leading Banks",
      extra: "10,000+ Learners Transformed",
      placements: "85% Consistent Placement Record",
      companies: ["Genpact", "HDFC Bank", "Kotak"],
      image:  {img},
    },
  ];

  return (
    <div className="coursesell-container">
      <h2 className="coursesell-title">🚀 Job Assured Programs</h2>
      <p className="coursesell-subtitle">
        Upgrade your career with our industry-recognized programs designed in
        collaboration with global finance leaders. Hands-on learning, mentorship,
        and guaranteed job placement with top companies.
      </p>

      <div className="coursesell-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={img}
              alt={course.title}
              className="course-image"
            />
            <div className="course-content">
              <span className="course-duration">{course.duration}</span>
              <h3 className="course-name">{course.title}</h3>

              <ul className="course-details">
                <li>✨ {course.assurance}</li>
                <hr />
                <li>📈 {course.extra}</li>
              </ul>

              <p className="course-placements">{course.placements}</p>

              <div className="course-companies">
                {course.companies.map((c, i) => (
                  <span key={i} className="company-tag">{c}</span>
                ))}
              </div>

              <div className="course-buttons">
                <button className="btn-brochure">📘 Download Brochure</button>
                <button className="btn-knowmore"
                onClick={()=>navigate(`/course/${course.title}`)}
                >Know More →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursesell;
