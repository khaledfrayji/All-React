import React, { useState } from 'react';


const FAQ = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  const questions = [
    { question: "What is EduConnect?", answer: "EduConnect is a platform for online education." },
    { question: "How can I subscribe?", answer: "You can subscribe through our website by choosing a plan that fits you." },
    { question: "How many devices can I use?", answer: "You can use up to 3 devices simultaneously." },
    { question: "When should I register?", answer: "You can register anytime." },
    { question: "How many times can I watch the lesson videos?", answer: "You can watch the lesson videos as many times as you wish." },
    { question: "Is there a free trial available?", answer: "Yes, we offer a 7-day free trial for new users." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and bank transfers." },
  ];

  return (
    <div className="faq" id='faq'>
      <h2>Frequently Asked Questions</h2>
      <p>We provide answers to your questions, please choose from the list to view questions related to the chosen topic.</p>
      <ul>
        {questions.map((item, index) => (
          <li key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className="icon">{visibleAnswer === index ? '-' : '+'}</span>
            </div>
            {visibleAnswer === index && <div className="answer">{item.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
