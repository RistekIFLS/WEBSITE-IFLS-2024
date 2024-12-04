import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Departments = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <section className="py-8 text-center">
          <h1 className="text-3xl font-bold text-greenGradientStart">Our Departments</h1>
          <p className="mt-4 text-lg">Stay tuned! Information about our departments is coming soon.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Departments;
