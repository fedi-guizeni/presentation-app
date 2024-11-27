import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addDrawPoints } from '../actions';
import DrawingTools from './DrawingTools';
import DrawingExport from './DrawingExport';
import DrawingImport from './DrawingImport';
import '../styles/DrawingCanvas.css';

const DrawingCanvas = ({ dispatch }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    setContext(ctx);
  }, [color, size]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
    dispatch(addDrawPoints({ x: offsetX, y: offsetY, color, size }));
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="drawing-container">
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <div className="drawing-controls">
        <DrawingTools
          currentColor={color}
          currentSize={size}
          onColorChange={setColor}
          onSizeChange={setSize}
        />
        <DrawingExport canvasRef={canvasRef} />
        <DrawingImport canvasRef={canvasRef} />
      </div>
    </div>
  );
};export default connect()(DrawingCanvas);