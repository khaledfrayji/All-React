import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div  id="about" className="about">
        <div className="about-elements">
          <h1>SMILE</h1> <i class="fa-solid fa-face-smile"></i>
          <h1>LOVE </h1> <i class="fa-solid fa-heart"></i>
          <h1>CARE</h1>
        </div>
        <p>
          Everything you need for a dreamy smile. Whether you’re visiting us for
          routine care or to elevate your smile through a cosmetic dental
          procedure. Our Atlanta dentist will ensure you walk away feeling your
          very best.
        </p>
        <div class="about-grid">
          <div class="about-grid-elements cosmetic-dentistry">
            <h2>Cosmetic Dentistry</h2>
            <p>Veneers, bonding, smile makeovers</p>
          </div>
          <div class="about-grid-elements family-dentistry">
            <h2>Family Dentistry</h2>
            <p>Cleanings, mouthguards, sealants</p>
          </div>
          <div class="about-grid-elements general-dentistry">
            <h2>General Dentistry</h2>
            <p>Exams, fillings, crowns</p>
          </div>
        </div>
      </div>
    </>
  );
}
