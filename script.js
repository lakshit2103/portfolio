/* =============================================
   LAKSHIT SEHDEV — PORTFOLIO SCRIPTS
   ============================================= */

'use strict';

// ── NAVBAR SCROLL ────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  highlightNav();
}, { passive: true });

// ── HAMBURGER ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SMOOTH SCROLL ────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── ACTIVE NAV ───────────────────────────────
const sections = [...document.querySelectorAll('section[id], div[id]')];
const navItems = [...document.querySelectorAll('.nav-link')];

function highlightNav() {
  const scrollY = window.scrollY + 120;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= scrollY) current = s.id;
  });
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === '#' + current);
  });
}
highlightNav();

// ── REVEAL OBSERVER ──────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function setupReveal() {
  // Cards, rows, skill-cards, edu, cert-rows
  const targets = [
    ...document.querySelectorAll('.project-row'),
    ...document.querySelectorAll('.skill-card'),
    ...document.querySelectorAll('.cert-row'),
    ...document.querySelectorAll('.edu-entry'),
    ...document.querySelectorAll('.hero-terminal'),
    ...document.querySelectorAll('.hero-stats'),
    ...document.querySelectorAll('.stat-pill'),
    ...document.querySelectorAll('.about-card-left'),
    ...document.querySelectorAll('.about-content-right'),
    ...document.querySelectorAll('.contact-cta-block'),
    ...document.querySelectorAll('.section-title-xl'),
    ...document.querySelectorAll('.section-title-huge'),
    ...document.querySelectorAll('.section-sub'),
    ...document.querySelectorAll('.section-label'),
  ];

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 5) * 0.06}s`;
    revealObs.observe(el);
  });
}
setupReveal();

// ── TERMINAL TYPEWRITER ──────────────────────
// Already static in HTML for performance — cursor blinks via CSS

// ── HERO ROLE TYPEWRITER ─────────────────────
const roles = ['AI/ML', 'GenAI', 'LLM', 'RAG'];
let roleIdx = 0;
const roleEl = document.getElementById('typed-role');

if (roleEl) {
  setInterval(() => {
    roleEl.style.opacity = '0';
    roleEl.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      roleEl.textContent = roles[roleIdx];
      roleEl.style.opacity = '1';
      roleEl.style.transform = 'translateY(0)';
    }, 260);
  }, 2800);

  roleEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
}

// ── MOUSE GLOW ON CARDS ──────────────────────
document.querySelectorAll('.skill-card, .edu-card, .outcome-box').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(168,85,247,0.06) 0%, var(--card) 55%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

// ── PAGE FADE IN ─────────────────────────────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ── HERO PARALLAX ────────────────────────────
const heroLeft  = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight && heroLeft && heroRight) {
    heroLeft.style.transform  = `translateY(${y * 0.12}px)`;
    heroLeft.style.opacity    = `${1 - y / 700}`;
    heroRight.style.transform = `translateY(${y * 0.06}px)`;
  }
}, { passive: true });

// ── HOVER UNDERLINE for project rows ─────────
document.querySelectorAll('.project-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.paddingLeft = '8px';
  });
  row.addEventListener('mouseleave', () => {
    row.style.paddingLeft = '0';
  });
});
