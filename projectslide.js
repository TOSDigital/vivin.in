document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".project-carousel-slides");
  const slides = document.querySelectorAll(".project-carousel-slide");
  const indicatorsContainer = document.querySelector(".project-carousel-indicators");
  const indicators = [];

  // Create indicators for each slide
  slides.forEach((slide, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", () => handleIndicatorClick(index));
    indicators.push(indicator);
    indicatorsContainer.appendChild(indicator);
  });

  let currentIndex = 0;

  // Function to update the carousel slides and indicators
  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  // Function to handle indicator clicks
  function handleIndicatorClick(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Function to show the next slide
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  // Auto play the carousel
  setInterval(showNextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});
