import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCreditCard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header" id='home'>
        <div className="header-content">
          <div className="description">
            <h1>EduConnect</h1>
            <p>Your gateway to the world of knowledge. Explore our wide range of courses to enhance your skills and achieve your goals.</p>
            <Link to="/courses" className="btn">Browse All Courses</Link>
          </div>
        </div>
      </header>
      <section className="benefits">
        <div className="benefit-card">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="card-icon" />
          <h2>EduConnect Benefits</h2>
          <p>Discover a range of benefits that come with our educational platform, including personalized learning paths, expert instructors, and flexible scheduling.</p>
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon icon={faCreditCard} size="2x" className="card-icon" />
          <h2>PrePaid Cards</h2>
          <p>Enjoy the convenience of prepaid cards for course payments. Manage your budget easily and access our premium content with ease.</p>
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon icon={faBook} size="2x" className="card-icon" />
          <h2>A Complete Learning System</h2>
          <p>Our platform provides a complete learning ecosystem, integrating courses, assessments, and community support to ensure your success.</p>
        </div>
      </section>
    </div>
  );
};

export default Header;
