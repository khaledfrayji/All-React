import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalculator, faAtom, faBookOpen, faFlask, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, icon: faCalculator, title: 'Mathematics', instructor: 'John Doe', hours: '40', buttonLabel: 'Enroll' },
  { id: 2, icon: faAtom, title: 'Physics', instructor: 'Jane Smith', hours: '35', buttonLabel: 'Enroll' },
  { id: 3, icon: faFlask, title: 'Chemistry', instructor: 'Emily Johnson', hours: '45', buttonLabel: 'Enroll' },
  { id: 4, icon: faBookOpen, title: 'English', instructor: 'Michael Brown', hours: '30', buttonLabel: 'Enroll' },
  { id: 5, icon: faLanguage, title: 'Spanish', instructor: 'Sarah Davis', hours: '25', buttonLabel: 'Enroll' },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="left-section">
        <div className="description">
          <h2>Prepaid Cards</h2>
          <p>
            EduConnect offers different types of prepaid cards depending on the grade. The student may choose to buy the type corresponding to the required grade.
          </p>
          <p>
            You may also pay in 3 different ways: Online payment, cash upon delivery, and transfer through OMT/Western Union.
          </p>
          <p>
            Order and buy the card through the website or go directly to the nearest branch of OMT or Western Union and send the money in the name of the person you will be advised through WhatsApp. Send a copy of the receipt on WhatsApp to 76 667 359 and the activation code relevant to your purchase will be sent.
          </p>
          <p>
            Order the card via WhatsApp by requesting it on 76 667 359, providing your location. The required card(s) will be sent to your address within 24 hours. Payment will be cash upon delivery.
          </p>
          <p>
            Alternatively, order and pay online by debit or credit card in LBP or USD (Lebanese banks).
          </p>
          <button> <a href="tel:123456789">Get your Card</a></button>
        </div>
      </div>
      <div className="right-section">
        <header className="courses-header">
          <h1>All Courses</h1>
          <p>Explore our extensive range of courses designed to help you master new skills and enhance your knowledge. Choose from a variety of subjects and learn at your own pace with expert instructors.</p>
        </header>
        <section className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon">
                <FontAwesomeIcon icon={course.icon} size="2x" />
              </div>
              <div className="course-details">
                <h2>{course.title}</h2>
                <p className="instructor">
                  <FontAwesomeIcon icon={faUser} /> {course.instructor}
                </p>
                <p className="hours">Duration: {course.hours} hours</p>
                <Link to={`/courses/${course.id}`} className="enroll-button">{course.buttonLabel}</Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Courses;
