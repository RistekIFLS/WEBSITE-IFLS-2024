import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    { question: 'What is IFLS?', answer: 'IFLS is the ITS Foreign Language Society, a community for language and culture enthusiasts.' },
    { question: 'How can I join?', answer: 'You can join by contacting us or visiting our events on campus.' },
    { question: 'Do I need prior language skills?', answer: 'Not at all! Everyone is welcome regardless of their skill level.' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <section className="py-8 px-6">
          <h1 className="text-3xl font-bold text-center text-greenGradientStart">Frequently Asked Questions</h1>
          <div className="mt-6 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h2 className="font-semibold text-lg">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
