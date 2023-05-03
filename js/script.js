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
// Fixing Projects images on mobile

// Get all images
const images = document.querySelectorAll(".work-item-img-box");
const mediaQuery = window.matchMedia("(max-width: 75em)");

function handleTabletChange(e) {
  if (e.matches) {
    fixImages();
  }
}

function fixImages() {
  for (const img of images) {
    workitem = img.parentElement;
    workitem.insertBefore(img, workitem.firstChild);
  }
}

mediaQuery.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

// Reverse the fix on desktop
window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 75 * 16) {
    for (let i = 0; i < images.length; i++) {
      workitem = images[i].parentElement;
      if (i % 2 == 0) {
        workitem.insertBefore(images[i], workitem.firstChild);
      } else {
        workitem.insertBefore(images[i], workitem.lastChild);
      }
    }
  }
});

/////////////////////////////////////////////////////
// Mobile navigation buttons

// Get all buttons
const navButtons = document.querySelectorAll(".icon--mobile-nav");
const header = document.querySelector(".header");

// Add click event
navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Toggle class
    header.classList.toggle("nav--open");
  });
});

/////////////////////////////////////////////////////
// Mobile navigation links

// Get all links
const navLinks = document.querySelectorAll(".nav-item");

// Add click event
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove class
    header.classList.remove("nav--open");
  });
});

/////////////////////////////////////////////////////
// Backdrop click

// Get backdrop
const backdrop = document.querySelector(".background-blur");

// Add click event
backdrop.addEventListener("click", (e) => {
  // Remove class
  header.classList.remove("nav--open");
});

/////////////////////////////////////////////////////
