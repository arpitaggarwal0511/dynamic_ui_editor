export default function ButtonGroup({ label, options, value, onChange }) {
  return (
    <div className="control-block">
      <div className="control-label">{label}</div>
      <div className="btn-group" role="tablist" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`seg-btn ${value === option.value ? "active" : ""}`}
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
