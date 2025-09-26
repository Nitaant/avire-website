document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // --- Fully Corrected Mobile Navigation Logic ---
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navList = document.querySelector(".nav-list"); // The nav-list you correctly identified

  // Ensure all necessary elements are on the page before running code
  if (navToggle && mainNav && navList) {
    // Add a click listener to the hamburger button
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("nav-open");
      navToggle.classList.toggle("nav-open"); // This makes the hamburger turn into an 'X'
    });

    // Add a click listener to the list of links
    // This closes the menu when a user taps a link
    navList.addEventListener("click", (event) => {
      // We only want to close the menu if a link was actually clicked
      if (event.target.tagName === "A") {
        mainNav.classList.remove("nav-open");
        navToggle.classList.remove("nav-open");
      }
    });
  }
});
