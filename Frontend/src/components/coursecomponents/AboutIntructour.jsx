import React from 'react';
import teacherImg from "../../assets/teacher.jpeg"

const AboutInstructor = () => {
  return (
    <div className="instructor-page-wrapper">
      <div className="instructor-card-main">
        <h2 className="instructor-card-title">About Instructors</h2>

        <div className="instructor-details-section">
          
          <div className="instructor-image-wrapper">
            <div className="instructor-profile-pic">
                <img src={teacherImg}  />
            </div>
          </div>
          
          <div className="instructor-text-content">
            <h3 className="instructor-name">Ritesh Singh</h3>
            
            <p className="instructor-bio">
              Ritesh Singh is an **IIT Delhi Graduate** with **8 years of experience** in Web Development and has created more than **15 websites** both for his own entrepreneurial ventures as well as for other companies. With this course, he wants to disseminate this skill of making complex websites in just **30 days** to as many students as possible. So, without a second thought, **invest in yourself** if you want to learn web development.
            </p>

            <p className="instructor-experience-footer">
              With 2 Patents and 4 innovation report, instructor is having **8 Years of Industrial Experience**
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInstructor;