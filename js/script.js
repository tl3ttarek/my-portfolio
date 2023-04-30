// Script to scroll to links

// Get all links
const links = document.querySelectorAll('a[href^="#"]');

// Add click event
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Get target element
    const target = document.querySelector(link.getAttribute("href"));

    // Scroll to target
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/////////////////////////////////////////////////////
// Navigation disappear on scroll down and appear on scroll up
