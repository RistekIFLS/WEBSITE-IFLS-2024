import React from "react";
import "../styles/styles.css";

function FAQ() {
  const faqs = [
    {
      question: "What is IFLS?",
      answer: "IFLS stands for ITS Foreign Language Society, a community for exploring languages and cultures at ITS.",
    },
    {
      question: "How can I join IFLS?",
      answer: "You can join by signing up during our open recruitment period or contacting us through our social media platforms.",
    },
    {
      question: "Are there membership fees?",
      answer: "Yes, there is a small membership fee to support our activities and events.",
    },
    {
      question: "What activities does IFLS organize?",
      answer: "We organize language learning sessions, cultural exchange programs, competitions, and more.",
    },
    {
      question: "Can I join multiple divisions?",
      answer: "Absolutely! You are encouraged to explore multiple divisions if you’re interested.",
    },
  ];

  return (
    <main className="page faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </main>
  );
}

export default FAQ;
