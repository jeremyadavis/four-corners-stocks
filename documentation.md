# Four Corners Stocks - Documentation

## Project Philosophy and Approach

### Summary of Our Stock Analysis Approach Using Four Dimensions

This framework organizes stock analysis into **four dimensions**, arranged in a 2×2 matrix. The _top row_ deals with **Fundamentals**, and the _bottom row_ deals with **Technicals**. The _left column_ represents **Quantitative** factors, while the _right column_ represents **Qualitative** factors.

|                  | **Quantitative**                  | **Qualitative**                  |
| ---------------- | --------------------------------- | -------------------------------- |
| **Fundamentals** | **(A) Quantitative Fundamentals** | **(B) Qualitative Fundamentals** |
| **Technicals**   | **(C) Quantitative Technicals**   | **(D) Qualitative Technicals**   |

### Why We Use Four Dimensions

1. **Comprehensive Coverage**

   - By splitting fundamentals (the business's core reality) from technicals (market-driven data), and by separating quantitative (numerical) aspects from qualitative (strategic/intangible) aspects, we ensure no critical angle is missed.

2. **Clarity & Organization**

   - Each dimension focuses on a well-defined set of data points:
     - **(A) Quantitative Fundamentals**: Financial statements, ratios, valuation metrics.
     - **(B) Qualitative Fundamentals**: Moat, management quality, brand strength, corporate strategy.
     - **(C) Quantitative Technicals**: Price/volume trends, chart patterns, momentum indicators.
     - **(D) Qualitative Technicals**: Market sentiment, news-driven hype or fear, analyst/influencer opinions.

3. **Flexible Analysis**
   - Long-term investors may want to focus on the fundamentals first, while traders might emphasize the technicals first. The framework adapts to both styles yet maintains a consistent, systematic approach.

### Incorporating the Three Levels of Analysis

In each dimension, you can evaluate at three key levels:

1. **Macro (Market/Global) Level**
   - Consider overall economic indicators (e.g., GDP growth, interest rates, global events) and how they shape _all_ stocks.
2. **Sector (Industry) Level**
   - Investigate industry-specific drivers (e.g., competition, regulation, consumer trends) that influence a cluster of companies.
3. **Company (Stock) Level**
   - Drill down to the individual firm's metrics, strategy, price action, and public narrative.

This **top-down** (or bottom-up) approach lets you see how broad economic conditions and sector trends trickle down to a single stock's performance—or vice versa.

### Goals of This Effort

1. **Create a Structured "Checklist"**

   - By naming these four dimensions, we avoid skipping critical factors and maintain a clear, repeatable process.

2. **Balance Quantitative vs. Qualitative Insights**

   - We capture both the _hard data_ (financial health, market price trends) and the _softer_ but equally important aspects (management quality, investor psychology).

3. **Enable Future "Lenses"**

   - We reserve the word **lens** for specialized viewpoints—like a "Warren Buffett lens" or "Peter Lynch lens"—which can overlay specific priorities or styles on top of these four dimensions.

4. **Accommodate Different Investing Styles**
   - Whether you're a value investor, a growth-focused analyst, or a momentum trader, these four dimensions provide a universal foundation. You simply adjust which dimensions get the most emphasis.

### How It Comes Together

- **Fundamentals (Row 1):** Ask, "Is this a _good_ business?"

  - **(A) Quantitative Fundamentals**: Are the financial metrics attractive and stable?
  - **(B) Qualitative Fundamentals**: Does the company have a durable edge (moat) and capable leadership?

- **Technicals (Row 2):** Ask, "How is the _market_ treating this business _right now_?"
  - **(C) Quantitative Technicals**: Do price/volume trends suggest strength or weakness?
  - **(D) Qualitative Technicals**: Are investors euphoric, fearful, or indifferent, and why?

By evaluating each dimension at **Macro, Sector, and Company** levels, you build a **comprehensive view** of both the _intrinsic qualities_ of the stock and the _market conditions_ affecting its price and sentiment.

### Final Note

This **dimensions-based** approach offers a **clear, consistent** way to analyze any stock. Later, you can apply **special "lenses"** (investor-specific approaches) on top of these dimensions to align with a particular investing philosophy (e.g., Buffett's emphasis on moats, Lynch's focus on everyday business understanding, etc.).

## UX Documentation

### Conceptual Overview

Four Corners Stocks is a multidimensional stock analysis platform designed to evaluate stocks through four distinct, complementary dimensions. The interface is built around a novel "circle nav stack" concept, leveraging spatial positioning to represent different analytical dimensions and their depth levels.

It also promotes rapid analysis due to using keyboard navigation to cycle between and through dimensions.

### Dimension Matrix

The Four Corners approach organizes stock analysis along two axes, with the screen position of each dimension matching its place in the conceptual matrix:

|                  | **Quantitative**              | **Qualitative**             |
| ---------------- | ----------------------------- | --------------------------- |
| **Fundamentals** | **QTF** (Top-Left, Blue)      | **QLF** (Top-Right, Purple) |
| **Technicals**   | **QTT** (Bottom-Left, Orange) | **QLT** (Bottom-Right, Red) |

### The Four Dimensions

The application organizes stock analysis into four fundamental dimensions, each represented by a distinct color and positioned in a specific corner of the screen:

1. **Quantitative Fundamentals (QTF)** - Top Left - Blue

   - Focuses on measurable financial data like revenue growth, profit margins, and return on equity
   - Provides numerical basis for evaluating stock value

2. **Qualitative Fundamentals (QLF)** - Top Right - Purple

   - Explores company management, competitive positioning, and industry trends
   - Offers insights that numerical analysis might miss

3. **Quantitative Technicals (QTT)** - Bottom Left - Orange

   - Addresses measurable market behavior such as price movements, volume patterns, and momentum indicators
   - Helps identify market trends and timing opportunities

4. **Qualitative Technicals (QLT)** - Bottom Right - Red
   - Examines market sentiment, trading psychology, and pattern recognition
   - Provides context for quantitative technical analysis

### Circle Nav Stack Concept

Each dimension is represented by a "Circle Nav Stack" in its respective corner. These stacks are a key UX innovation:

#### Stack Composition

- Each stack consists of three concentric quarter-circle elements
- The circles represent different levels of analytical scope within a dimension:
  - Level 1 (innermost circle): Company-specific analysis - closest to the analyzed stock
  - Level 2 (middle circle): Sector/industry analysis - broader context
  - Level 3 (outermost circle): Macro/country level analysis - widest context

#### Visual Design

- Z-index ordering ensures that inner circles appear on top of outer circles, creating a 3D stack effect
- Color opacity reinforces the proximity concept:
  - Innermost circle (Level 1): Full opacity (100%) - direct focus on the company
  - Middle circle (Level 2): Medium opacity (50%) - sector context
  - Outermost circle (Level 3): Light opacity (25%) - macro environment
- When hovering over any circle in the stack, it subtly enlarges and glows with its dimension color
- Active dimension/level has more pronounced visual highlighting
- The outermost circle of the active dimension displays a pulsing animation to reinforce the current context

### Navigation System

The application implements an intuitive navigation system that allows users to move between dimensions and depth levels:

#### Keyboard Navigation

- **Left/Right Arrow Keys**: Navigate between dimensions in the following order:

  - QTF (top-left) → QLF (top-right) → QTT (bottom-left) → QLT (bottom-right)

- **Up/Down Arrow Keys**: Navigate between depth levels within a dimension
  - Top corners (QTF, QLF):
    - Up = Move to a smaller circle (lower level)
    - Down = Move to a larger circle (higher level)
  - Bottom corners (QTT, QLT):
    - Up = Move to a larger circle (higher level)
    - Down = Move to a smaller circle (lower level)

#### Mouse Navigation

- Direct click on any circle in any stack to navigate directly to that dimension and level
- Hovering over a circle displays a subtle highlight to indicate interactivity

### Visual Feedback System

The interface provides clear visual cues to reinforce the user's current location:

- **Color Theming**: Each dimension has a distinct color that permeates all elements when active

  - Background subtly shifts to reflect the active dimension's color
  - Headers, indicators, and active navigation elements adopt the dimension's color

- **Dimension Indicator**: Clear textual indication of current dimension and level (e.g., "Current Section: QTF1")

- **3D Effect**: The entire interface has a subtle 3D quality
  - Content card appears to float above the background with a shadow
  - Active elements have increased elevation (via shadow depth)
  - Corner navigation stacks have a tiered appearance

### Design Philosophy

The Four Corners approach embodies several key UX principles:

1. **Spatial Memory**: Leveraging consistent corner positioning to help users build a mental map of the analysis dimensions
2. **Progressive Disclosure**: Using the three levels to reveal appropriate detail at each stage
3. **Contextual Awareness**: Maintaining clear visual indicators of the current dimension and level
4. **Efficient Navigation**: Allowing both quick jumps (via direct clicks) and methodical exploration (via arrow keys)
5. **Consistent Visual Language**: Using color, shape, and animation consistently to reinforce meaning

### Content Organization

Within each dimension and level, content is further organized into tabbed sections:

- Overview
- Metrics
- Analysis
- Historical Data

This creates a matrix of information that allows users to systematically explore stock data across dimensions, depth levels, and content categories.

### Technical Implementation Reference

#### Key Components

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

#### Navigation Order Constants

The correct navigation order is defined in the JavaScript:

```javascript
const navigationOrder = ['QTF', 'QLF', 'QTT', 'QLT']; // Order: top-left, bottom-right, top-right, bottom-left
```

#### Dimension-to-Position Mapping

Each dimension is mapped to a specific corner position that matches its place in the conceptual matrix:

```css
/* Top-left corner - Quantitative Fundamentals (QTF) */
.qtf-container {
  position: fixed;
  top: 0;
  left: 0;
}

/* Top-right corner - Qualitative Fundamentals (QLF) */
.qlf-container {
  position: fixed;
  top: 0;
  right: 0;
}

/* Bottom-left corner - Quantitative Technicals (QTT) */
.qtt-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

/* Bottom-right corner - Qualitative Technicals (QLT) */
.qlt-container {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

#### Z-Index Hierarchy

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

#### Color Theme Constants

Each dimension has a specific color scheme, with opacity varying by level to indicate proximity to the analyzed stock:

- QTF (Blue):

  - Level 1 (Company): `rgba(33, 150, 243, 1.0)` / `#2196f3`
  - Level 2 (Sector): `rgba(33, 150, 243, 0.5)`
  - Level 3 (Macro): `rgba(33, 150, 243, 0.25)`

- QTT (Orange):

  - Level 1 (Company): `rgba(255, 152, 0, 1.0)` / `#ff9800`
  - Level 2 (Sector): `rgba(255, 152, 0, 0.5)`
  - Level 3 (Macro): `rgba(255, 152, 0, 0.25)`

- QLT (Red):

  - Level 1 (Company): `rgba(244, 67, 54, 1.0)` / `#f44336`
  - Level 2 (Sector): `rgba(244, 67, 54, 0.5)`
  - Level 3 (Macro): `rgba(244, 67, 54, 0.25)`

- QLF (Purple):
  - Level 1 (Company): `rgba(156, 39, 176, 1.0)` / `#9c27b0`
  - Level 2 (Sector): `rgba(156, 39, 176, 0.5)`
  - Level 3 (Macro): `rgba(156, 39, 176, 0.25)`

Hover states also follow this progression with slightly lower opacities (0.8, 0.4, 0.2) to maintain the visual hierarchy while indicating interactivity.

#### Keyboard Navigation Logic

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

#### Page Update Process

When changing dimensions or levels, the following steps occur:

1. Remove all active classes from navigation elements
2. Update the current dimension and level variables
3. Apply the dimension's color theme to the page
4. Mark the new active circle
5. Update the dimension indicator text
6. Apply a pulsing animation to the outermost circle of the active dimension

This reference information should help maintain consistency in the application's design and behavior during future development.
