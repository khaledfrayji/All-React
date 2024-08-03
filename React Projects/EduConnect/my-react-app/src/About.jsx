import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <header className="about-header">
        <h1>About EduConnect</h1>
        <p>
          EduConnect is your gateway to a world of knowledge and skill
          enhancement. Our platform is dedicated to providing high-quality
          educational resources to learners of all ages and backgrounds. With a
          diverse range of courses spanning various subjects, EduConnect aims to
          make education accessible, engaging, and effective for everyone.
        </p>
      </header>
      <div className="about-container">
        <div className="about-description">
          <h2>Our Mission</h2>
          <p>
            At EduConnect, our mission is to empower individuals through
            education. We believe that learning should be a lifelong journey,
            and our goal is to support that journey with a comprehensive
            learning ecosystem. We strive to offer courses that cater to
            different interests and career aspirations, ensuring that our users
            have the tools they need to succeed.
          </p>
          <h2>Why Choose EduConnect?</h2>
          <div className="why-choose">
            <p>
              Expert Instructors: Our courses are taught by experienced and
              knowledgeable instructors who are passionate about their subjects.
              Flexible Learning: Study at your own pace with our flexible course
              schedules. Access your lessons anytime, anywhere.
              Comprehensive Resources: From video lectures and interactive
              quizzes to downloadable resources, we provide everything you need
              to master new skills.
              Community Support: Join a community of like-minded learners and
              engage in discussions, group studies, and peer support.
              Affordable Pricing: We offer competitive pricing and convenient
              payment options, including prepaid cards and online payments.
            </p>
          </div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where education is accessible to all, regardless
            of location or financial background. EduConnect is committed to
            breaking down barriers to education and providing opportunities for
            continuous learning and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
