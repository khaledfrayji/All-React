import React from "react";
import "./Map.css"; 

export default function Map() {
  return (
    <>
      <div className="map">
        <div className="map-elements">
          <h1>We Can't Wait To Meet You!</h1>
          <h4>Schedule a free consultation today.</h4>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Centro Mall, Jnah</p>
          </div>
          <div className="phone-nb">
            <i className="fa-solid fa-phone"></i>
            <p>(+961) 123-456-78</p>
          </div>
          <div className="time">
            <i className="fa-solid fa-calendar-days"></i>
            <p>Monday-Thursday 8-12/1-5</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26505.463994805676!2d35.487744!3d33.8591744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1722530958347!5m2!1sen!2slb"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
