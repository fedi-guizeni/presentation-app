import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const DrawingPlayback = ({ drawingPoints }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawingPoints.forEach((point, index) => {
      if (index === 0 || !drawingPoints[index - 1]) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.strokeStyle = point.color;
        ctx.lineWidth = point.size;
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }
    });
  }, [drawingPoints]);

  return (
    <canvas
      ref={canvasRef}
      className="drawing-playback"
      width={800}
      height={600}
    />
  );
};

export default connect(state => ({
  drawingPoints: state.drawing.points
}))(DrawingPlayback);