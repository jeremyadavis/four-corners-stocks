document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  const currentPageIndicator = document.getElementById('current-page');
  const currentDimensionIndicator =
    document.getElementById('current-dimension');

  // Define dimension names
  const dimensionNames = {
    QTF: 'Quantitative Fundamentals',
    QTT: 'Quantitative Technicals',
    QLT: 'Qualitative Technicals',
    QLF: 'Qualitative Fundamentals',
  };

  // Define navigation order for cycling between corners
  const navigationOrder = ['QTF', 'QLF', 'QTT', 'QLT']; // Updated order: top-left, top-right, bottom-left, bottom-right

  // Set initial state
  let currentPage = 'QTF1';
  let currentSet = 'QTF'; // Now can be 'QTF', 'QTT', 'QLT', or 'QLF'
  let currentLevel = 1; // 1, 2, or 3

  // Check if a set is in the top half or bottom half
  function isTopSet(set) {
    return set === 'QTF' || set === 'QLF';
  }

  // Update visibility of page elements
  function updatePageVisibility() {
    // Update the page indicator text
    currentPageIndicator.textContent = currentPage;

    // Update the dimension title
    currentDimensionIndicator.textContent = dimensionNames[currentSet];

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
  }

  // Apply initial page visibility
  updatePageVisibility();

  // Listen for keydown events
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
    }
  });

  // Click handler for direct selection
  quarterCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
      currentPage = circle.dataset.page;
      // Update the currentSet and currentLevel based on the clicked circle
      currentSet = currentPage.substring(0, 3); // 'QTF', 'QTT', 'QLT', or 'QLF'
      currentLevel = parseInt(currentPage.charAt(3)); // 1, 2, or 3
      updatePageVisibility();
    });
  });
});
