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

Within each dimension and level, content is further organized into tabbed sections. Each dimension has a specific set of 5 sub-navigation items that can be applied consistently across all three levels (Macro, Sector, Company):

#### Quantitative Fundamentals (QTF) Sub-Navigation

1. **Overview**

   - High-level snapshot of key numerical indicators (e.g., summary of growth, profitability, or market size).

2. **Valuation**

   - Focus on valuation metrics (P/E, EV/EBITDA, price-to-book, etc.) and how they compare to historical or peer benchmarks.

3. **Performance & Growth**

   - Examines revenue/earnings growth rates, margin trends, and overall trajectory of financial performance.

4. **Financial Health**

   - Looks at balance sheet strength (debt ratios, liquidity), cash flow stability, and solvency.

5. **Comparisons & Benchmarks**
   - Compares the entity (macro, sector, or company) against peers, historical ranges, or global standards.

#### Qualitative Fundamentals (QLF) Sub-Navigation

1. **Overview**

   - Summarizes big-picture qualitative factors: major themes, strategic context, or overarching narratives at the relevant level.

2. **Competitive Landscape**

   - Evaluates the nature of competition, barriers to entry, and potential sources of competitive advantage.

3. **Strategy & Leadership**

   - Reviews governance structures, management track record, corporate culture, and strategic direction.

4. **Regulatory & Policy Factors**

   - Considers key regulations, government policies, and industry-specific rules shaping the playing field.

5. **Risks & Opportunities**
   - Identifies headwinds or tailwinds, disruptive technologies, or shifts in consumer preferences.

#### Quantitative Technicals (QTT) Sub-Navigation

1. **Overview**

   - Quick synopsis of the current technical "picture," such as index/stock chart highlights or recent price movements.

2. **Price & Volume Trends**

   - Analyzes how price is moving (trend lines, support/resistance) and whether volume supports those moves.

3. **Momentum Indicators**

   - Focus on RSI, MACD, moving averages, or other standard signals showing overbought/oversold conditions.

4. **Volatility & Liquidity**

   - Examines measures like beta, average daily trading volume, bid-ask spreads, or market-wide volatility indices.

5. **Historical Patterns & Comparisons**
   - Looks at past price cycles, seasonality, or longer-term chart patterns to contextualize current technical signals.

#### Qualitative Technicals (QLT) Sub-Navigation

1. **Overview**

   - High-level summary of market mood, media coverage, and prevailing sentiment across the chosen level.

2. **Market Sentiment & Media**

   - Gathers insights from headlines, social media, retail investor buzz, or broader sentiment indicators.

3. **Analyst & Expert Opinions**

   - Collates ratings, target price changes, macro or sector forecasts, and commentary from notable experts.

4. **Behavioral Indicators**

   - Highlights insider buying/selling, short interest, crowd psychology, and fear/greed dynamics.

5. **Key Events & Catalysts**
   - Identifies upcoming earnings reports, product launches, regulatory decisions, or geopolitical events that might shift sentiment.

This creates a comprehensive matrix of information that allows users to systematically explore stock data across dimensions, depth levels, and specific content categories. For any given stock analysis, there are 4 dimensions × 3 levels × 5 sub-navigation items = 60 potential views, providing a holistic analytical framework.

#### Sub-Navigation Implementation

The sub-navigation for each dimension and level is implemented as a horizontal tab bar positioned below the main content heading. When users navigate to a specific dimension and level (e.g., QTF2 - Quantitative Fundamentals at Sector level), they will see the appropriate set of 5 tabs for that dimension:

- The tabs will adopt the color scheme of the active dimension (blue for QTF, purple for QLF, etc.)
- The active tab will be highlighted with full opacity of the dimension color
- Users can navigate between tabs using:
  - Direct click on the tab
  - Tab key (with focus indicator)
  - Number keys 1-5 when the content area is in focus

The sub-navigation persists when moving between levels within the same dimension, preserving the selected tab where appropriate. When moving between dimensions, the system defaults to the Overview tab until the user selects a different one.

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

#### Sub-Navigation Technical Implementation

The sub-navigation system will extend the existing navigation framework with the following components:

1. **Tab Definition Structure**:

```javascript
// Define sub-navigation items for each dimension
const subNavItems = {
  QTF: [
    'Overview',
    'Valuation',
    'Performance & Growth',
    'Financial Health',
    'Comparisons & Benchmarks',
  ],
  QLF: [
    'Overview',
    'Competitive Landscape',
    'Strategy & Leadership',
    'Regulatory & Policy Factors',
    'Risks & Opportunities',
  ],
  QTT: [
    'Overview',
    'Price & Volume Trends',
    'Momentum Indicators',
    'Volatility & Liquidity',
    'Historical Patterns & Comparisons',
  ],
  QLT: [
    'Overview',
    'Market Sentiment & Media',
    'Analyst & Expert Opinions',
    'Behavioral Indicators',
    'Key Events & Catalysts',
  ],
};

// Track the active sub-navigation tab for each dimension
const activeSubNav = {
  QTF: 0, // Default to Overview (index 0)
  QLF: 0,
  QTT: 0,
  QLT: 0,
};
```

2. **HTML Structure**:

```html
<div class="subnav-container">
  <ul class="subnav-tabs" id="currentDimensionSubnav">
    <!-- Tab items are generated dynamically based on the active dimension -->
  </ul>
</div>

<div class="content-container">
  <div class="content-section active" id="content-section-0">
    <!-- Content for first tab (Overview) -->
  </div>
  <!-- Additional content sections are generated dynamically -->
</div>
```

3. **Tab Generation Function**:

```javascript
function updateSubnavTabs() {
  const tabs = subNavItems[currentSet]; // Get tabs for current dimension
  const subnavElement = document.getElementById('currentDimensionSubnav');

  // Clear existing tabs
  subnavElement.innerHTML = '';

  // Generate new tabs
  tabs.forEach((tabName, index) => {
    const tabElement = document.createElement('li');
    tabElement.className = 'subnav-tab';
    tabElement.dataset.index = index;
    tabElement.innerText = tabName;

    if (index === activeSubNav[currentSet]) {
      tabElement.classList.add('active-tab');
    }

    tabElement.addEventListener('click', () => {
      switchSubnavTab(index);
    });

    subnavElement.appendChild(tabElement);
  });
}
```

4. **Tab Switching Logic**:

```javascript
function switchSubnavTab(tabIndex) {
  // Update active tab tracking
  activeSubNav[currentSet] = tabIndex;

  // Update UI to show active tab
  document.querySelectorAll('.subnav-tab').forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add('active-tab');
    } else {
      tab.classList.remove('active-tab');
    }
  });

  // Show corresponding content
  document.querySelectorAll('.content-section').forEach((section, index) => {
    if (index === tabIndex) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}
```

5. **Keyboard Navigation Enhancement**:

```javascript
// Add to existing keyboard event handler
document.addEventListener('keydown', (event) => {
  // Existing dimension and level navigation...

  // Number keys 1-5 for subnav tabs
  if (event.key >= '1' && event.key <= '5') {
    const tabIndex = parseInt(event.key) - 1;
    switchSubnavTab(tabIndex);
  }

  // Tab key navigation when content area is focused
  // (Implementation will depend on focus management system)
});
```

6. **Persistence between Level Changes**:

```javascript
// Modify the existing page update function to preserve sub-nav state
function updatePage(newPage) {
  // Get dimension and level from page identifier
  const newSet = newPage.substring(0, 3);

  // If dimension is changing, default to Overview tab
  if (newSet !== currentSet) {
    // Reset to Overview tab for new dimension
    switchSubnavTab(0);
  }

  // Existing page update code...

  // Update subnav tabs for the current dimension
  updateSubnavTabs();
}
```

This implementation maintains the existing navigation architecture while adding the sub-navigation layer that adapts to the current dimension. It preserves state appropriately when navigating and allows for both mouse and keyboard interaction.
