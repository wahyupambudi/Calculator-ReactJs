import React from "react";

const CalcForm = ({ onInputChange, perhitungan }) => (
  <form className="App">
    <input
      type="text"
      value={perhitungan}
      onChange={onInputChange}
      placeholder="Operation"
    />
  </form>
);

export default CalcForm;
