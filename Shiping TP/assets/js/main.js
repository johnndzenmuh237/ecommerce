/* ============================================================
   SWIFTCARGO — MAIN JAVASCRIPT
   main.js
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   INJECT SHARED HEADER & FOOTER
   ---------------------------------------------------------- */
const SITE = {
  name: 'SwiftCargo',
  tagline: 'Global Logistics',
  phone: '+1 (800) 794-8362',
  email: 'info@swiftcargo.com',
  address: '1200 Harbor Blvd, Suite 800, Los Angeles, CA 90731',
  hours: 'Mon–Fri: 8am–6pm EST',
};

function injectHeader() {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (page) => currentPage === page ? 'active' : '';

  placeholder.outerHTML = `
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-left">
          <div class="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <a href="tel:+18007948362">${SITE.phone}</a>
          </div>
          <div class="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <a href="mailto:${SITE.email}">${SITE.email}</a>
          </div>
        </div>
        <div class="top-bar-right">
          <div class="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${SITE.hours}</span>
          </div>
          <div class="top-bar-item">
            <a href="tracking.html" style="color:var(--color-accent);font-weight:600;">Track Shipment ›</a>
          </div>
        </div>
      </div>
    </div>

    <header class="site-header header--transparent" id="site-header">
      <div class="container">
        <div class="header-inner">
          <a href="index.html" class="header-logo">
            <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="var(--color-accent)"/>
              <path d="M6 28l8-16 6 10 4-6 10 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="32" cy="28" r="3" fill="white"/>
              <circle cx="12" cy="28" r="3" fill="white"/>
            </svg>
            <div class="logo-text">
              <strong>${SITE.name}</strong>
              <span>${SITE.tagline}</span>
            </div>
          </a>

          <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="index.html" class="nav-link ${isActive('index.html')}">Home</a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link ${isActive('about.html')}">About</a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link ${isActive('services.html')}">
                  Services
                  <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <div class="nav-dropdown">
                  <a href="services.html"><span>🚢</span> Ocean Freight</a>
                  <a href="services.html"><span>✈️</span> Air Freight</a>
                  <a href="services.html"><span>🚛</span> Road Transport</a>
                  <a href="services.html"><span>🏭</span> Warehousing</a>
                  <a href="services.html"><span>🔗</span> Supply Chain</a>
                  <a href="services.html"><span>📦</span> Customs Clearance</a>
                  <a href="service-single.html"><span>→</span> View All Services</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="tracking.html" class="nav-link ${isActive('tracking.html')}">Tracking</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Company
                  <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <div class="nav-dropdown">
                  <a href="fleet.html"><span>🚂</span> Our Fleet</a>
                  <a href="destinations.html"><span>🌍</span> Destinations</a>
                  <a href="careers.html"><span>💼</span> Careers</a>
                  <a href="blog.html"><span>📰</span> Blog</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="pricing.html" class="nav-link ${isActive('pricing.html')}">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link ${isActive('contact.html')}">Contact</a>
              </li>
            </ul>

            <!-- Mobile-only CTA -->
            <div class="nav-mobile-cta" aria-hidden="true">
              <a href="quote-request.html" class="btn btn--primary btn--full">Get a Quote</a>
              <a href="tracking.html" class="btn btn--outline-white btn--full">Track Shipment</a>
            </div>
          </nav>

          <div class="header-cta">
            <button class="dark-mode-toggle" id="dark-toggle" aria-label="Toggle dark mode"></button>
            <a href="tracking.html" class="btn btn--outline-white btn--sm">Track</a>
            <a href="quote-request.html" class="btn btn--primary btn--sm">Get Quote</a>
          </div>

          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  // Activate header scroll behavior
  initHeader();
}

function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">

          <!-- Brand -->
          <div class="footer-brand">
            <a href="index.html" class="header-logo footer-logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="var(--color-accent)"/>
                <path d="M6 28l8-16 6 10 4-6 10 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="32" cy="28" r="3" fill="white"/>
                <circle cx="12" cy="28" r="3" fill="white"/>
              </svg>
              <div class="logo-text">
                <strong>${SITE.name}</strong>
                <span>${SITE.tagline}</span>
              </div>
            </a>
            <p class="footer-about">
              Trusted by thousands of businesses worldwide for reliable freight forwarding, 
              logistics management, and supply chain solutions since 1998.
            </p>
            <div class="footer-socials">
              <a href="#" class="footer-social" aria-label="LinkedIn">in</a>
              <a href="#" class="footer-social" aria-label="Twitter">𝕏</a>
              <a href="#" class="footer-social" aria-label="Facebook">f</a>
              <a href="#" class="footer-social" aria-label="YouTube">▶</a>
              <a href="#" class="footer-social" aria-label="Instagram">◎</a>
            </div>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <nav class="footer-links">
              <a href="services.html">Ocean Freight</a>
              <a href="services.html">Air Freight</a>
              <a href="services.html">Road Transport</a>
              <a href="services.html">Warehousing</a>
              <a href="services.html">Supply Chain</a>
              <a href="services.html">Customs Clearance</a>
              <a href="services.html">Project Cargo</a>
            </nav>
          </div>

          <!-- Company -->
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <nav class="footer-links">
              <a href="about.html">About Us</a>
              <a href="fleet.html">Our Fleet</a>
              <a href="destinations.html">Destinations</a>
              <a href="careers.html">Careers</a>
              <a href="blog.html">Blog & News</a>
              <a href="faq.html">FAQ</a>
              <a href="contact.html">Contact</a>
            </nav>
          </div>

          <!-- Contact + Newsletter -->
          <div class="footer-col">
            <h4 class="footer-col-title">Get in Touch</h4>
            <div class="footer-contact">
              <div class="footer-contact-item">
                <div class="footer-contact-icon">📍</div>
                <div>
                  <strong>Head Office</strong><br>
                  ${SITE.address}
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="footer-contact-icon">📞</div>
                <div>
                  <strong>Phone</strong><br>
                  <a href="tel:+18007948362">${SITE.phone}</a>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="footer-contact-icon">✉️</div>
                <div>
                  <strong>Email</strong><br>
                  <a href="mailto:${SITE.email}">${SITE.email}</a>
                </div>
              </div>
            </div>

            <div style="margin-top: var(--space-6);">
              <p style="font-size:var(--text-sm);margin-bottom:var(--space-3);">Subscribe to our newsletter:</p>
              <form class="footer-newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                <input type="email" class="footer-newsletter-input" placeholder="Your email" required>
                <button type="submit" class="btn btn--primary btn--sm">→</button>
              </form>
            </div>
          </div>

        </div><!-- /footer-top -->
      </div>

      <div class="container">
        <div class="footer-bottom">
          <div>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</div>
          <nav class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
}

/* ----------------------------------------------------------
   HEADER SCROLL BEHAVIOR
   ---------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  // If header--solid, no scroll behavior needed
  if (header.classList.contains('header--solid')) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
      header.classList.remove('header--transparent');
    } else {
      header.classList.remove('header--scrolled');
      header.classList.add('header--transparent');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once immediately
}

/* ----------------------------------------------------------
   MOBILE NAV TOGGLE
   ---------------------------------------------------------- */
function initMobileNav() {
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('#nav-toggle');
    const nav    = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    const isOpen = nav.classList.toggle('nav--open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    const nav    = document.getElementById('primary-nav');
    const toggle = document.getElementById('nav-toggle');
    if (!nav || !nav.classList.contains('nav--open')) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('nav--open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ----------------------------------------------------------
   DARK MODE TOGGLE
   ---------------------------------------------------------- */
function initDarkMode() {
  const toggle = document.getElementById('dark-toggle');
  const html   = document.documentElement;
  const stored = localStorage.getItem('swiftcargo-dark');

  if (stored === 'true') html.classList.add('dark');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('swiftcargo-dark', isDark);
    });
  }
}

/* ----------------------------------------------------------
   SCROLL REVEAL (IntersectionObserver)
   ---------------------------------------------------------- */
function initScrollReveal() {
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale', '.stagger-children'];
  const els = document.querySelectorAll(revealClasses.join(','));
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

/* ----------------------------------------------------------
   BACK TO TOP
   ---------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------------
   FAQ ACCORDION
   ---------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Open clicked (if was closed)
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ----------------------------------------------------------
   HERO TRACKING FORM
   ---------------------------------------------------------- */
function initHeroTracking() {
  const form = document.getElementById('hero-track-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[name="tracking_id"]');
    const val   = input?.value.trim();
    if (val) {
      window.location.href = `tracking.html?id=${encodeURIComponent(val)}`;
    }
  });
}

/* ----------------------------------------------------------
   TABS (generic)
   ---------------------------------------------------------- */
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const tabs    = container.querySelectorAll('[data-tab]');
    const panels  = container.querySelectorAll('[data-panel]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.add('hidden'));

        tab.classList.add('active');
        container.querySelector(`[data-panel="${target}"]`)?.classList.remove('hidden');
      });
    });
  });
}

/* ----------------------------------------------------------
   SMOOTH ANCHOR SCROLLING
   ---------------------------------------------------------- */
function initAnchorScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '80');
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 16, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------
   NEWSLETTER SUBMIT
   ---------------------------------------------------------- */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input) return;
  input.value = '';
  showToast('✓ You\'re subscribed! Thank you.');
}

/* ----------------------------------------------------------
   TOAST NOTIFICATION
   ---------------------------------------------------------- */
function showToast(message, type = 'success', duration = 3500) {
  const existing = document.querySelector('.sc-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'sc-toast';
  toast.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:${type === 'success' ? 'var(--color-success)' : 'var(--color-danger)'};
    color:white; padding:.75rem 1.5rem; border-radius:8px;
    font-size:.875rem; font-weight:600; z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.25);
    transition:transform .3s ease, opacity .3s ease; opacity:0;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ----------------------------------------------------------
   RIPPLE EFFECT ON BUTTONS
   ---------------------------------------------------------- */
function initButtonRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const size   = Math.max(rect.width, rect.height);
      circle.className = 'ripple-circle';
      circle.style.cssText = `
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
      `;
      this.appendChild(circle);
      this.classList.add('btn-ripple');
      circle.addEventListener('animationend', () => circle.remove());
    });
  });
}

/* ----------------------------------------------------------
   ACTIVE NAV LINK HIGHLIGHT (for inner pages)
   ---------------------------------------------------------- */
function highlightActiveNav() {
  const path    = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
}

/* ----------------------------------------------------------
   INIT ALL
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  initMobileNav();
  initDarkMode();
  initScrollReveal();
  initBackToTop();
  initFAQ();
  initHeroTracking();
  initTabs();
  initAnchorScrolling();
  initButtonRipple();
  highlightActiveNav();
});