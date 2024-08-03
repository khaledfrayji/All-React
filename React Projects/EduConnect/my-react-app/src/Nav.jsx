import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo"><span className='Edu'>Edu</span>Connect</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/courses" onClick={toggleMenu}>Courses</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <a href="#faq" onClick={toggleMenu}>FAQ</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </div>
  );
}

export default App;
