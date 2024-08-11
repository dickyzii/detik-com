const navbar = document.querySelector('.navbar');

// Sticky navbar effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Resize event listener to close menu if open (if needed)
window.addEventListener('resize', closeMenuOnResize);

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    // Function to show the next image in the carousel
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Function to show the previous image in the carousel
    function showPreviousImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Initialize the carousel by showing the first image
    images[currentIndex].classList.add('active');

    // Add click event listeners for next and previous buttons
    document.querySelector('.carousel-next').addEventListener('click', showNextImage);
    document.querySelector('.carousel-prev').addEventListener('click', showPreviousImage);

    // Set the carousel to change images automatically every 3 seconds
    setInterval(showNextImage, 3000);
});
