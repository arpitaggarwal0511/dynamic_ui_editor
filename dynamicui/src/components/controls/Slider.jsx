export default function Slider({
  id,
  label,
  min,
  max,
  value,
  onChange,
  unit = "px",
}) {
  return (
    <div className="control-block">
      <div className="control-row">
        <label htmlFor={id} className="control-label">
          {label}
        </label>
        <span className="control-value">
          {value}
          {unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="slider"
      />
    </div>
  );
}
