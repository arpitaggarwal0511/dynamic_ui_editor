# 🎨 Dynamic UI Component Editor

A fully interactive **React-based UI customization tool** that lets users dynamically modify typography, colors, layout, button styles, and images — all in real time.  
Built with a modular architecture and an intuitive editor interface inspired by Figma-style design tools.

---

## 🚀 Live Demo

🔗 **Deployed via Vercel:** [Live Demo Link]("https://ikarus3-d-assignment.vercel.app/")  

---

## 🧩 Project Overview

This project provides a **live editor and preview environment** for experimenting with visual design elements dynamically.  
It allows designers and developers to **instantly preview UI updates** without manually editing CSS or JSX.

Key features include:
- 🧱 Configurable layout modes (`stack` / `split`)
- 🎨 Live color, typography, and border radius customization
- 🖼️ Dynamic image gallery with spacing and alignment options
- 🔘 Button customization: background, text color, shadows, alignment
- 💾 JSON export/import for saving or reloading configurations
- 📱 Fully responsive design for desktop and mobile devices

---

## 🧠 Core Components

### **1. `EditorSidebar.jsx`**
- Main control panel for editing all visual properties.
- Provides grouped panels for:
  - Layout (padding, border radius, background)
  - Typography (font family, size, weight)
  - Button styling (radius, shadow, colors, alignment)
  - Image gallery (alignment, spacing, border radius)
  - Border/stroke (color, weight)
- Supports:
  - Live updates through React state
  - JSON Export/Import
  - Reset to defaults

### **2. `Preview.jsx`**
- Displays real-time visual preview of the configured component.
- Supports:
  - Dynamic rendering based on `layout` mode:
    - `default` → stacked layout
    - `alternative` → split layout
  - Responsive adjustments for smaller screens.
  - Floating hamburger menu for toggling sidebar on mobile.

### **3. `EditorPage.jsx`**
- Parent orchestrator combining the editor and preview.
- Handles:
  - Sidebar open/close logic
  - Local storage persistence for all styles
  - Device-based layout behavior (auto-hide sidebar on small screens)

### **4. `utils/useLocalStorage.js` & `fileUtils.js`**
- Helpers for saving and loading style states persistently.
- Handles exporting and importing user configurations safely.

---

## ⚙️ Component API

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `styles` | `object` | Predefined defaults | Style configuration object containing all UI customization states |
| `setStyles` | `function` | — | React state updater function for real-time style changes |
| `onExport` | `function` | — | Triggered when the user clicks **Export JSON** |
| `onImport` | `function` | — | Reads uploaded JSON and merges into existing styles |
| `onReset` | `function` | — | Resets all style settings to project defaults |
| `isOpen` | `boolean` | `true` | Controls sidebar visibility |
| `onClose` | `function` | — | Handles closing of the sidebar |

---

## 🖌️ Customization Features

| Category | Customizable Properties |
|-----------|--------------------------|
| **Layout** | Mode (stack/split), container padding, card corner radius, section background |
| **Typography** | Font family, font size, font weight |
| **Button** | Alignment, border radius, shadow intensity, background color, text color |
| **Image Gallery** | Alignment, gap between images, image border radius |
| **Borders** | Stroke color and thickness |

---

## 🧱 Tech Stack

- **React 18+**
- **CSS3 (Custom variables + responsive design)**
- **LocalStorage API** for state persistence
- **Vite / Create React App** (depending on setup)
- **Vercel** for deployment

---

## 🧰 How It Works

1. **Sidebar Controls:** User interacts with sliders, color pickers, and dropdowns.  
2. **State Updates:** Each change updates a centralized `styles` object in React state.  
3. **Live Preview:** The `Preview` component uses inline styles + CSS variables to instantly reflect changes.  
4. **Persistence:** Changes are saved in localStorage and reloaded automatically on next visit.  
5. **Export / Import:** User can save or reload previous UI configurations via JSON files.

---

## 🧪 Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/ui-editor.git
cd ui-editor

# Install dependencies
npm install

# Start the dev server
npm start

# Build for production
npm run build
