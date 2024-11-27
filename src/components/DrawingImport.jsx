import React from 'react';
import { connect } from 'react-redux';

const DrawingImport = ({ canvasRef }) => {
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="import-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImport}
        style={{ display: 'none' }}
        id="import-drawing"
      />
      <label htmlFor="import-drawing" className="import-button">
        Import Drawing
      </label>
    </div>
  );
};

export default connect()(DrawingImport);
