import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-greenGradientStart to-greenGradientEnd text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">IFLS</h1>
        <ul className="flex gap-4 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/divisions">Divisions</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
