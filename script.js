document.addEventListener('DOMContentLoaded', () => {
  const quarterCircles = document.querySelectorAll('.quarter-circle');
  const currentPageIndicator = document.getElementById('current-page');

  // Set initial state
  let currentPage = 'TL1';
  updatePageVisibility();

  // Listen for keydown events
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      // Move up (to smaller circle/lower page number)
      if (currentPage === 'TL3') {
        currentPage = 'TL2';
        updatePageVisibility();
      } else if (currentPage === 'TL2') {
        currentPage = 'TL1';
        updatePageVisibility();
      }
    } else if (event.key === 'ArrowDown') {
      // Move down (to larger circle/higher page number)
      if (currentPage === 'TL1') {
        currentPage = 'TL2';
        updatePageVisibility();
      } else if (currentPage === 'TL2') {
        currentPage = 'TL3';
        updatePageVisibility();
      }
    }
  });

  // Click handler for direct selection
  quarterCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
      currentPage = circle.dataset.page;
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

    // Ensure consistent z-index ordering
    tl1.style.zIndex = 3; // Innermost circle always on top
    tl2.style.zIndex = 2; // Middle circle
    tl3.style.zIndex = 1; // Outermost circle always at bottom
  }
});