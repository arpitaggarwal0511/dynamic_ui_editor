import React, { useState, useCallback, useEffect } from "react";
import EditorSidebar from "../components/EditorSidebar";
import Preview from "../components/Preview";
import { loadFromStorage, saveToStorage } from "../utils/useLocalStorage";

const STORAGE_KEY = "ui-editor-config-v1";

export default function EditorPage() {
  const defaultStyles = {
    fontFamily: "Inter, sans-serif",
    fontSize: 36,
    fontWeight: "700",
    buttonBorderRadius: 8,
    buttonShadow: "0 6px 18px rgba(2,6,23,0.12)",
    buttonAlignment: "center",
    buttonBgColor: "#6366f1",
    buttonTextColor: "#ffffff",
    galleryAlignment: "center",
    galleryGap: 16,
    imageBorderRadius: 12,
    layout: "default",
    cardBorderRadius: 20,
    containerPadding: 28,
    sectionBgColor: "#0f1724",
    strokeColor: "#1f2937",
    strokeWeight: 1,
  };

  const [styles, setStyles] = useState(() => loadFromStorage(STORAGE_KEY, defaultStyles));
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    saveToStorage(STORAGE_KEY, styles);
  }, [styles]);

  const handleExport = useCallback(() => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(styles, null, 2));
    const link = document.createElement("a");
    link.href = dataStr;
    link.download = "ui-config.json";
    link.click();
  }, [styles]);

  const handleImport = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const obj = JSON.parse(ev.target.result);
        setStyles((s) => ({ ...s, ...obj }));
      } catch {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  }, []);

  const handleReset = useCallback(() => {
    if (window.confirm("Reset to default settings?")) {
      setStyles(defaultStyles);
    }
  }, []);

  useEffect(() => {
    const onResize = () => setSidebarOpen(window.innerWidth >= 1000);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="app-root">
      {isSidebarOpen && (
        <EditorSidebar
          styles={styles}
          setStyles={setStyles}
          onExport={handleExport}
          onImport={handleImport}
          onReset={handleReset}
          onClose={() => setSidebarOpen(false)}
        />
      )}
      <Preview
        styles={styles}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />
    </div>
  );
}
