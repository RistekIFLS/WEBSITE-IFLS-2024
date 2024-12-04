import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">IFLS</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/divisions">Divisions</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
