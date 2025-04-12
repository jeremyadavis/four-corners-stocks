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

    // Apply z-index and active/inactive classes
    corners.forEach((corner) => {
      for (let i = 1; i <= 3; i++) {
        const selector = `.${corner}${i}`;
        const element = document.querySelector(selector);

        if (!element) continue;

        // Set z-index: smaller circles (level 1) on top
        element.style.zIndex = 4 - i; // Level 1: z-index=3, Level 2: z-index=2, Level 3: z-index=1

        const pageName = element.dataset.page;

        if (pageName === currentPage) {
          element.classList.add('active');
          element.classList.remove('inactive');

          // Make sure active elements have elevated z-index
          // This will override the inline z-index with CSS !important in the active class
        } else {
          element.classList.add('inactive');
          element.classList.remove('active');
        }
      }
    });
  }
});
