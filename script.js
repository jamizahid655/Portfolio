const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Testimonial Carousel Logic
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".testimonial-box");
    let currentIndex = 0;
  
    const moveCarousel = (direction) => {
      if (direction === "next") {
        currentIndex = (currentIndex + 1) % items.length;
      } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
      }
  
      const offset = -currentIndex * (items[0].offsetWidth + 20); // Adjust offset for spacing
      carousel.style.transform = `translateX(${offset}px)`;
    };
  
    // Add event listeners for carousel navigation
    document.querySelector(".carousel::before")?.addEventListener("click", () => moveCarousel("prev"));
    document.querySelector(".carousel::after")?.addEventListener("click", () => moveCarousel("next"));
  
    // Automatic scrolling every 5 seconds
    setInterval(() => moveCarousel("next"), 5000);
  });
  