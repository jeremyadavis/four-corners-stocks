document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  // Remove references to the elements that no longer exist
  // const currentPageIndicator = document.getElementById('current-page');
  // const currentDimensionIndicator = document.getElementById('current-dimension');

  // Add reference to the new dimension level title element
  const dimensionLevelTitle = document.getElementById('dimension-level-title');
  const dimensionSubnav = document.getElementById('dimension-subnav');
  const backgroundChart = document.getElementById('backgroundChart');
  const timeButtons = document.querySelectorAll('.time-button');
  const chartDebug = document.getElementById('chart-debug');

  // Define dimension names
  const dimensionNames = {
    QTF: 'Quantitative Fundamentals',
    QTT: 'Quantitative Technicals',
    QLT: 'Qualitative Technicals',
    QLF: 'Qualitative Fundamentals',
  };

  // Define level names
  const levelNames = {
    1: 'Company',
    2: 'Sector',
    3: 'Macro',
  };

  // Define sub-navigation items for each dimension based on documentation
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

  // Define navigation order for cycling between corners
  const navigationOrder = ['QTF', 'QLF', 'QTT', 'QLT']; // Updated order: top-left, top-right, bottom-left, bottom-right

  // Define dimension colors for chart line
  const dimensionColors = {
    QTF: '#2196f3', // Blue
    QLF: '#9c27b0', // Purple
    QTT: '#ff9800', // Orange
    QLT: '#f44336', // Red
  };

  // Chart data and contexts
  let chartContext = null;
  let chartInstance = null;
  let currentTimeFrame = '3M'; // Default timeframe

  // Set initial state
  let currentPage = 'QTF1';
  let currentSet = 'QTF'; // Now can be 'QTF', 'QTT', 'QLT', or 'QLF'
  let currentLevel = 1; // 1, 2, or 3

  // Check if a set is in the top half or bottom half
  function isTopSet(set) {
    return set === 'QTF' || set === 'QLF';
  }

  // Update the subnav tabs based on the active dimension
  function updateSubnavTabs() {
    if (!dimensionSubnav) return;

    const tabs = subNavItems[currentSet]; // Get tabs for current dimension

    // Clear existing tabs
    dimensionSubnav.innerHTML = '';

    // Generate new tabs
    tabs.forEach((tabName, index) => {
      const tabElement = document.createElement('li');
      tabElement.className = 'sub-nav-item';
      if (index === activeSubNav[currentSet]) {
        tabElement.classList.add('active');
      }

      const linkElement = document.createElement('a');
      linkElement.href = '#';
      linkElement.textContent = tabName;

      // Add click event to handle tab switching
      linkElement.addEventListener('click', (e) => {
        e.preventDefault();
        switchSubnavTab(index);
      });

      tabElement.appendChild(linkElement);
      dimensionSubnav.appendChild(tabElement);
    });
  }

  // Handle switching between subnav tabs
  function switchSubnavTab(tabIndex) {
    // Update active tab tracking
    activeSubNav[currentSet] = tabIndex;

    // Update UI to show active tab
    const subNavItems = dimensionSubnav.querySelectorAll('.sub-nav-item');
    subNavItems.forEach((item, index) => {
      if (index === tabIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Here you would also update the content section to match the selected tab
    // For now, we'll just update the tab UI
  }

  // Initialize the background chart
  function initChart() {
    if (!backgroundChart) {
      console.error('Background chart element not found');
      return;
    }

    chartContext = backgroundChart.getContext('2d');

    // Set canvas dimensions to match container
    resizeChart();

    // Create initial chart data
    drawChart();

    // Handle time button clicks
    timeButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Update active button
        timeButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        // Update timeframe and redraw chart
        currentTimeFrame = button.dataset.time;
        drawChart();
      });
    });

    // Handle window resize
    window.addEventListener('resize', function () {
      resizeChart();
    });
  }

  // Resize chart canvas to match container
  function resizeChart() {
    if (!backgroundChart) return;

    const container = backgroundChart.parentElement;
    backgroundChart.width = window.innerWidth; // Explicitly use window width
    backgroundChart.height = container.offsetHeight;

    // Redraw chart after resize
    drawChart();
  }

  // Generate random stock-like data
  function generateChartData(points) {
    const data = [];
    let value = 100 + Math.random() * 20;

    // Create a general trend direction (slightly upward bias)
    const trendStrength = 0.02; // Subtle trend factor

    // Generate some "market events" - points where trend might change
    const events = [];
    const numEvents = Math.floor(points / 30) + 1; // Approximately one event per month

    for (let i = 0; i < numEvents; i++) {
      events.push({
        position: Math.floor(Math.random() * points),
        effect: (Math.random() - 0.4) * 3, // Slight upward bias in events
      });
    }

    // Generate points with both random walk and trend influence
    for (let i = 0; i < points; i++) {
      // Check for market events
      const eventEffect = events.find((e) => e.position === i);

      // Base change is mostly random but with a slight trend bias
      let change = (Math.random() - 0.5) * 0.8; // Random component (smaller than before)
      change += trendStrength; // Add trend component

      // Apply event effect if there is one
      if (eventEffect) {
        change += eventEffect.effect;
      }

      // Apply the change
      value += change;

      // Ensure value stays positive and within a reasonable range
      value = Math.max(80, Math.min(value, 120));

      data.push(value);
    }

    // Smooth the data slightly to make it look more natural
    const smoothedData = [];
    const smoothingFactor = 3;

    for (let i = 0; i < data.length; i++) {
      if (i < smoothingFactor || i >= data.length - smoothingFactor) {
        smoothedData.push(data[i]); // Keep edges as-is
      } else {
        // Simple moving average
        let sum = 0;
        for (let j = i - smoothingFactor; j <= i + smoothingFactor; j++) {
          sum += data[j];
        }
        smoothedData.push(sum / (smoothingFactor * 2 + 1));
      }
    }

    return smoothedData;
  }

  // Update debug info
  function updateDebugInfo(message) {
    if (chartDebug) {
      chartDebug.innerHTML = message;
    }
  }

  // Draw the background chart
  function drawChart() {
    if (!chartContext) {
      console.error('Chart context not found');
      return;
    }

    try {
      // Clear previous chart instance
      if (chartInstance) {
        chartInstance = null;
      }

      // Generate data based on timeframe
      let dataPoints;
      switch (currentTimeFrame) {
        case '1D':
          dataPoints = 24;
          break;
        case '1W':
          dataPoints = 7;
          break;
        case '1M':
          dataPoints = 30;
          break;
        case '3M':
          dataPoints = 90;
          break;
        case 'YTD':
          dataPoints = 120;
          break;
        case '1Y':
          dataPoints = 365;
          break;
        case '5Y':
          dataPoints = 180;
          break;
        case 'MAX':
          dataPoints = 240;
          break;
        default:
          dataPoints = 90;
      }

      const data = generateChartData(dataPoints);

      // Get current dimension color
      const lineColor = dimensionColors[currentSet];

      // Draw the line chart manually for simplicity and control
      const ctx = chartContext;
      const width = backgroundChart.width;
      const height = backgroundChart.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Start drawing the line
      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 2; // Adjusted line width

      // Calculate points for the chart
      const pointSpacing = width / (data.length - 1);
      const maxValue = Math.max(...data);
      const minValue = Math.min(...data);
      const valueRange = maxValue - minValue;

      // Position the chart in the bottom portion of the screen
      const chartHeight = height * 0.25; // 25% of total height
      const chartTop = height * 0.65; // Start at 65% down the screen
      const scaleFactor = chartHeight / valueRange;

      // Move to first point
      let x = 0;
      let y = chartTop + chartHeight - (data[0] - minValue) * scaleFactor;
      ctx.moveTo(x, y);

      // Draw line through all points
      for (let i = 1; i < data.length; i++) {
        x = i * pointSpacing;
        y = chartTop + chartHeight - (data[i] - minValue) * scaleFactor;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    } catch (e) {
      console.error('Draw error:', e);
    }
  }

  // Update visibility of page elements
  function updatePageVisibility() {
    // Remove the page indicator text updates since elements no longer exist
    // currentPageIndicator.textContent = currentPage;
    // currentDimensionIndicator.textContent = dimensionNames[currentSet];

    // Update the dimension level title
    if (dimensionLevelTitle) {
      dimensionLevelTitle.textContent = `${dimensionNames[currentSet]}: ${levelNames[currentLevel]}`;
    }

    // Update sub-navigation tabs to match the current dimension
    updateSubnavTabs();

    // Set base z-index for all corners
    const corners = ['QTF', 'QLF', 'QTT', 'QLT'];

    // First, remove 'corner-active' class from all outer circles
    corners.forEach((corner) => {
      const outerCircle = document.querySelector(`.${corner}3`);
      if (outerCircle) {
        outerCircle.classList.remove('corner-active');
      }
    });

    // Remove all corner background classes from body
    document.body.classList.remove('bg-qtf', 'bg-qlf', 'bg-qtt', 'bg-qlt');

    // Add the current corner's background class to body
    document.body.classList.add(`bg-${currentSet.toLowerCase()}`);

    // Reset all circles to inactive state
    quarterCircles.forEach((circle) => {
      circle.classList.add('inactive');
      circle.classList.remove('active');

      // Ensure proper z-index based on level
      const circleLevel = parseInt(circle.className.match(/[A-Z]{3}(\d)/)[1]);
      if (circleLevel === 1) {
        circle.style.zIndex = 12;
      } else if (circleLevel === 2) {
        circle.style.zIndex = 11;
      } else if (circleLevel === 3) {
        circle.style.zIndex = 10;
      }
    });

    // Implement cascading active state for circles in the current dimension
    if (currentLevel >= 1) {
      // Level 1 is always active when current dimension is selected
      const level1Selector = `.${currentSet}1`;
      const level1Element = document.querySelector(level1Selector);
      if (level1Element) {
        level1Element.classList.add('active');
        level1Element.classList.remove('inactive');
        level1Element.style.zIndex = 12;
      }
    }

    if (currentLevel >= 2) {
      // Level 2 is active when level 2 or 3 is selected
      const level2Selector = `.${currentSet}2`;
      const level2Element = document.querySelector(level2Selector);
      if (level2Element) {
        level2Element.classList.add('active');
        level2Element.classList.remove('inactive');
        level2Element.style.zIndex = 11;
      }
    }

    if (currentLevel === 3) {
      // Level 3 is only active when level 3 is selected
      const level3Selector = `.${currentSet}3`;
      const level3Element = document.querySelector(level3Selector);
      if (level3Element) {
        level3Element.classList.add('active');
        level3Element.classList.remove('inactive');
        level3Element.style.zIndex = 10;
      }
    }

    // Boost the z-index of the actual currently selected circle to ensure it's on top
    const activeSelector = `.${currentPage}`;
    const activeElement = document.querySelector(activeSelector);
    if (activeElement) {
      activeElement.style.zIndex = 13; // Always put active element on top
    }

    // Add a special class to the outer circle of the current corner
    const outerCircle = document.querySelector(`.${currentSet}3`);
    if (outerCircle) {
      outerCircle.classList.add('corner-active');
    }

    // Update chart line color based on current dimension
    drawChart();
  }

  // Initialize the application
  function init() {
    // Add click events to all circles
    quarterCircles.forEach((circle) => {
      circle.addEventListener('click', () => {
        const page = circle.dataset.page;
        currentPage = page;
        currentSet = page.substring(0, 3);
        currentLevel = parseInt(page.charAt(3));
        updatePageVisibility();
      });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (isTopSet(currentSet)) {
            // Top corners: Up = smaller circle/lower level
            if (currentLevel > 1) {
              currentLevel--;
              currentPage = currentSet + currentLevel;
              updatePageVisibility();
            }
          } else {
            // Bottom corners: Up = larger circle/higher level
            if (currentLevel < 3) {
              currentLevel++;
              currentPage = currentSet + currentLevel;
              updatePageVisibility();
            }
          }
          break;

        case 'ArrowDown':
          if (isTopSet(currentSet)) {
            // Top corners: Down = larger circle/higher level
            if (currentLevel < 3) {
              currentLevel++;
              currentPage = currentSet + currentLevel;
              updatePageVisibility();
            }
          } else {
            // Bottom corners: Down = smaller circle/lower level
            if (currentLevel > 1) {
              currentLevel--;
              currentPage = currentSet + currentLevel;
              updatePageVisibility();
            }
          }
          break;

        case 'ArrowLeft':
          // Cycle to the previous corner in the navigation order
          const currentIndex = navigationOrder.indexOf(currentSet);
          if (currentIndex !== -1) {
            // Get previous index with wraparound
            const prevIndex =
              (currentIndex - 1 + navigationOrder.length) %
              navigationOrder.length;
            currentSet = navigationOrder[prevIndex];
            currentPage = currentSet + currentLevel;
            updatePageVisibility();
          }
          break;

        case 'ArrowRight':
          // Cycle to the next corner in the navigation order
          const currentIdx = navigationOrder.indexOf(currentSet);
          if (currentIdx !== -1) {
            // Get next index with wraparound
            const nextIndex = (currentIdx + 1) % navigationOrder.length;
            console.log(
              `Moving from ${currentSet} (index ${currentIdx}) to ${navigationOrder[nextIndex]} (index ${nextIndex})`
            );
            currentSet = navigationOrder[nextIndex];
            currentPage = currentSet + currentLevel;
            updatePageVisibility();
          }
          break;

        // Add number key navigation for subnav tabs
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
          const tabIndex = parseInt(event.key) - 1;
          if (tabIndex >= 0 && tabIndex < subNavItems[currentSet].length) {
            switchSubnavTab(tabIndex);
          }
          break;
      }
    });

    // Initialize chart
    initChart();

    // Set initial page state
    updatePageVisibility();
  }

  // Start the application
  init();
});
