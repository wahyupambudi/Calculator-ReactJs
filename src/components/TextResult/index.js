import React from "react";

const TextResult = ({ hasil = 0 }) => (
  <div className="result-text">
    <h3>Hasil Perhitungan: {hasil}</h3>
  </div>
);

export default TextResult;
