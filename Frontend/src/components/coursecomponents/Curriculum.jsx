import React from 'react';

const Curriculum = () => {
  // Curriculum items data
  const curriculumItems = [
    "Introduction to Machine Learning",
    "Concepts of Machine Learning",
    "Application of Machine Learning",
    "Neural Network and Deep Learning",
    "Application of Deep Learning",
  ];

  return (
    <div className="curriculum-container">
      <div className="curriculum-content-box">
        <h2 className="curriculum-title">Curriculum</h2>
        <div className="curriculum-list-wrapper">
          {curriculumItems.map((item, index) => (
            <div key={index} className="curriculum-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Curriculum;