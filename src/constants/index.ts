import type { ColorType, SizeType } from '../types';

export const COLOR_MAP: Record<ColorType, string> = {
  'Red': '#EF4444',
  'Blue': '#3B82F6',
  'Green': '#10B981',
  'Yellow': '#F59E0B',
  'Purple': '#A855F7'
};

export const SIZE_MAP: Record<SizeType, number> = {
  '100x100': 100,
  '200x200': 200,
  '400x400': 400
};

export const CANVAS_WIDTH = 700;
export const CANVAS_HEIGHT = 500;