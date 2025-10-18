import React from "react";

export default function Preview({ styles, isSidebarOpen, onToggleSidebar }) {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    sectionBgColor,
    cardBorderRadius,
    containerPadding,
    strokeColor,
    strokeWeight,
    buttonBgColor,
    buttonTextColor,
    buttonBorderRadius,
    buttonShadow,
    buttonAlignment,
    galleryAlignment,
    galleryGap,
    imageBorderRadius,
    layout,
  } = styles;

  const themeVars = {
    "--preview-font-family": fontFamily,
    "--preview-font-size": `${fontSize}px`,
    "--preview-section-bg": sectionBgColor,
    "--preview-card-radius": `${cardBorderRadius}px`,
    "--preview-container-padding": `${containerPadding}px`,
    "--preview-stroke-color": strokeColor,
    "--preview-stroke-weight": `${strokeWeight}px`,
    "--btn-bg": buttonBgColor,
    "--btn-color": buttonTextColor,
    "--btn-radius": `${buttonBorderRadius}px`,
    "--btn-shadow": buttonShadow === "none" ? "none" : buttonShadow,
  };

  const images = [
    "https://placehold.co/800x480/7c3aed/ffffff?text=Image+1",
    "https://placehold.co/800x480/06b6d4/ffffff?text=Image+2",
    "https://placehold.co/800x480/f97316/ffffff?text=Image+3",
    "https://placehold.co/800x480/ef4444/ffffff?text=Image+4",
  ];

  const isSplit = layout === "alternative";

  return (
    <main className="preview" style={themeVars}>
      {/* --- Top header --- */}
      <div className="preview-top">
        <button
          className="hamburger"
          onClick={onToggleSidebar}
          aria-label="Toggle editor sidebar"
        >
          ☰
        </button>

        <div className="preview-title">
          <h1>Dynamic UI Component</h1>
          <p className="muted">Live preview updates as you customize.</p>
        </div>

        <div className="preview-actions">
          <button
            className="primary-btn"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
              borderRadius: buttonBorderRadius,
              boxShadow: buttonShadow === "none" ? "none" : buttonShadow,
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* --- Main Canvas --- */}
      <section
        className={`canvas ${isSplit ? "split" : "stack"}`}
        style={{
          backgroundColor: sectionBgColor,
          borderRadius: cardBorderRadius,
          border: `${strokeWeight}px solid ${strokeColor}`,
          padding: containerPadding,
        }}
      >
        {/* --- Left side (Gallery + Image) --- */}
        <div className="preview-left">
          <div className="product-hero">
            <img
              src={images[0]}
              alt="Hero"
              className="hero-image"
              style={{ borderRadius: imageBorderRadius }}
            />
          </div>

          <div
            className="gallery"
            style={{
              justifyContent: galleryAlignment,
              gap: galleryGap,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="gallery-item"
                style={{ borderRadius: imageBorderRadius }}
              />
            ))}
          </div>
        </div>

        {/* --- Right side (Text + Button) --- */}
        <aside className="preview-right">
          <h2
            className="product-name"
            style={{
              fontFamily,
              fontSize,
              fontWeight,
            }}
          >
            DYNAMIC CONTENT TEXT
          </h2>

          <p className="muted">
            Use the editor sidebar to tweak typography, colors, and layout.
          </p>

          <div
            className="cta-row"
            style={{ justifyContent: buttonAlignment }}
          >
            <button
              className="primary-btn large"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                borderRadius: buttonBorderRadius,
                boxShadow: buttonShadow === "none" ? "none" : buttonShadow,
              }}
            >
              Preview Button
            </button>
          </div>

          
        </aside>
      </section>
    </main>
  );
}
