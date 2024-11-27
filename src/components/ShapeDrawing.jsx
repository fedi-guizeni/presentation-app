import React from 'react';

const ShapeDrawing = ({ context, startPoint, currentPoint }) => {
  const drawShape = (type) => {
    context.beginPath();
    switch(type) {
      case 'rectangle':
        const width = currentPoint.x - startPoint.x;
        const height = currentPoint.y - startPoint.y;
        context.rect(startPoint.x, startPoint.y, width, height);
        break;
      case 'circle':
        const radius = Math.sqrt(
          Math.pow(currentPoint.x - startPoint.x, 2) + 
          Math.pow(currentPoint.y - startPoint.y, 2)
        );
        context.arc(startPoint.x, startPoint.y, radius, 0, 2 * Math.PI);
        break;
    }
    context.stroke();
  };

  return null;
};

export default ShapeDrawing;
