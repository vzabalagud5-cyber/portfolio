// === Intersection Observer pour animations au scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .project-card, .objective-card').forEach(el => {
  observer.observe(el);
});

// === Bouton Retour en haut ===
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Mode sombre ===
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Charger le thème depuis localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  htmlElement.setAttribute('data-theme', 'dark');
  themeToggle.classList.add('show');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Mettre à jour l'emoji
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Afficher le bouton de thème
themeToggle.classList.add('show');

// === Menu hamburger ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// === Navigation active au scroll ===
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// === Smooth scroll pour les ancres ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === Soumission formulaire (démo) ===
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour ton message! (Démo - pas d\'envoi réel)');
    contactForm.reset();
  });
}

// === Animation au chargement ===
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
