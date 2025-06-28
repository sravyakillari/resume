// Greet user in the console
console.log("Welcome to Sharanya's Resume!");

// Smooth scroll for internal links (like "#projects")
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Display current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML += `<p>Updated: ${year}</p>`;
  }
});