# Four Corners Stocks - UX Documentation

## Conceptual Overview

Four Corners Stocks is a multidimensional stock analysis platform designed to evaluate stocks through four distinct, complementary dimensions. The interface is built around a novel "circle nav stack" concept, leveraging spatial positioning to represent different analytical dimensions and their depth levels.

## The Four Dimensions

The application organizes stock analysis into four fundamental dimensions, each represented by a distinct color and positioned in a specific corner of the screen:

1. **Quantitative Fundamentals (QTF)** - Top Left - Blue

   - Focuses on measurable financial data like revenue growth, profit margins, and return on equity
   - Provides numerical basis for evaluating stock value

2. **Quantitative Technicals (QTT)** - Top Right - Orange

   - Addresses measurable market behavior such as price movements, volume patterns, and momentum indicators
   - Helps identify market trends and timing opportunities

3. **Qualitative Technicals (QLT)** - Bottom Left - Red

   - Examines market sentiment, trading psychology, and pattern recognition
   - Provides context for quantitative technical analysis

4. **Qualitative Fundamentals (QLF)** - Bottom Right - Purple
   - Explores company management, competitive positioning, and industry trends
   - Offers insights that numerical analysis might miss

## Circle Nav Stack Concept

Each dimension is represented by a "Circle Nav Stack" in its respective corner. These stacks are a key UX innovation:

### Stack Composition

- Each stack consists of three concentric quarter-circle elements
- The circles represent different levels of analytical depth within a dimension
- Level 1 (innermost circle): High-level overview and key metrics
- Level 2 (middle circle): Detailed analysis and comparisons
- Level 3 (outermost circle): In-depth specialized analysis and advanced metrics

### Visual Design

- Z-index ordering ensures that inner circles appear on top of outer circles, creating a 3D stack effect
- When hovering over any circle in the stack, it subtly enlarges and glows with its dimension color
- Active dimension/level has more pronounced visual highlighting
- The outermost circle of the active dimension displays a pulsing animation to reinforce the current context

## Navigation System

The application implements an intuitive navigation system that allows users to move between dimensions and depth levels:

### Keyboard Navigation

- **Left/Right Arrow Keys**: Navigate between dimensions in clockwise order:

  - QTF (top-left) → QTT (top-right) → QLT (bottom-left) → QLF (bottom-right)

- **Up/Down Arrow Keys**: Navigate between depth levels within a dimension
  - Top corners (QTF, QTT):
    - Up = Move to a smaller circle (lower level)
    - Down = Move to a larger circle (higher level)
  - Bottom corners (QLT, QLF):
    - Up = Move to a larger circle (higher level)
    - Down = Move to a smaller circle (lower level)

### Mouse Navigation

- Direct click on any circle in any stack to navigate directly to that dimension and level
- Hovering over a circle displays a subtle highlight to indicate interactivity

## Visual Feedback System

The interface provides clear visual cues to reinforce the user's current location:

- **Color Theming**: Each dimension has a distinct color that permeates all elements when active

  - Background subtly shifts to reflect the active dimension's color
  - Headers, indicators, and active navigation elements adopt the dimension's color

- **Dimension Indicator**: Clear textual indication of current dimension and level (e.g., "Current Section: QTF1")

- **3D Effect**: The entire interface has a subtle 3D quality
  - Content card appears to float above the background with a shadow
  - Active elements have increased elevation (via shadow depth)
  - Corner navigation stacks have a tiered appearance

## Design Philosophy

The Four Corners approach embodies several key UX principles:

1. **Spatial Memory**: Leveraging consistent corner positioning to help users build a mental map of the analysis dimensions
2. **Progressive Disclosure**: Using the three levels to reveal appropriate detail at each stage
3. **Contextual Awareness**: Maintaining clear visual indicators of the current dimension and level
4. **Efficient Navigation**: Allowing both quick jumps (via direct clicks) and methodical exploration (via arrow keys)
5. **Consistent Visual Language**: Using color, shape, and animation consistently to reinforce meaning

## Content Organization

Within each dimension and level, content is further organized into tabbed sections:

- Overview
- Metrics
- Analysis
- Historical Data

This creates a matrix of information that allows users to systematically explore stock data across dimensions, depth levels, and content categories.

## Technical Implementation Reference

### Key Components

1. **Navigation Containers**: Each corner has a dedicated container for its quarter-circle stack:

   ```html
   <div class="navigation-container qtf-container">
     <div class="quarter-circle QTF1" data-page="QTF1"></div>
     <div class="quarter-circle QTF2" data-page="QTF2"></div>
     <div class="quarter-circle QTF3" data-page="QTF3"></div>
   </div>
   ```

2. **Data Attributes**: Each circle has a `data-page` attribute that identifies its dimension and level:

   ```
   data-page="QTF1" => Quantitative Fundamentals, Level 1
   ```

3. **Dimension State Management**: Three key state variables track the current context:
   ```javascript
   let currentPage = 'QTF1'; // Full identifier of current page
   let currentSet = 'QTF'; // Current dimension abbreviation
   let currentLevel = 1; // Current depth level (1-3)
   ```

### Navigation Order Constants

The correct navigation order is defined in the JavaScript:

```javascript
const navigationOrder = ['QTF', 'QTT', 'QLT', 'QLF']; // Order: top-left, top-right, bottom-left, bottom-right
```

### Dimension-to-Position Mapping

Each dimension has a specific corner position:

```css
/* Top-left corner - Quantitative Fundamentals (QTF) */
.qtf-container {
  position: fixed;
  top: 0;
  left: 0;
}

/* Top-right corner - Quantitative Technicals (QTT) */
.qtt-container {
  position: fixed;
  top: 0;
  right: 0;
}

/* Bottom-left corner - Qualitative Technicals (QLT) */
.qlt-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

/* Bottom-right corner - Qualitative Fundamentals (QLF) */
.qlf-container {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### Z-Index Hierarchy

For proper 3D effect, z-index values must be maintained:

```css
/* Level 1 (innermost) circles */
.QTF1,
.QLF1,
.QTT1,
.QLT1 {
  z-index: 12; /* Highest z-index */
}

/* Level 2 (middle) circles */
.QTF2,
.QLF2,
.QTT2,
.QLT2 {
  z-index: 11; /* Middle z-index */
}

/* Level 3 (outermost) circles */
.QTF3,
.QLF3,
.QTT3,
.QLT3 {
  z-index: 10; /* Lowest z-index */
}

/* When a circle is active, boost its z-index further */
.active-circle {
  z-index: 13; /* Always on top */
}
```

### Color Theme Constants

Each dimension has a specific color scheme:

- QTF (Blue): `rgba(33, 150, 243, X)` / `#2196f3`
- QTT (Orange): `rgba(255, 152, 0, X)` / `#ff9800`
- QLT (Red): `rgba(244, 67, 54, X)` / `#f44336`
- QLF (Purple): `rgba(156, 39, 176, X)` / `#9c27b0`

where X represents the opacity value (0.3 for hover, 0.5-0.9 for active states)

### Keyboard Navigation Logic

The keyboard navigation logic depends on the corner position:

```javascript
// Determining if a dimension is in the top or bottom half
function isTopSet(set) {
  return set === 'QTF' || set === 'QTT';
}

// Different up/down behavior based on position
if (isTopSet(currentSet)) {
  // Top corners: Up = smaller circle/lower level
  // Top corners: Down = larger circle/higher level
} else {
  // Bottom corners: Up = larger circle/higher level
  // Bottom corners: Down = smaller circle/lower level
}
```

### Page Update Process

When changing dimensions or levels, the following steps occur:

1. Remove all active classes from navigation elements
2. Update the current dimension and level variables
3. Apply the dimension's color theme to the page
4. Mark the new active circle
5. Update the dimension indicator text
6. Apply a pulsing animation to the outermost circle of the active dimension

This reference information should help maintain consistency in the application's design and behavior during future development.
