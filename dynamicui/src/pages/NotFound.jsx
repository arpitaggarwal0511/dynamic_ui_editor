import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h1>404 - Not Found</h1>
      <Link to="/editor" className="primary-btn">Go to Editor</Link>
    </div>
  );
}
