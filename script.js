/* =========================================================
   AARAV MEHTA — CREDENTIAL LEDGER
   script.js
   All data lives in the CERTIFICATES / ACHIEVEMENTS / SKILLS
   arrays below. Edit those objects to swap in your own
   information — no other code needs to change.
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   1. DATA — replace with your own content
   --------------------------------------------------------- */

// Category → icon (inline SVG strings, kept tiny & dependency-free)
const ICONS = {
  courses: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  workshops: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  internships: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  hackathons: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  achievements: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M8.7 13.6 7 22l5-3 5 3-1.7-8.4"/></svg>'
};

const CERTIFICATES = [
  {
    id: '001',
    title: 'API Development Web API Security',
    org: 'infosys springboard',
    date: 'Nov 2024',
    category: 'courses',
    description: 'Specialization covering React, Node.js, REST APIs and deployment pipelines across 6 graded projects.'
  },
  {
    id: '002',
    title: 'Generative AI Foundations: Advanced Generative AI Techniques for IT ',
    org: 'infosys springboard',
    date: 'Nov 2024',
    category: 'courses',
    description: 'Advanced AI foundations and learn about generative AI techniques.'
  },
  {
    id: '003',
    title: 'opreating system basic',
    org: 'cisco',
    date: 'Jan 2025',
    category: 'courses',
    description: 'Core oprating system and basic knowladge of oprating system.'
  },
  {
    id: '004',
    title: 'DBMS',
    org: 'code tantra',
    date: 'jan 2026',
    category: 'courses',
    description: 'basic to advance database and mangement system.'
  },
  {
    id: '005',
    title: 'devtown  learning certificate',
    org: 'devtown',
    date: 'jun 2025',
    category: 'workshops',
    description: 'Branching strategies, PR etiquette, and a first merged contribution to an open-source repo.'
  },
  {
    id: '006',
    title: 'PU code hacakthon',
    org : 'parul university',
    date: 'feb 2026',
    category: 'hacathon',
    description: 'natational level hackathon to give chance in internships and jobs.'
  },
  {
    id: '007',
    title: 'vibe with india - hackathon',
    org: 'devnovate',
    date: 'mar 2026',
    category: 'hackathon',
    description: 'Built internal dashboard tooling in React & Express, cutting manual reporting time by 40%.'
  },
  {
    id: '008',
    title: 'campuscrew member',
    org: 'campuscrew',
    date: 'Jun 2026',
    category: 'hackathon',
    description: 'Designed REST APIs and optimized PostgreSQL queries for a payments reconciliation service.'
  },
  {
    id: '009',
    title: 'DETOX - TRIVIUM 1.0',
    org: 'DETOX',
    date: 'jun 2026',
    category: 'hackathon',
    description: 'Assisted in training classification models for a campus research project; co-authored a short paper.'
  },
  {
    id: '010',
    title: 'Smart India Hackathon',
    org: 'Ministry of Education, Govt. of India',
    date: 'Oct 2024',
    category: 'hackathons',
    description: 'Built an offline-first rural healthcare triage app; selected among top 40 national teams.'
  },
  {
    id: '011',
    title: 'build with gemini Hackathon',
    org: 'google',
    date: 'may 2026',
    category: 'hackathons',
    description: 'Built an offline-first rural healthcare triage app; selected among top 40 national teams.'
  },
  {
    id: '012',
    title: 'Computer Networks and Internet Protocol',
    org: 'NPTEL',
    date: 'Jan–Apr 2026',
    category: 'courses',
    description: 'NPTEL course certificate for computer networks and internet protocol.',
  }
];

const ACHIEVEMENTS = [
  {
    date: 'Oct 2025',
    title: 'Smart India Hackathon',
    desc: 'Represented the institute at the national round in New Delhi among 40 shortlisted teams.',
    icon: ICONS.hackathons
  },
  {
    date: 'Jan 2026',
    title: 'Published Technical personal portfollio with 2 other projects',
    desc: 'Wrote a 5-part series on distributed systems fundamentals, read by 12k+ developers.',
    icon: ICONS.courses
  },
  {
    date: 'feb 2026',
    title: 'PU code hackathon 3.0 Hackathon Champion',
    desc: 'Led a 4-member team , building an accessibility-first campus navigator.',
    icon: ICONS.hackathons
  },
  {
    date: 'mar 2026',
    title: 'task flow app',
    desc: 'Facial-recognition attendance system recognized as the top project in the department.',
    icon: ICONS.achievements
  },
  {
    date: 'jun 2026',
    title: 'Joined decodes lab as intern',
    desc: 'work as full stack devloper at the company and do my 1 month intership.',
    icon: ICONS.workshops
  }
];

const SKILLS = [
  { name: 'JavaScript', level: 90 },
  { name: 'HTML / CSS', level: 95 },
  { name: 'Java', level: 82 },
  { name: 'Data Structures & Algorithms', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Git & GitHub', level: 92 },
  { name: 'SQL / Databases', level: 78 },
  { name: 'Python', level: 75 }
];

/* ---------------------------------------------------------
   2. NAVBAR — mobile menu, sticky highlight, smooth scroll
   --------------------------------------------------------- */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after tapping a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Active link highlight on scroll
const sections = document.querySelectorAll('main section[id], .hero[id]');
const navItems = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);
sections.forEach((section) => navObserver.observe(section));

/* ---------------------------------------------------------
   3. THEME TOGGLE (dark default, light optional)
   --------------------------------------------------------- */

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyStoredTheme() {
  const stored = safeGet('theme');
  if (stored === 'light') root.setAttribute('data-theme', 'light');
}

function safeGet(key) {
  try { return window.localStorage ? localStorage.getItem(key) : null; }
  catch (e) { return null; }
}
function safeSet(key, val) {
  try { if (window.localStorage) localStorage.setItem(key, val); }
  catch (e) { /* storage unavailable — ignore */ }
}

applyStoredTheme();

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    safeSet('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    safeSet('theme', 'light');
  }
});

/* ---------------------------------------------------------
   4. RENDER CERTIFICATES
   --------------------------------------------------------- */

const certGrid = document.getElementById('certGrid');
const filterBar = document.getElementById('filterBar');

function categoryLabel(cat) {
  const map = {
    courses: 'Course',
    workshops: 'Workshop',
    internships: 'Internship',
    hackathons: 'Hackathon',
    achievements: 'Achievement'
  };
  return map[cat] || cat;
}

function renderCertificates(filter = 'all') {
  const list = filter === 'all' ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === filter);

  certGrid.innerHTML = '';

  if (list.length === 0) {
    certGrid.innerHTML = '<p class="cert-empty">No certificates filed under this category yet.</p>';
    return;
  }

  list.forEach((cert, index) => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.style.animationDelay = `${Math.min(index, 8) * 60}ms`;

    card.innerHTML = `
      <p class="cert-id">${cert.id}</p>
      <div class="cert-top">
        <span class="cert-icon">${ICONS[cert.category] || ''}</span>
        <span class="cert-tag">${categoryLabel(cert.category)}</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-org">${cert.org}</p>
      <p class="cert-date">${cert.date}</p>
      <p class="cert-desc">${cert.description}</p>
      <button class="cert-view" type="button" data-cert-id="${cert.id}">
        View Certificate
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    `;

    // Subtle cursor-follow glow
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });

    certGrid.appendChild(card);
  });

  // Re-observe new cards for scroll-reveal (they animate in via CSS keyframe already,
  // but we still register them in case reduced-motion users rely on reveal fallback)
}

renderCertificates('all');

// Filtering
filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  renderCertificates(btn.dataset.filter);
});

/* ---------------------------------------------------------
   5. CERTIFICATE MODAL / LIGHTBOX
   --------------------------------------------------------- */

const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openCertModal(cert) {
  const pdfHtml = cert.pdf
    ? `
      <div class="cert-pdf-wrap">
        <iframe class="cert-pdf" src="${cert.pdf}" title="${cert.title} PDF"></iframe>
      </div>
    `
    : '';

  modalBody.innerHTML = `
    <div class="cert-preview">
      <div class="cert-preview-seal">${ICONS[cert.category] || ''}</div>
      <p class="cert-preview-eyebrow">CERTIFICATE OF COMPLETION</p>
      <h3 class="cert-preview-title">${cert.title}</h3>
      <p class="cert-preview-org">${cert.org}</p>
      <p class="cert-preview-date">Issued ${cert.date} · ${cert.id}</p>
    </div>
    <div class="modal-meta">
      <div class="modal-meta-row"><span>Category</span><span>${categoryLabel(cert.category)}</span></div>
      <div class="modal-meta-row"><span>Issued by</span><span>${cert.org}</span></div>
      <div class="modal-meta-row"><span>Date</span><span>${cert.date}</span></div>
      <div class="modal-meta-row"><span>Reference ID</span><span>${cert.id}</span></div>
    </div>
    <p class="modal-desc">${cert.description}</p>
    ${pdfHtml}
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeCertModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

certGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.cert-view');
  if (!btn) return;
  const cert = CERTIFICATES.find((c) => c.id === btn.dataset.certId);
  if (cert) openCertModal(cert);
});

modalClose.addEventListener('click', closeCertModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeCertModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeCertModal();
});

/* ---------------------------------------------------------
   6. RENDER TIMELINE (Achievements)
   --------------------------------------------------------- */

const timeline = document.getElementById('timeline');

ACHIEVEMENTS.forEach((item) => {
  const el = document.createElement('div');
  el.className = 'timeline-item reveal';
  el.innerHTML = `
    <p class="timeline-date">${item.date}</p>
    <div class="timeline-card">
      <span class="timeline-icon">${item.icon}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
  timeline.appendChild(el);
});

/* ---------------------------------------------------------
   7. RENDER SKILLS
   --------------------------------------------------------- */

const skillsGrid = document.getElementById('skillsGrid');

SKILLS.forEach((skill) => {
  const el = document.createElement('div');
  el.className = 'skill-item reveal';
  el.innerHTML = `
    <div class="skill-top">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-pct">${skill.level}%</span>
    </div>
    <div class="skill-track">
      <div class="skill-fill" data-level="${skill.level}"></div>
    </div>
  `;
  skillsGrid.appendChild(el);
});

/* ---------------------------------------------------------
   8. SCROLL REVEAL (fade/slide-up) + skill bar fill + counters
   --------------------------------------------------------- */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');

      // Animate skill bar fill once visible
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) fill.style.width = `${fill.dataset.level}%`;

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

function observeReveals() {
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}
observeReveals();

// Hero stat counters
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.decimal === 'true';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statsObserver.observe(heroStats);
}

/* ---------------------------------------------------------
   9. CONTACT FORM VALIDATION
   --------------------------------------------------------- */

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

const validators = {
  name: (v) => v.trim().length >= 2 || 'Please enter your full name.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
  subject: (v) => v.trim().length >= 3 || 'Subject should be at least 3 characters.',
  message: (v) => v.trim().length >= 10 || 'Message should be at least 10 characters.'
};

function validateField(field) {
  const rule = validators[field.name];
  if (!rule) return true;

  const result = rule(field.value);
  const errorEl = contactForm.querySelector(`[data-error-for="${field.name}"]`);

  if (result === true) {
    field.classList.remove('invalid');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  field.classList.add('invalid');
  if (errorEl) errorEl.textContent = result;
  return false;
}

// Live validation as the user types (clears errors quickly)
contactForm.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => {
    if (field.classList.contains('invalid')) validateField(field);
  });
  field.addEventListener('blur', () => validateField(field));
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.remove('show');

  const fields = Array.from(contactForm.querySelectorAll('input, textarea'));
  const allValid = fields.map(validateField).every(Boolean);

  if (!allValid) {
    const firstInvalid = contactForm.querySelector('.invalid');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // No backend wired up — simulate a successful send.
  // Replace this block with a real fetch()/EmailJS/Formspree call as needed.
  formSuccess.classList.add('show');
  contactForm.reset();
  fields.forEach((f) => f.classList.remove('invalid'));
});

/* ---------------------------------------------------------
   10. MISC
   --------------------------------------------------------- */

document.getElementById('year').textContent = new Date().getFullYear();
