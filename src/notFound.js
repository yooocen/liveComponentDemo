import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NotFound = props => {
  return (
    <div>
      <p>[404]</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
