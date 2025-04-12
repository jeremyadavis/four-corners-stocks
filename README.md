# Four Corners Stocks

A web application that demonstrates a unique quarter-circle navigation system for financial data visualization based on a dimensional analysis approach.

## Dimensional Analysis Matrix

The application organizes stock analysis across two key dimensions:
| | **Quantitative** | **Qualitative** |
|--------------------|----------------------------------|--------------------------------|
| **Fundamentals** | **(QTF) Quantitative Fundamentals** | **(QLF) Qualitative Fundamentals** |
| **Technicals** | **(QTT) Quantitative Technicals** | **(QLT) Qualitative Technicals** |

## Features

- Concentric quarter-circle navigation in all four corners representing different analysis dimensions
- Keyboard navigation using arrow keys (up/down/left/right)
- Visual feedback for the currently selected page
- Contextual up/down navigation that changes behavior based on corner position

## Navigation

- **Quantitative Fundamentals (QTF) - Top Left:**

  - QTF1: Inner light gray circle (smallest)
  - QTF2: Middle dark gray circle (medium)
  - QTF3: Outer red circle (largest)

- **Qualitative Fundamentals (QLF) - Top Right:**

  - QLF1: Inner light blue circle (smallest)
  - QLF2: Middle medium blue circle (medium)
  - QLF3: Outer dark blue circle (largest)

- **Quantitative Technicals (QTT) - Bottom Left:**

  - QTT1: Inner light green-blue circle (smallest)
  - QTT2: Middle medium green-blue circle (medium)
  - QTT3: Outer teal circle (largest)

- **Qualitative Technicals (QLT) - Bottom Right:**
  - QLT1: Inner light orange circle (smallest)
  - QLT2: Middle pink circle (medium)
  - QLT3: Outer mauve circle (largest)

### Navigation Controls

- Use **LEFT/RIGHT** arrow keys to cycle between all corner navigation sets (QTF → QLF → QTT → QLT → QTF)
- **Top Corners Navigation:**
  - **UP** arrow key: Navigate to smaller/inner circles
  - **DOWN** arrow key: Navigate to larger/outer circles
- **Bottom Corners Navigation:**
  - **UP** arrow key: Navigate to larger/outer circles
  - **DOWN** arrow key: Navigate to smaller/inner circles
- Click directly on any circle to select it

## Dimensions Explained

- **Quantitative Fundamentals (QTF):** Numerical data about a company's financial performance (e.g., revenue, profit margins, P/E ratio)
- **Qualitative Fundamentals (QLF):** Non-numerical assessments of a company's strengths (e.g., management quality, competitive advantage, industry trends)
- **Quantitative Technicals (QTT):** Numerical price and volume data (e.g., moving averages, RSI, MACD)
- **Qualitative Technicals (QLT):** Pattern recognition and subjective technical analysis (e.g., chart patterns, candlestick formations)

## Setup

1. Clone the repository:

```
git clone https://github.com/jeremyadavis/four-corners-stocks.git
cd four-corners-stocks
```

2. Open in a browser:

```
open index.html
```

Or use a local server:

```
# Using Python 3
python -m http.server

# Using Python 2
python -m SimpleHTTPServer
```

## Project Structure

- `index.html` - Main HTML structure
- `styles.css` - Styling for the navigation and layout
- `script.js` - JavaScript for handling navigation and interactions

## License

MIT

# four-corners-stocks
