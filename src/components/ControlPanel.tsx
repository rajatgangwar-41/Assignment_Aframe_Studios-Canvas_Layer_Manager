import React from 'react';
import type { ShapeType, ColorType, SizeType, PositionType } from '../types';
import { COLOR_MAP } from '../constants';

interface ControlPanelProps {
  selectedShape: ShapeType;
  setSelectedShape: (shape: ShapeType) => void;
  selectedColor: ColorType;
  setSelectedColor: (color: ColorType) => void;
  selectedSize: SizeType;
  setSelectedSize: (size: SizeType) => void;
  selectedPosition: PositionType;
  setSelectedPosition: (position: PositionType) => void;
  onAddShape: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  selectedShape,
  setSelectedShape,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedPosition,
  setSelectedPosition,
  onAddShape
}) => {

  return (
    <div className="w-64 bg-gray-200 p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black mb-6">Canvas</h1>
      </div>

      {/* Shape Selection */}
      <div>
        <label className="block text-gray-600 text-xs font-semibold mb-2 uppercase">
          Shape
        </label>
        <select
          value={selectedShape}
          onChange={(e) => setSelectedShape(e.target.value as ShapeType)}
          className="w-full bg-gray-300 text-gray-800 pr-10 border-none rounded px-3 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
        >
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
          <option value="Triangle">Triangle</option>
        </select>
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-gray-600 text-xs font-semibold mb-2 uppercase">
          Color
        </label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value as ColorType)}
          className="w-full bg-gray-300 text-gray-800 pr-10 border-none rounded px-3 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
        >
          {(Object.keys(COLOR_MAP) as ColorType[]).map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      {/* Size Selection */}
      <div>
        <label className="block text-gray-600 text-xs font-semibold mb-2 uppercase">
          Size Fit
        </label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value as SizeType)}
          className="w-full bg-gray-300 text-gray-800 pr-10 border-none rounded px-3 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
        >
          <option value="100x100">100x100</option>
          <option value="200x200">200x200</option>
          <option value="400x400">400x400</option>
        </select>
      </div>

      {/* Position Selection */}
      <div>
        <label className="block text-gray-600 text-xs font-semibold mb-2 uppercase">
          Position
        </label>
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value as PositionType)}
          className="w-full bg-gray-300 text-gray-800 border-none pr-10 rounded px-3 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
        >
          <option value="Top Left">Top Left</option>
          <option value="Top Center">Top Center</option>
          <option value="Top Right">Top Right</option>
          <option value="Center Left">Center Left</option>
          <option value="Center">Center</option>
          <option value="Center Right">Center Right</option>
          <option value="Bottom Left">Bottom Left</option>
          <option value="Bottom Center">Bottom Center</option>
          <option value="Bottom Right">Bottom Right</option>
        </select>
      </div>

      {/* Add Button */}
      <button
        onClick={onAddShape}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 uppercase text-sm"
      >
        <span className="text-lg">+</span> Add Shape
      </button>
    </div>
  );
};

export default ControlPanel;