import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page">
      <h1>About Dynamic UI Editor</h1>
      <p>This is a modular React-based customizable UI editor project.</p>
      <Link to="/editor" className="primary-btn">Back to Editor</Link>
    </div>
  );
}
