export type ShapeType = 'Circle' | 'Square' | 'Triangle';

export type ColorType = 'Red' | 'Blue' | 'Green' | 'Yellow' | 'Purple';

export type SizeType = '100x100' | '200x200' | '400x400';

export type PositionType = 
  | 'Top Left' 
  | 'Top Center' 
  | 'Top Right' 
  | 'Center Left' 
  | 'Center' 
  | 'Center Right' 
  | 'Bottom Left' 
  | 'Bottom Center' 
  | 'Bottom Right';

export interface Shape {
  id: string;
  type: ShapeType;
  color: string;
  size: number;
  position: PositionType;
}