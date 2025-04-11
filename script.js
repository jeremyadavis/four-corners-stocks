document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  const currentPageIndicator = document.getElementById('current-page');

  // Set initial state
  let currentPage = 'TL1';
  let currentSet = 'TL'; // Now can be 'TL', 'TR', 'BL', or 'BR'
  let currentLevel = 1; // 1, 2, or 3
  updatePageVisibility();

  // Define navigation order for cycling between corners
  const navigationOrder = ['TL', 'TR', 'BL']; // Will add 'BR' later

  // Check if a set is in the top half or bottom half
  function isTopSet(set) {
    return set === 'TL' || set === 'TR';
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
      currentSet = currentPage.substring(0, 2); // 'TL', 'TR', 'BL', or 'BR'
      currentLevel = parseInt(currentPage.charAt(2)); // 1, 2, or 3
      updatePageVisibility();
    });
  });

  // Update visibility of page elements
  function updatePageVisibility() {
    // Update the page indicator text
    currentPageIndicator.textContent = currentPage;

    // Update the active/inactive classes
    quarterCircles.forEach((circle) => {
      const pageName = circle.dataset.page;

      if (pageName === currentPage) {
        circle.classList.add('active');
        circle.classList.remove('inactive');
      } else {
        circle.classList.add('inactive');
        circle.classList.remove('active');
      }
    });

    // Always ensure proper z-index ordering (smaller circles always on top)
    // This ensures the inner circles remain visible when outer circles are selected
    const tl1 = document.querySelector('.TL1');
    const tl2 = document.querySelector('.TL2');
    const tl3 = document.querySelector('.TL3');
    const tr1 = document.querySelector('.TR1');
    const tr2 = document.querySelector('.TR2');
    const tr3 = document.querySelector('.TR3');
    const bl1 = document.querySelector('.BL1');
    const bl2 = document.querySelector('.BL2');
    const bl3 = document.querySelector('.BL3');

    // Ensure consistent z-index ordering
    tl1.style.zIndex = 3; // Innermost circle always on top
    tl2.style.zIndex = 2; // Middle circle
    tl3.style.zIndex = 1; // Outermost circle always at bottom
    tr1.style.zIndex = 3; // Innermost circle always on top
    tr2.style.zIndex = 2; // Middle circle
    tr3.style.zIndex = 1; // Outermost circle always at bottom
    bl1.style.zIndex = 3; // Innermost circle always on top
    bl2.style.zIndex = 2; // Middle circle
    bl3.style.zIndex = 1; // Outermost circle always at bottom
  }
});
