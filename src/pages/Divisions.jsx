import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const divisions = [
  { name: 'IJCA', description: 'Exploring Japanese culture and language.' },
  { name: 'IHMHA', description: 'Hanmunhwae Korean culture enthusiasts.' },
  { name: 'IDC', description: 'Artistic community at IFLS.' },
  { name: 'IDS', description: 'English and global debate society.' },
  { name: 'IC Band', description: 'Cultural music expressions.' },
  { name: 'UtaITS', description: 'Japanese-style singers and performers.' },
];

const Divisions = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <section className="py-8 text-center">
          <h1 className="text-3xl font-bold text-greenGradientStart">Our Divisions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
            {divisions.map((division, index) => (
              <div key={index} className="bg-white shadow-md rounded p-4">
                <h2 className="text-xl font-semibold text-greenGradientStart">{division.name}</h2>
                <p>{division.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Divisions;
