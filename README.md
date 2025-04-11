# Four Corners Stocks

A web application that demonstrates a unique quarter-circle navigation system for financial data visualization.

## Features

- Concentric quarter-circle navigation in the top-left corner
- Keyboard navigation using arrow keys
- Visual feedback for the currently selected page

## Navigation

- **Top Left (TL) Navigation:**

  - TL1: Inner light gray circle (smallest)
  - TL2: Middle dark gray circle
  - TL3: Outer red circle (largest)

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