document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  const currentPageIndicator = document.getElementById('current-page');

  // Set initial state
  let currentPage = 'TL1';
  let currentSet = 'TL'; // Either 'TL' for Top-Left or 'TR' for Top-Right
  let currentLevel = 1; // 1, 2, or 3
  updatePageVisibility();

  // Listen for keydown events
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        // Move up (to smaller circle/lower level number)
        if (currentLevel > 1) {
          currentLevel--;
          currentPage = currentSet + currentLevel;
          updatePageVisibility();
        }
        break;

      case 'ArrowDown':
        // Move down (to larger circle/higher level number)
        if (currentLevel < 3) {
          currentLevel++;
          currentPage = currentSet + currentLevel;
          updatePageVisibility();
        }
        break;

      case 'ArrowLeft':
        // Switch to Top-Left navigation
        if (currentSet !== 'TL') {
          currentSet = 'TL';
          currentPage = currentSet + currentLevel;
          updatePageVisibility();
        }
        break;

      case 'ArrowRight':
        // Switch to Top-Right navigation
        if (currentSet !== 'TR') {
          currentSet = 'TR';
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
      currentSet = currentPage.substring(0, 2); // 'TL' or 'TR'
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

    // Ensure consistent z-index ordering
    tl1.style.zIndex = 3; // Innermost circle always on top
    tl2.style.zIndex = 2; // Middle circle
    tl3.style.zIndex = 1; // Outermost circle always at bottom
    tr1.style.zIndex = 3; // Innermost circle always on top
    tr2.style.zIndex = 2; // Middle circle
    tr3.style.zIndex = 1; // Outermost circle always at bottom
  }
});
