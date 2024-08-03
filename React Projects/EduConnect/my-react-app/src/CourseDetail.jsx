import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock,faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const courses = [
    {
      id: 1, icon: 'faCalculator', title: 'Mathematics', instructor: 'John Doe', email: 'john.doe@example.com', hours: '40',
      description: 'Detailed Mathematics course', lessons: {
        1: ['Math Lesson 1', 'Math Lesson 2', 'Math Lesson 3','Math Lesson 4','Math Lesson 5'],
      }
    },
    {
      id: 2, icon: 'faAtom', title: 'Physics', instructor: 'Jane Smith', email: 'jane.smith@example.com', hours: '35',
      description: 'Detailed Physics course', lessons: {
        1: ['Physics Lesson 1', 'Physics Lesson 2'],
      }
    },
    {
      id: 3, icon: 'faFlask', title: 'Chemistry', instructor: 'Emily Johnson', email: 'emily.johnson@example.com', hours: '45',
      description: 'Detailed Chemistry course', lessons: {
        1: ['Chemistry Lesson 1', 'Chemistry Lesson 2'],
    
      }
    },
    {
      id: 4, icon: 'faBookOpen', title: 'English', instructor: 'Michael Brown', email: 'michael.brown@example.com', hours: '30',
      description: 'Detailed English course', lessons: {
        1: ['English Lesson 1', 'English Lesson 2'],
       
      }
    },
    {
      id: 5, icon: 'faLanguage', title: 'Spanish', instructor: 'Sarah Davis', email: 'sarah.davis@example.com', hours: '25',
      description: 'Detailed Spanish course', lessons: {
        1: ['Spanish Lesson 1', 'Spanish Lesson 2'],
      }
    }
  ];
  

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  const [grade, setGrade] = useState(1);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleGradeChange = (event) => {
    setGrade(parseInt(event.target.value));
  };

  return (
    <div className="course-detail-container">
      <header className="course-detail-header">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </header>
      <div className="course-detail-content">
        <div className="course-info">
          <p><FontAwesomeIcon icon={faUser} /> Instructor: {course.instructor}</p>
          <p><FontAwesomeIcon icon={faClock} /> Duration: {course.hours} hours</p>
        </div>
        <div className="course-lessons">
          <h2>Lessons</h2>
          <ul>
            {course.lessons[grade].map((lesson, index) => (
              <li key={index} className="lesson-item">
                <Link to="/login" className="lesson-link">{lesson}</Link>
                <FontAwesomeIcon icon={faLock} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
