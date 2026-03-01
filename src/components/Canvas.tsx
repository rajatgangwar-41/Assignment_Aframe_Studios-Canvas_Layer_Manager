import React, { useRef, useEffect } from 'react';
import {type Shape } from '../types';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';
import { renderShape } from '../utils/shapeRenderer';

interface CanvasProps {
  shapes: Shape[];
}

const Canvas: React.FC<CanvasProps> = ({ shapes }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw shapes in reverse order (bottom to top)
    [...shapes].reverse().forEach(shape => {
      renderShape(ctx, shape, canvas.width, canvas.height);
    });
  }, [shapes]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className="bg-white shadow-lg"
    />
  );
};

export default Canvas;