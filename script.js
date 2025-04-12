document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  const currentPageIndicator = document.getElementById('current-page');

  // Set initial state
  let currentPage = 'QTF1';
  let currentSet = 'QTF'; // Now can be 'QTF', 'QLF', 'QTT', or 'QLT'
  let currentLevel = 1; // 1, 2, or 3
  updatePageVisibility();

  // Define navigation order for cycling between corners
  const navigationOrder = ['QTF', 'QLF', 'QTT', 'QLT']; // Complete navigation cycle

  // Check if a set is in the top half or bottom half
  function isTopSet(set) {
    return set === 'QTF' || set === 'QLF';
  }

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
      currentSet = currentPage.substring(0, 3); // 'QTF', 'QLF', 'QTT', or 'QLT'
      currentLevel = parseInt(currentPage.charAt(3)); // 1, 2, or 3
      updatePageVisibility();
    });
  });

  // Update visibility of page elements
  function updatePageVisibility() {
    // Update the page indicator text
    currentPageIndicator.textContent = currentPage;

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

    // Apply z-index and active/inactive classes
    corners.forEach((corner) => {
      // First set all circles in this corner to inactive
      for (let i = 1; i <= 3; i++) {
        const selector = `.${corner}${i}`;
        const element = document.querySelector(selector);

        if (!element) continue;

        // Always set the smallest circle to have the highest z-index
        // Regardless of which is active
        element.style.zIndex = 10 - i; // Level 1: z-index=9, Level 2: z-index=8, Level 3: z-index=7

        // First, set everything to inactive
        element.classList.add('inactive');
        element.classList.remove('active');
      }

      // Then set the active circle
      const activeSelector = `.${currentPage}`;
      const activeElement = document.querySelector(activeSelector);

      if (activeElement) {
        activeElement.classList.add('active');
        activeElement.classList.remove('inactive');

        // Add a special class to the outer circle of the current corner
        // to highlight the entire corner
        const currentCorner = currentPage.substring(0, 3);
        const outerCircle = document.querySelector(`.${currentCorner}3`);
        if (outerCircle) {
          outerCircle.classList.add('corner-active');
        }
      }
    });
  }
});
