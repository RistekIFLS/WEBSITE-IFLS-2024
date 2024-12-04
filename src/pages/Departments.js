import React from "react";
import "../styles/styles.css";

function Departments() {
  const departments = [
    "Academic and Research Department",
    "Creative Media Department",
    "Event Organizing Department",
    "Public Relations Department",
    "Human Resources Department",
  ];

  return (
    <main className="page departments">
      <h2>Our Departments</h2>
      <p>Learn about the departments that power IFLS and contribute to its growth.</p>
      <ul>
        {departments.map((department, index) => (
          <li key={index} className="department-item">
            {department}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Departments;
