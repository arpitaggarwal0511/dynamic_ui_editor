import React from "react";

export default function Slider({ id, label, value, onChange }) {
  return (
    <div className="control-row">
      <label htmlFor={id} className="control-label">{label}</label>
      <input
        id={id}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="color-input"
      />
    </div>
  );
}
