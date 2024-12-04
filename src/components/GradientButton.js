import React from "react";

function GradientButton({ text, onClick }) {
  return (
    <button className="gradient-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default GradientButton;
