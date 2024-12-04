import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Divisions from "./pages/Divisions";
import Departments from "./pages/Departments";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
