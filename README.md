# Four Corners Stocks

A web application that demonstrates a unique quarter-circle navigation system for financial data visualization.

## Features

- Concentric quarter-circle navigation in the top-left and top-right corners
- Keyboard navigation using arrow keys (up/down/left/right)
- Visual feedback for the currently selected page

## Navigation

- **Top Left (TL) Navigation:**
  - TL1: Inner light gray circle (smallest)
  - TL2: Middle dark gray circle (medium)
  - TL3: Outer red circle (largest)

- **Top Right (TR) Navigation:**
  - TR1: Inner light blue circle (smallest)
  - TR2: Middle medium blue circle (medium)
  - TR3: Outer dark blue circle (largest)

- Use **LEFT/RIGHT** arrow keys to switch between Top-Left and Top-Right navigation sets
- Use **UP** arrow key to navigate to smaller/inner circles
- Use **DOWN** arrow key to navigate to larger/outer circles
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