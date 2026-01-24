// Hero brightness interaction (home page)
const hero = document.querySelector('.hero');
const svg = document.querySelector('.hero-svg');

if (hero && svg) {
  svg.addEventListener('mouseenter', () => {
    hero.style.filter = 'brightness(1.3)';
  });

  svg.addEventListener('mouseleave', () => {
    hero.style.filter = 'brightness(0.85)';
  });
}

// Carousels (products page)
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  if (!track || !prev || !next) return;

  next.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
}

