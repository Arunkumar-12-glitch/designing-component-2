// write button card here
// components/button.jsx

import React from "react";

const Button = ({ label }) => {
  return (
    <button className="view-product-button">
      {label}
    </button>
  );
};

export default Button;
