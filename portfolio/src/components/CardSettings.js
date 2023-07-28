import React, { useState } from 'react';

const CardSettings = () => {
  const [background, setBackground] = useState('background1.jpg');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(14);
  const [fontColor, setFontColor] = useState('#000000');

  const handleBackgroundChange = (event) => {
    setBackground(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  return (
    <div>
      <h2>Card Settings</h2>
      <div>
        <label htmlFor="background">Background:</label>
        <select id="background" value={background} onChange={handleBackgroundChange}>
          <option value="background1.jpg">Background 1</option>
          <option value="background2.jpg">Background 2</option>
          {/* Add other background options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="fontFamily">Font Family:</label>
        <select id="fontFamily" value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          {/* Add other font family options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="fontSize">Font Size:</label>
        <input
          type="number"
          id="fontSize"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div>
        <label htmlFor="fontColor">Font Color:</label>
        <input
          type="color"
          id="fontColor"
          value={fontColor}
          onChange={handleFontColorChange}
        />
      </div>
      {/* Add other card settings content here */}
      {/* For example, options to upload images or more styling settings */}
    </div>
  );
};

export default CardSettings;
