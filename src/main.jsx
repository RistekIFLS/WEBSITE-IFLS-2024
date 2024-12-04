import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Divisions from './pages/Divisions';
import Departments from './pages/Departments';
import About from './pages/About';
import FAQ from './pages/FAQ';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/divisions" element={<Divisions />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
