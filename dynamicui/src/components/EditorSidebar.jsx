import React, { useCallback } from "react";
import ColorPicker from "./controls/ColorPicker";
import Slider from "./controls/Slider";
import Select from "./controls/Select";
import ButtonGroup from "./controls/ButtonGroup";
import { exportToJson, importFromJson } from "../utils/fileUtils";

export default function EditorSidebar({
  styles,
  setStyles,
  onClose,
  onReset,
  isOpen, 
}) {
  const handleChange = useCallback(
    (key, value) => {
      setStyles((prev) => ({ ...prev, [key]: value }));
    },
    [setStyles]
  );

  const handleExport = () => exportToJson(styles, "ui-config.json");

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    importFromJson(file, (data) => {
      setStyles((prev) => ({ ...prev, ...data }));
    });
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Header */}
      <header className="sidebar-header">
        <div>
          <h2 className="brand">UI Editor</h2>
          <p className="muted">Customize the look in real-time</p>
        </div>
        <div className="sidebar-actions">
          <button
            className="icon-btn"
            onClick={onClose}
            title="Close sidebar"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Top Actions */}
      <div className="controls-row top-actions">
        <button className="primary-btn" onClick={handleExport}>
          Export JSON
        </button>

        <label className="file-import">
          Import
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            aria-label="Import JSON"
          />
        </label>

        <button className="ghost-btn" onClick={onReset}>
          Reset
        </button>
      </div>

      {/* Layout */}
      <fieldset className="panel">
        <legend>Layout</legend>
        <Select
          id="layout"
          label="Layout Mode"
          value={styles.layout}
          onChange={(v) => handleChange("layout", v)}
          options={[
            { value: "default", label: "Default (stack)" },
            { value: "alternative", label: "Alternative (split)" },
          ]}
        />
        <Slider
          id="containerPadding"
          label="Container Padding"
          min={0}
          max={100}
          value={styles.containerPadding}
          onChange={(v) => handleChange("containerPadding", v)}
        />
        <Slider
          id="cardBorderRadius"
          label="Card Corner Radius"
          min={0}
          max={50}
          value={styles.cardBorderRadius}
          onChange={(v) => handleChange("cardBorderRadius", v)}
        />
        <ColorPicker
          id="sectionBgColor"
          label="Section Background"
          value={styles.sectionBgColor}
          onChange={(v) => handleChange("sectionBgColor", v)}
        />
      </fieldset>

      {/* Typography */}
      <fieldset className="panel">
        <legend>Typography</legend>
        <Select
          id="fontFamily"
          label="Font Family"
          value={styles.fontFamily}
          onChange={(v) => handleChange("fontFamily", v)}
          options={[
            { value: "Inter, sans-serif", label: "Inter" },
            { value: "Roboto, sans-serif", label: "Roboto" },
            { value: "Poppins, sans-serif", label: "Poppins" },
            { value: "Playfair Display, serif", label: "Playfair Display" },
            { value: "Montserrat, sans-serif", label: "Montserrat" },
            { value: "Merriweather, serif", label: "Merriweather" },
            { value: "Lobster, cursive", label: "Lobster" },
            { value: "'Source Code Pro', monospace", label: "Source Code Pro" },
            { value: "Cinzel, serif", label: "Cinzel" },
          ]}
        />
        <Slider
          id="fontSize"
          label="Font Size"
          min={10}
          max={60}
          value={styles.fontSize}
          onChange={(v) => handleChange("fontSize", v)}
        />
        <Select
          id="fontWeight"
          label="Font Weight"
          value={styles.fontWeight}
          onChange={(v) => handleChange("fontWeight", v)}
          options={[
            { value: "400", label: "Regular (400)" },
            { value: "500", label: "Medium (500)" },
            { value: "600", label: "Semi-Bold (600)" },
            { value: "700", label: "Bold (700)" },
          ]}
        />
      </fieldset>

      {/* Button */}
      <fieldset className="panel">
        <legend>Button</legend>
        <Slider
          id="buttonBorderRadius"
          label="Border Radius"
          min={0}
          max={40}
          value={styles.buttonBorderRadius}
          onChange={(v) => handleChange("buttonBorderRadius", v)}
        />
        <Select
          id="buttonShadow"
          label="Shadow"
          value={styles.buttonShadow}
          onChange={(v) => handleChange("buttonShadow", v)}
          options={[
            { value: "none", label: "None" },
            { value: "0 6px 18px rgba(2,6,23,0.12)", label: "Soft" },
            { value: "0 10px 30px rgba(2,6,23,0.18)", label: "Medium" },
            { value: "0 20px 50px rgba(2,6,23,0.22)", label: "Heavy" },
          ]}
        />
        <ButtonGroup
          label="Alignment"
          value={styles.buttonAlignment}
          onChange={(v) => handleChange("buttonAlignment", v)}
          options={[
            { value: "flex-start", label: "Left" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "Right" },
          ]}
        />
        <ColorPicker
          id="buttonBgColor"
          label="Background Color"
          value={styles.buttonBgColor}
          onChange={(v) => handleChange("buttonBgColor", v)}
        />
        <ColorPicker
          id="buttonTextColor"
          label="Text Color"
          value={styles.buttonTextColor}
          onChange={(v) => handleChange("buttonTextColor", v)}
        />
      </fieldset>

      {/* Gallery */}
      <fieldset className="panel">
        <legend>Image Gallery</legend>
        <ButtonGroup
          label="Gallery Alignment"
          value={styles.galleryAlignment}
          onChange={(v) => handleChange("galleryAlignment", v)}
          options={[
            { value: "flex-start", label: "Left" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "Right" },
          ]}
        />
        <Slider
          id="galleryGap"
          label="Image Spacing"
          min={0}
          max={50}
          value={styles.galleryGap}
          onChange={(v) => handleChange("galleryGap", v)}
        />
        <Slider
          id="imageBorderRadius"
          label="Image Border Radius"
          min={0}
          max={100}
          value={styles.imageBorderRadius}
          onChange={(v) => handleChange("imageBorderRadius", v)}
        />
      </fieldset>

      {/* Border */}
      <fieldset className="panel">
        <legend>Card & Border</legend>
        <ColorPicker
          id="strokeColor"
          label="Stroke Color"
          value={styles.strokeColor}
          onChange={(v) => handleChange("strokeColor", v)}
        />
        <Slider
          id="strokeWeight"
          label="Stroke Weight"
          min={0}
          max={10}
          value={styles.strokeWeight}
          onChange={(v) => handleChange("strokeWeight", v)}
        />
      </fieldset>
    </aside>
  );
}
