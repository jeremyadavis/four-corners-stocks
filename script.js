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
    const qtf1 = document.querySelector('.QTF1');
    const qtf2 = document.querySelector('.QTF2');
    const qtf3 = document.querySelector('.QTF3');
    const qlf1 = document.querySelector('.QLF1');
    const qlf2 = document.querySelector('.QLF2');
    const qlf3 = document.querySelector('.QLF3');
    const qtt1 = document.querySelector('.QTT1');
    const qtt2 = document.querySelector('.QTT2');
    const qtt3 = document.querySelector('.QTT3');
    const qlt1 = document.querySelector('.QLT1');
    const qlt2 = document.querySelector('.QLT2');
    const qlt3 = document.querySelector('.QLT3');

    // Ensure consistent z-index ordering
    qtf1.style.zIndex = 3; // Innermost circle always on top
    qtf2.style.zIndex = 2; // Middle circle
    qtf3.style.zIndex = 1; // Outermost circle always at bottom
    qlf1.style.zIndex = 3; // Innermost circle always on top
    qlf2.style.zIndex = 2; // Middle circle
    qlf3.style.zIndex = 1; // Outermost circle always at bottom
    qtt1.style.zIndex = 3; // Innermost circle always on top
    qtt2.style.zIndex = 2; // Middle circle
    qtt3.style.zIndex = 1; // Outermost circle always at bottom
    qlt1.style.zIndex = 3; // Innermost circle always on top
    qlt2.style.zIndex = 2; // Middle circle
    qlt3.style.zIndex = 1; // Outermost circle always at bottom
  }
});
