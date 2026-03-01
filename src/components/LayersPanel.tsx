import React from 'react';
import { Trash2 } from 'lucide-react';
import { type Shape } from '../types';

interface LayersPanelProps {
  shapes: Shape[];
  onDeleteShape: (id: string) => void;
}

const LayersPanel: React.FC<LayersPanelProps> = ({ shapes, onDeleteShape }) => {
  const getShapeLabel = (shape: Shape, index: number): string => {
    const positionInitials = shape.position.split(' ').map(w => w[0]).join('');
    return `${index + 1}. ${shape.type} [${positionInitials}]`;
  };

  return (
    <div className="w-64 bg-gray-200 flex flex-col">
      <div className="bg-gray-300 px-6 py-4">
        <h2 className="text-gray-700 font-semibold uppercase text-xs tracking-wide">
          Layers
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        {shapes.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            No layers
          </div>
        ) : (
          <div className="space-y-2">
            {shapes.map((shape, index) => (
              <div
                key={shape.id}
                className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-3 flex items-center justify-between transition-colors group"
              >
                <span className="text-gray-800 text-sm font-medium">
                  {getShapeLabel(shape, index)}
                </span>
                <button
                  onClick={() => onDeleteShape(shape.id)}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Delete shape"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LayersPanel;