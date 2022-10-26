import React from "react";

// The cc stands for Component Composition :)

const CCButton = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default CCButton;
