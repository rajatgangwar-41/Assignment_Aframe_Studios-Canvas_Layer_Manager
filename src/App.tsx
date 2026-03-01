import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel';
import LayersPanel from './components/LayersPanel';
import type { Shape, ShapeType, ColorType, SizeType, PositionType } from './types';
import { COLOR_MAP, SIZE_MAP } from './constants';

const App: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShape, setSelectedShape] = useState<ShapeType>('Square');
  const [selectedColor, setSelectedColor] = useState<ColorType>('Red');
  const [selectedSize, setSelectedSize] = useState<SizeType>('400x400');
  const [selectedPosition, setSelectedPosition] = useState<PositionType>('Top Left');

  const addShape = () => {
    const newShape: Shape = {
      id: `${Date.now()}-${Math.random()}`,
      type: selectedShape,
      color: COLOR_MAP[selectedColor],
      size: SIZE_MAP[selectedSize],
      position: selectedPosition
    };

    setShapes([newShape, ...shapes]);
  };

  const deleteShape = (id: string) => {
    setShapes(shapes.filter(shape => shape.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>
      <div className="flex h-screen">
        <ControlPanel
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          onAddShape={addShape}
        />

        <div className="flex-1 bg-white flex items-center justify-center p-8">
          <Canvas shapes={shapes} />
        </div>

        <LayersPanel shapes={shapes} onDeleteShape={deleteShape} />
      </div>
    </div>
  );
};

export default App;