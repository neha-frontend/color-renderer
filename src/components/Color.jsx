import React from "react";
import "./Color.css";

const Color = ({ hex, name }) => {
  return (
    <div className="item" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
};

export default Color;
