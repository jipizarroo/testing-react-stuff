import React from "react";

const SimpleButton = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);

export default SimpleButton;
