import React from "react";
import "../styles/styles.css";

function Divisions() {
  const divisions = [
    "IJCA (ITS Japanese Culture Association)",
    "IHMHA (IFLS Hanmunhwae)",
    "IDC (ITS Drawing Club)",
    "IDS (ITS Debate Society)",
    "IC Band (IFLS Culture Band)",
    "UtaITS (Utaite ITS)",
  ];

  return (
    <main className="page divisions">
      <h2>Our Divisions</h2>
      <p>Explore the unique divisions that make up IFLS and find where your interests align.</p>
      <ul>
        {divisions.map((division, index) => (
          <li key={index} className="division-item">
            {division}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Divisions;
