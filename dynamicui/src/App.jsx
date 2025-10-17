import React, { useState } from 'react';
// import EditorPanel from './EditorPanel';
// import Preview from './Preview';
import './index.css';

const defaultConfig = {
  layout: 'A',
  typography: { fontFamily: 'Inter', fontWeight: 500, fontSize: 16 },
  button: {
    borderRadius: 10,
    shadow: 'small',
    alignment: 'center',
    backgroundColor: '#d16a4a',
    textColor: '#ffffff',
    padding: 12
  },
  gallery: { alignment: 'left', spacing: 8, imageBorderRadius: 8 },
  layoutSettings: { cardCornerRadius: 12, containerPadding: 24, sectionBackgroundColor: '#ffffff' },
  stroke: { strokeColor: '#e6e6e6', strokeWeight: 1 }
};

function App() {
  const [uiConfig, setUiConfig] = useState(defaultConfig);

  const update = (path, value) => {
    setUiConfig(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let cur = next;
      for (let i=0; i<keys.length-1; i++) cur = cur[keys[i]];
      cur[keys[keys.length-1]] = value;
      return next;
    });
  };

  return (
    <div className="app">
      <div className="editor">
        <h3>UI Editor</h3>
        <EditorPanel uiConfig={uiConfig} onChange={update} setUiConfig={setUiConfig} />
      </div>
      <div className="preview-wrap">
        <Preview uiConfig={uiConfig} onChange={update} />
      </div>
    </div>
  );
}

export default App;
