import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Stats = () => {
  const [countries, setCountries] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [courses, setCourses] = useState(0);
  const [branches, setBranches] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const counters = [
        { end: 4, setter: setCountries },
        { end: 105, setter: setTeachers },
        { end: 120, setter: setCourses },
        { end: 30, setter: setBranches},
      ];

      counters.forEach((counter, index) => {
        let start = 0;
        const duration = 700; // duration in ms
        const stepTime = Math.abs(Math.floor(duration / counter.end));
        
        const timer = setInterval(() => {
          start += 1;
          counter.setter(start);
          if (start === counter.end) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <div className="stats" ref={ref}>
      <div className="stat">
        <div className="content">+{countries}</div>
        <div className="label">Countries</div>
      </div>
      <div className="stat">
        <div className="content">+{teachers}</div>
        <div className="label">Teachers</div>
      </div>
      <div className="stat">
        <div className="content">+{courses}</div>
        <div className="label">Courses</div>
      </div>
      <div className="stat">
        <div className="content">+{branches}</div>
        <div className="label">Branches</div>
      </div>
    </div>
  );
};

export default Stats;
