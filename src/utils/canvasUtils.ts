import { type PositionType } from '../types';

export const getPositionCoordinates = (
  position: PositionType,
  canvasWidth: number,
  canvasHeight: number,
  shapeSize: number
): { x: number; y: number } => {
  const halfSize = shapeSize / 2;
  
  switch (position) {
    case 'Top Left':
      return { x: halfSize, y: halfSize };
    case 'Top Center':
      return { x: canvasWidth / 2, y: halfSize };
    case 'Top Right':
      return { x: canvasWidth - halfSize, y: halfSize };
    case 'Center Left':
      return { x: halfSize, y: canvasHeight / 2 };
    case 'Center':
      return { x: canvasWidth / 2, y: canvasHeight / 2 };
    case 'Center Right':
      return { x: canvasWidth - halfSize, y: canvasHeight / 2 };
    case 'Bottom Left':
      return { x: halfSize, y: canvasHeight - halfSize };
    case 'Bottom Center':
      return { x: canvasWidth / 2, y: canvasHeight - halfSize };
    case 'Bottom Right':
      return { x: canvasWidth - halfSize, y: canvasHeight - halfSize };
    default:
      return { x: halfSize, y: halfSize };
  }
};