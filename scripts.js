document.getElementById("hamburger").addEventListener("click", function () {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

// Function to handle active link
function setActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// Set the active link on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
