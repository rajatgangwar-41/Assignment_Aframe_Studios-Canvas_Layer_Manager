import { type Shape } from '../types';
import { getPositionCoordinates } from './canvasUtils';

export const renderShape = (
  ctx: CanvasRenderingContext2D,
  shape: Shape,
  canvasWidth: number,
  canvasHeight: number
): void => {
  const { x, y } = getPositionCoordinates(shape.position, canvasWidth, canvasHeight, shape.size);
  ctx.fillStyle = shape.color;

  switch (shape.type) {
    case 'Circle':
      ctx.beginPath();
      ctx.arc(x, y, shape.size / 2, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 'Square':
      ctx.fillRect(x - shape.size / 2, y - shape.size / 2, shape.size, shape.size);
      break;

    case 'Triangle':
      // Isosceles triangle centered in bounding box
      ctx.beginPath();
      // Top vertex
      ctx.moveTo(x, y - shape.size / 2);
      // Bottom right vertex
      ctx.lineTo(x + shape.size / 2, y + shape.size / 2);
      // Bottom left vertex
      ctx.lineTo(x - shape.size / 2, y + shape.size / 2);
      ctx.closePath();
      ctx.fill();
      break;
  }
};