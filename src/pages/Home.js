import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to IFLS</h1>
        <p>Explore languages and cultures with us at ITS Foreign Language Society.</p>
        <div className="buttons">
          <Link to="/divisions" className="gradient-button">Divisions</Link>
          <Link to="/about" className="gradient-button">About Us</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
