import React from 'react';

const DrawingControls = ({ onColorChange, onSizeChange, currentColor, currentSize }) => {
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
  const sizes = [2, 4, 6, 8, 10];

  return (
    <div className="drawing-controls">
      <div className="color-picker">
        {colors.map(color => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className={`color-button ${currentColor === color ? 'active' : ''}`}
            onClick={() => onColorChange(color)}
          />
        ))}
      </div>
      <div className="size-picker">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-button ${currentSize === size ? 'active' : ''}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrawingControls;
