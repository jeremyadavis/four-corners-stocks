# Four Corners Stocks

A web application that demonstrates a unique quarter-circle navigation system for financial data visualization.

## Features

- Concentric quarter-circle navigation in all four corners (top-left, top-right, bottom-left, bottom-right)
- Keyboard navigation using arrow keys (up/down/left/right)
- Visual feedback for the currently selected page
- Contextual up/down navigation that changes behavior based on corner position

## Navigation

- **Top Left (TL) Navigation:**

  - TL1: Inner light gray circle (smallest)
  - TL2: Middle dark gray circle (medium)
  - TL3: Outer red circle (largest)

- **Top Right (TR) Navigation:**

  - TR1: Inner light blue circle (smallest)
  - TR2: Middle medium blue circle (medium)
  - TR3: Outer dark blue circle (largest)

- **Bottom Left (BL) Navigation:**

  - BL1: Inner light green-blue circle (smallest)
  - BL2: Middle medium green-blue circle (medium)
  - BL3: Outer teal circle (largest)

- **Bottom Right (BR) Navigation:**
  - BR1: Inner light orange circle (smallest)
  - BR2: Middle pink circle (medium)
  - BR3: Outer mauve circle (largest)

### Navigation Controls

- Use **LEFT/RIGHT** arrow keys to cycle between all corner navigation sets (TL → TR → BL → BR → TL)
- **Top Corners Navigation:**
  - **UP** arrow key: Navigate to smaller/inner circles
  - **DOWN** arrow key: Navigate to larger/outer circles
- **Bottom Corners Navigation:**
  - **UP** arrow key: Navigate to larger/outer circles
  - **DOWN** arrow key: Navigate to smaller/inner circles
- Click directly on any circle to select it

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
