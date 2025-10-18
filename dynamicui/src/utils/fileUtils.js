// -----------------------------
// Export configuration as JSON
// -----------------------------
export const exportToJson = (data, filename = "ui-config.json") => {
  try {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
      link.remove();
    }, 100);
  } catch (err) {
    console.error("Export failed:", err);
  }
};

// -----------------------------
// Import configuration from JSON
// -----------------------------
export const importFromJson = (file, onLoad) => {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (onLoad && typeof onLoad === "function") {
        onLoad(parsed);
      }
    } catch (err) {
      alert("Invalid JSON file");
      console.error("Import failed:", err);
    }
  };
  reader.readAsText(file);
};
