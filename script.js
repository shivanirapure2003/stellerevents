// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Background Slideshow (only on pages that have the slideshow element)
const slideshow = document.getElementById('slideshow');

if (slideshow) {
  const images = [
    'img/slide1.webp',
    'img/slide2.webp',
    'img/slide3new.webp'
  ];

  let index = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 4000); // every 4 seconds
}



// Show service overlays on scroll (mobile only)
if (window.innerWidth <= 768) {
  const serviceItems = document.querySelectorAll('.service-item .overlay');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.5 // 50% visible
  });

  serviceItems.forEach(overlay => observer.observe(overlay));
}
