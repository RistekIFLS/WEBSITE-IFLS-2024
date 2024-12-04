import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-greenGradientStart to-greenGradientEnd min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to IFLS</h1>
        <p className="text-lg mb-6">Explore Cultures. Master Languages. Embrace Diversity.</p>
        <div className="flex gap-4">
          <button className="bg-white text-greenGradientStart px-4 py-2 rounded shadow hover:bg-green-100">Learn More</button>
          <button className="bg-green-800 px-4 py-2 rounded shadow hover:bg-green-700">Join Us</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
