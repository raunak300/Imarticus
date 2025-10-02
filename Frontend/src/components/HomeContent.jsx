import React from 'react';
import '../styles/HomeContent.css';
import google from '../assets/google.webp'
import facebook from '../assets/facebook.png'
import Trustpilot from '../assets/TrustPilot.png'
import CourseReport from '../assets/CourseReport.png'
import Shiksha from '../assets/Shiksha.jpg'
import { useNavigate } from 'react-router-dom';

const RatingBlock = ({ score, source, logo }) => {
    return (
        <div className="rating-block">
            <img src={logo} alt={source} className="rating-logo" />
            <div className="rating-info">
                <span className="rating-score">{score}</span>
                <span className="rating-source">{source}</span>
            </div>
        </div>
    );
};

const HomeContent = () => {
    const navigate=useNavigate()
    const doMove=()=>{
        navigate("/all-course")
    }

    return (
        <div className="home-content-page">
            <div className="home-content-inner">
                <div className="hero-section">

                    {/* Left side */}
                    <div className="hero-left">
                        <h1 className="hero-title">
                            <span className="hero-title-green">Real Learning</span>
                            that delivers your career goals
                        </h1>

                        <p className="hero-subtitle">
                            Unmatched Outcomes from job-ready, certification, and executive programs
                        </p>

                        <button className="explore-button"
                        onClick={doMove}
                        >
                            Explore Our Programs →
                        </button>
                    </div>
                    <div className="hero-right">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">10 Lakh+</span>
                                <span className="stat-label">Careers Transformed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">#1 in</span>
                                <span className="stat-label">Job-Ready Programs</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3500+</span>
                                <span className="stat-label">Hiring Partners</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3X</span>
                                <span className="stat-label">Salary Growth</span>
                            </div>
                        </div>

                        <div className="ratings-section">
                            <RatingBlock score="4.7" source="Google" logo={google} />
                            <RatingBlock score="4.5" source="Facebook" logo={facebook} />
                            <RatingBlock score="4.5" source="Trustpilot" logo={Trustpilot} />
                            <RatingBlock score="4.6" source="CourseReport" logo={CourseReport} />
                            <RatingBlock score="4.4" source="Shiksha" logo={Shiksha} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeContent;

