// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Fade-in on scroll for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.edu-card, .project-card, .stat-card, .hobby-item, .skill-pill').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s';
  observer.observe(el);
});
