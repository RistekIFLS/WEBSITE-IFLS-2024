import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-greenGradientStart to-greenGradientEnd text-white">
        <section className="py-8 px-6 text-center">
          <h1 className="text-3xl font-bold">About IFLS</h1>
          <p className="mt-4 text-lg">
            IFLS (ITS Foreign Language Society) is dedicated to fostering a love for languages, cultures, and diversity
            through engaging activities and communities.
          </p>
          <p className="mt-2 text-lg">
            Join us to explore new languages, express creativity, and build lifelong connections.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
