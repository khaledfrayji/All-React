import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact py-5" id='contact'>
      <div className="container">
        <h1 className="platform-name">EduConnect</h1>
        <p className="objective">
          Our platform aims to connect students and educators worldwide, providing high-quality online education accessible to everyone.
        </p>
        <div className="row mb-4">
          <div className="col-md-4 contact-info">
            <div><FontAwesomeIcon icon={faEnvelope} size="lg" /> <span>Email:</span> contact@educonnect.com</div>
          </div>
          <div className="col-md-4 contact-info">
            <div><FontAwesomeIcon icon={faPhone} size="lg" /> <span>Phone:</span> +123 456 7890</div>
          </div>
          <div className="col-md-4 contact-info">
            <div><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> <span>Address:</span> 123 Education St., Knowledge City</div>
          </div>
        </div>
        
        <div>
          <h5>Subscribe to our Newsletter</h5>
          <form className="d-flex">
            <input type="email" className="form-control" placeholder="Enter your email" />
            <button className="btn btn-warning">Subscribe</button>
          </form>
        </div>
      </div>
      <h6>&copy; 2024 EduConnect. All rights reserved.</h6>
      <h6>Designed by Khaled Frayji.</h6>

    </div>
  );
};

export default Contact;
