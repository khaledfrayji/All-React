import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Stats from './Stats.jsx';
import './index.css';
import FAQ from './FAQ.jsx';
import Contact from './Contact.jsx';
import Courses from './Courses.jsx';
import CourseDetail from './CourseDetail.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Stats />
      <FAQ />
      <Contact />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
