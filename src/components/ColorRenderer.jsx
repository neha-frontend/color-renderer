import React from "react";
import Color from "./Color";
import "./Color.css";

const ColorRenderer = () => {
  const colors = [
    { hex: "#FF0000", name: "Red" },
    { hex: "#00FF00", name: "Lime" },
    { hex: "#0000FF", name: "Blue" },
    { hex: "#FFFF00", name: "Yellow" },
    { hex: "#00FFFF", name: "Cyan" },
    { hex: "#FF00FF", name: "Magenta" },
    { hex: "#FFFFFF", name: "White" },
    { hex: "#000000", name: "Black" },
    { hex: "#C0C0C0", name: "Silver" },
    { hex: "#808080", name: "Gray" },
    { hex: "#800000", name: "Maroon" },
    { hex: "#808000", name: "Olive" },
    { hex: "#008000", name: "Green" },
    { hex: "#800080", name: "Purple" },
    { hex: "#008080", name: "Teal" },
    { hex: "#000080", name: "Navy" },
  ];
  return (
    <div className="color_square">
      {colors.map((color) => (
        <Color hex={color.hex} name={color.name} />
      ))}
    </div>
  );
};

export default ColorRenderer;
