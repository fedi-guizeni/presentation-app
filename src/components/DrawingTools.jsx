import React from 'react';
import { connect } from 'react-redux';

const DrawingTools = ({ currentColor, currentSize, onColorChange, onSizeChange }) => {
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF'];
  const sizes = [2, 4, 6, 8];

  return (
    <div className="drawing-tools">
      <div className="color-picker">
        {colors.map(color => (
          <button
            key={color}
            className={`color-button ${currentColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color }}
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

export default connect()(DrawingTools);