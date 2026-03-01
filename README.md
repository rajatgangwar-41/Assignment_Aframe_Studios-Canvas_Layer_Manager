# Canvas Layer Manager

A React-based Canvas application for programmatically composing and managing shapes as distinct layers. Built with TypeScript and the HTML Canvas API.


## Features

### Shape Controls
- **Shape Types**: Circle, Square, and Isosceles Triangle
- **Colors**: Red, Blue, Green, Yellow, Purple (with live preview)
- **Size Fit**: 100×100px, 200×200px, 400×400px (triangles are mathematically centered within bounding box)
- **Position**: 9-point alignment system (Top Left, Top Center, Top Right, Center Left, Center, Center Right, Bottom Left, Bottom Center, Bottom Right)

### Layer Management
- Visual layer list showing all active shapes
- New shapes added to the top of the stack
- Individual delete action for each layer
- Color-coded layer indicators
- Hover interactions for improved UX

### Technical Highlights
- **Canvas API**: Native HTML5 Canvas rendering for optimal performance
- **State Management**: React hooks for efficient state updates
- **TypeScript**: Full type safety throughout the application
- **No Dependencies**: Pure implementation without third-party canvas/UI libraries
- **Responsive Design**: Works across different screen sizes

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajatgangwar-41/Assignment_Aframe_Studios-Canvas_Layer_Manager.git
cd Assignment_Aframe_Studios-Canvas_Layer_Manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000` (customized PORT=3000)

## Usage

1. **Select Shape**: Choose from Circle, Square, or Triangle
2. **Choose Color**: Pick from 5 available colors
3. **Set Size**: Select the bounding box size (100×100, 200×200, or 400×400)
4. **Pick Position**: Choose where to place the shape using the 9-point grid
5. **Add Shape**: Click the "Add Shape" button to render on canvas
6. **Manage Layers**: View all layers on the right panel and delete as needed

## Architecture

### Component Structure
```
CanvasApp
├── Controls (Left Sidebar)
│   ├── Shape Selector
│   ├── Color Picker
│   ├── Size Selector
│   ├── Position Selector
│   └── Add Button
├── Canvas (Center)
│   └── HTML5 Canvas Element
└── Layers (Right Sidebar)
    └── Layer List with Delete Actions
```

### Shape Rendering Logic

**Circle**: Rendered using `arc()` method with radius = size/2

**Square**: Rendered using `fillRect()` with dimensions = size×size

**Triangle**: Isosceles triangle mathematically centered in bounding box
- Top vertex: (x, y - size/2)
- Bottom right: (x + size/2, y + size/2)
- Bottom left: (x - size/2, y + size/2)

### Position Calculation
The 9-point alignment system calculates coordinates based on:
- Canvas dimensions (700×500)
- Shape size (bounding box)
- Selected position anchor point

Each position places the shape's center at the specified grid point.

## Technical Decisions

### Why No Third-Party Libraries?
- **Learning**: Direct Canvas API usage builds fundamental understanding
- **Performance**: No overhead from abstraction layers
- **Bundle Size**: Minimal dependencies = faster load times
- **Control**: Complete control over rendering pipeline

### TypeScript Benefits
- Type-safe shape definitions
- Compile-time error catching
- Better IDE autocomplete
- Self-documenting code

### State Management
React's `useState` and `useEffect` hooks provide sufficient state management for this application's scope. No need for Redux/Context as state is localized.

### Performance Optimizations
- Canvas cleared and redrawn only when shapes array changes
- Shapes rendered in reverse order (bottom to top)
- Efficient position calculation caching

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements
- [ ] Drag and drop shape reordering
- [ ] Shape editing after placement
- [ ] Export canvas as PNG/SVG
- [ ] Undo/Redo functionality
- [ ] Shape rotation controls
- [ ] Custom color picker
- [ ] Layer visibility toggle
- [ ] Canvas zoom and pan

## License
MIT License - feel free to use this project for learning or commercial purposes.

## Author
Built as a technical challenge demonstrating React, TypeScript, and Canvas API proficiency.

---

**Tech Stack**: React 19 • TypeScript • HTML5 Canvas API • Tailwind CSS • Lucide Icons