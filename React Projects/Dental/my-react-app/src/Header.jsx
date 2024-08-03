import React from 'react';
import './Header.css';
import videoFile from './assets/dental.mp4'; // Update with the correct path to your video file

const Header = () => {
  return (
    <header id='home' className="header">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="header-content">
        <h1 className="header-title">Experience premium, gentle teeth cleanings and whitenings.</h1>
        <p className="header-description">
          Providing top-notch dental services to keep your smile bright and healthy. Schedule your appointment today!
        </p>
        <div className="header-buttons">
          <button className="btn request-call">Request a Call</button>
          <button className="btn schedule-appointment">Schedule an Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
