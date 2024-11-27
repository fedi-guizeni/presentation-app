import React from 'react';
import { connect } from 'react-redux';

const DrawingExport = ({ canvasRef }) => {
  const exportDrawing = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <button 
      className="export-button"
      onClick={exportDrawing}
    >
      Export Drawing
    </button>
  );
};

export default connect()(DrawingExport);
