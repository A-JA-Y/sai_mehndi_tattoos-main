// ===========================
// HERO SLIDER
// ===========================
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let autoSlideTimer;
const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

// Build dots dynamically based on number of slides
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  resetAutoSlide();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Pause auto-slide on hover (desktop) for better UX
const heroSlider = document.querySelector('.slider');
heroSlider.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
heroSlider.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();

// ===========================
// MOBILE NAV TOGGLE
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===========================
// CONTACT FORM (front-end only placeholder)
// ===========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been noted. (Connect a form service like Formspree to receive this by email.)');
    contactForm.reset();
  });
}

  function openGmail(event) {
  // Mobile devices detect karne ke liye check
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Agar Mobile NAHI hai (yani PC/Laptop hai)
  if (!isMobile) {
    event.preventDefault(); // Normal mailto link ko roko
  const email = "devakumar786@gmail.com";
  const subject = encodeURIComponent("Inquiry for Mehndi/Tattoo Services");
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    
    window.open(gmailUrl, '_blank'); // Gmail website naye tab me kholo
  }
  // Agar Mobile hai, toh kuch mat karo (default mailto browser dwara Gmail app khole ka)
}




