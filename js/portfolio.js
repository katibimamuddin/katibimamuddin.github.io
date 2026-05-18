/* ── KATIB IMAMUDDIN — PORTFOLIO LOADER ── */
/* 
  HOW IT WORKS:
  Each asset folder has a manifest.json that lists its files.
  This script fetches all manifests, builds the portfolio grid,
  and handles filtering and the request modal.

  TO ADD NEW WORK:
  1. Upload the file to the correct assets/ subfolder
  2. Open that folder's manifest.json
  3. Add an entry to the "files" array and save

  That's it — the website will show the new piece automatically.
*/

// ── CATEGORY CONFIG ──
// Maps folder names to display labels and filter keys
const CATEGORIES = [
  { folder: 'posters',           label: 'filter.posters',            filter: 'posters' },
  { folder: 'pamphlets',         label: 'filter.pamphlets',          filter: 'pamphlets' },
  { folder: 'calendars',         label: 'filter.calendars',          filter: 'calendars' },
  { folder: 'wedding-stationery',label: 'filter.wedding',            filter: 'wedding-stationery' },
  { folder: 'receipt-books',     label: 'filter.receipts',           filter: 'receipt-books' },
  { folder: 'certificates',      label: 'filter.certificates',       filter: 'certificates' },
  { folder: 'custom-artwork',    label: 'filter.custom',             filter: 'custom-artwork' },
  { folder: 'brand-identity',    label: 'filter.brand',              filter: 'brand-identity' },
  { folder: 'social-media-posts', label: 'filter.social',            filter: 'social-media-posts' },
  { folder: 'banner',            label: 'filter.banner',            filter: 'banner' },
];

// ── SEO META PER CATEGORY ──
const SEO_META = {
  'all': {
    title: 'Katib Imamuddin — Arabic Calligraphy & Design',
    description: 'Katib Imamuddin — specialist in Arabic calligraphy and bespoke graphic design. Posters, pamphlets, calendars, wedding stationery, brand identity, and more. Based in Noida, India.',
    url: 'https://katibimamuddin.github.io/',
  },
  'posters': {
    title: 'Arabic Calligraphy Posters | Katib Imamuddin',
    description: 'Statement posters featuring classical Arabic calligraphy — Thuluth, Naskh, and Kufic scripts. Custom poster design by Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#posters',
  },
  'pamphlets': {
    title: 'Pamphlets & Brochures | Katib Imamuddin',
    description: 'Tri-fold and bi-fold pamphlets and brochures with Arabic calligraphic design. Custom print collateral by Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#pamphlets',
  },
  'calendars': {
    title: 'Arabic Calligraphy Calendars | Katib Imamuddin',
    description: 'Wall and desk calendars with Arabic calligraphy and dual Hijri/Gregorian dates. Custom calendar design by Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#calendars',
  },
  'wedding-stationery': {
    title: 'Wedding Stationery & Nikah Invitations | Katib Imamuddin',
    description: 'Bespoke nikah invitations, save-the-dates, and wedding cards with Arabic calligraphy. Custom wedding stationery by Katib Imamuddin.',
    url: 'https://katibimamuddin.github.io/#wedding-stationery',
  },
  'receipt-books': {
    title: 'Custom Receipt Books | Katib Imamuddin',
    description: 'Professionally designed receipt books with custom Arabic business name and ornamental borders. By Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#receipt-books',
  },
  'certificates': {
    title: 'Arabic Calligraphy Certificates | Katib Imamuddin',
    description: 'Formal certificates of completion and appreciation with Arabic calligraphy and decorative borders. By Katib Imamuddin.',
    url: 'https://katibimamuddin.github.io/#certificates',
  },
  'custom-artwork': {
    title: 'Custom Arabic Calligraphy Artwork | Katib Imamuddin',
    description: 'One-of-a-kind calligraphic compositions — names, Quranic verses, and personal commissions. Bespoke artwork by Katib Imamuddin.',
    url: 'https://katibimamuddin.github.io/#custom-artwork',
  },
  'brand-identity': {
    title: 'Brand Identity Design | Katib Imamuddin',
    description: 'Logo design, letterheads, business cards, and full brand identity packages featuring Arabic calligraphic elements. By Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#brand-identity',
  },
  'social-media-posts': {
    title: 'Social Media Design | Katib Imamuddin',
    description: 'Custom social media post designs with Arabic calligraphy for Instagram, Facebook, and more. By Katib Imamuddin, Noida.',
    url: 'https://katibimamuddin.github.io/#social-media-posts',
  },
  'banner': {
    title: 'Banners & Signage | Katib Imamuddin',
    description: 'Printed and digital banners featuring Arabic calligraphy and bespoke graphic design. Custom banner design by Katib Imamuddin.',
    url: 'https://katibimamuddin.github.io/#banner',
  },
};

function updateMeta(filter) {
  const meta = SEO_META[filter] || SEO_META.all;

  document.title = meta.title;

  const sel = (attr, val) => { const el = document.querySelector(attr); if (el) el.setAttribute('content', val); };
  sel('meta[name="description"]',         meta.description);
  sel('meta[property="og:title"]',        meta.title);
  sel('meta[property="og:description"]',  meta.description);
  sel('meta[property="og:url"]',          meta.url);
  sel('meta[name="twitter:title"]',       meta.title);
  sel('meta[name="twitter:description"]', meta.description);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', meta.url);

  if (filter === 'all') {
    history.replaceState(null, '', window.location.pathname);
  } else {
    history.replaceState(null, '', `#${filter}`);
  }
}

// ── STATE ──
let allItems = [];       // flat array of all portfolio items across categories
let activeFilter = 'all';

// ── BOOT ──
document.addEventListener('DOMContentLoaded', () => {
  loadAllManifests();
  bindModal();
  bindContactForm();
  bindModalForm();
  window.addEventListener('hashchange', () => {
    const filter = window.location.hash.slice(1) || 'all';
    applyFilter(filter);
  });
});

// ── LOAD ALL MANIFESTS ──
async function loadAllManifests() {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = `<div class="portfolio-loading" data-key="portfolio.loading">Loading portfolio…</div>`;
  
  // Update loading text after language initialization
  setTimeout(() => {
    const loadingEl = grid.querySelector('[data-key="portfolio.loading"]');
    if (loadingEl && typeof getTranslation === 'function') {
      loadingEl.textContent = getTranslation('portfolio.loading');
    }
  }, 100);

  const results = await Promise.allSettled(
    CATEGORIES.map(cat => fetchManifest(cat))
  );

  allItems = [];

  results.forEach((result, i) => {
    if (result.status === 'fulfilled' && result.value) {
      const { cat, manifest } = result.value;
      manifest.files.forEach(file => {
        allItems.push({
          ...file,
          folder: cat.folder,
          filter: cat.filter,
          categoryLabel: cat.label,
          path: `assets/${cat.folder}/${file.filename}`,
        });
      });
    }
  });

  buildFilterButtons();
  const initialFilter = window.location.hash.slice(1) || 'all';
  applyFilter(initialFilter);
}

// ── FETCH A SINGLE MANIFEST ──
async function fetchManifest(cat) {
  try {
    const res = await fetch(`assets/${cat.folder}/manifest.json`);
    if (!res.ok) return null;
    const manifest = await res.json();
    return { cat, manifest };
  } catch {
    return null;
  }
}

// ── BUILD FILTER BUTTONS FROM LOADED DATA ──
function buildFilterButtons() {
  const container = document.getElementById('filterButtons');
  if (!container) return;

  // Find which categories actually have files
  const activeCats = CATEGORIES.filter(cat =>
    allItems.some(item => item.filter === cat.filter)
  );

  // Rebuild buttons — always keep "All"
  const allBtnText = typeof getTranslation === 'function' ? getTranslation('filter.all') : 'All';
  container.innerHTML = `<button class="filter-btn active" data-filter="all">${allBtnText}</button>`;

  activeCats.forEach(cat => {
    const count = allItems.filter(i => i.filter === cat.filter).length;
    const labelKey = cat.label;
    const labelText = typeof getTranslation === 'function' ? getTranslation(labelKey) : labelKey;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = cat.filter;
    btn.textContent = `${labelText} (${count})`;
    container.appendChild(btn);
  });

  bindFilterButtons();
}

// ── APPLY FILTER (sets active button + renders + updates meta) ──
function applyFilter(filter) {
  const valid = filter === 'all' || allItems.some(i => i.filter === filter);
  const target = valid ? filter : 'all';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === target);
  });
  renderPortfolio(target);
}

// ── RENDER PORTFOLIO GRID ──
function renderPortfolio(filter) {
  activeFilter = filter;
  updateMeta(filter);
  const grid = document.getElementById('portfolioGrid');
  const items = filter === 'all' ? allItems : allItems.filter(i => i.filter === filter);

  if (items.length === 0) {
    const emptyKey = filter === 'all' ? 'portfolio.empty' : 'portfolio.empty_category';
    const emptyText = typeof getTranslation === 'function' ? getTranslation(emptyKey) : (filter === 'all' ? 'Portfolio coming soon — check back shortly.' : 'No items in this category yet.');
    grid.innerHTML = `<div class="portfolio-empty">${emptyText}</div>`;
    return;
  }

  grid.innerHTML = items.map(item => buildItemHTML(item)).join('');
}

// ── BUILD SINGLE PORTFOLIO ITEM HTML ──
function buildItemHTML(item) {
  const isPDF = item.type === 'pdf' || item.filename.toLowerCase().endsWith('.pdf');

  const artworkHTML = isPDF
    ? `<div class="portfolio-artwork is-pdf">
        <div class="pdf-icon">⬜</div>
        <span class="pdf-label">PDF Document</span>
       </div>`
    : `<div class="portfolio-artwork">
        <img
          src="${item.path}"
          alt="${escapeHTML(item.title)}"
          loading="lazy"
          onerror="this.closest('.portfolio-artwork').classList.add('img-error'); this.style.display='none';"
        />
       </div>`;

  const overlayExtra = isPDF
    ? `<a href="${item.path}" target="_blank" rel="noopener" class="btn-open-pdf">View PDF ↗</a>`
    : '';

  // Get category label translation
  const categoryLabelKey = item.categoryLabel;
  const categoryLabelText = typeof getTranslation === 'function' ? getTranslation(categoryLabelKey) : categoryLabelKey;
  
  // Get button text translation
  const btnText = typeof getTranslation === 'function' ? getTranslation('form.sendRequest').replace(' →', '') : 'Request Similar';

  return `
    <article class="portfolio-item" data-filter="${escapeHTML(item.filter)}">
      ${artworkHTML}
      <div class="portfolio-item-info">
        <h3>${escapeHTML(item.title)}</h3>
        <span>${escapeHTML(categoryLabelText)}</span>
      </div>
      <div class="portfolio-overlay">
        <p>${escapeHTML(item.description)}</p>
        <button class="btn-like"
          onclick='openModal(${JSON.stringify(item.title)}, ${JSON.stringify(categoryLabelText)})'>
          ${btnText} ✦
        </button>
        ${overlayExtra}
      </div>
    </article>`;
}

// ── FILTER BUTTON BINDING ──
function bindFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      applyFilter(this.dataset.filter);
    });
  });
}

// ── MODAL ──
function bindModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(title, categoryLabel) {
  const inspiredText = typeof getTranslation === 'function' ? getTranslation('modal.inspired') : 'Inspired by:';
  const ref = `${title} (${categoryLabel})`;
  document.getElementById('modalRef').textContent = `${inspiredText} ${ref}`;
  document.getElementById('reqRef').value = ref;
  document.getElementById('modalForm').style.display = 'flex';
  document.getElementById('modal-success').style.display = 'none';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── MODAL FORM SUBMISSION (using iframe method) ──
function bindModalForm() {
  const form = document.getElementById('modalForm');
  if (!form) return;
  form.addEventListener('submit', handleModalSubmit);
}

async function handleModalSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('modalForm');
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending…';
  btn.disabled = true;
  
  try {
    // Create a hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'modal-form-target-' + Date.now();
    document.body.appendChild(iframe);
    
    // Set form to submit to iframe
    const originalAction = form.action;
    const originalMethod = form.method;
    const originalTarget = form.target;
    
    form.action = 'https://formspree.io/f/mkoybgqn';
    form.method = 'POST';
    form.target = iframe.name;
    
    // Submit the form
    form.submit();
    
    // Wait a bit for submission to process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('modal-success').style.display = 'block';
    
    // Reset form for next use
    form.action = originalAction;
    form.method = originalMethod;
    form.target = originalTarget;
    form.reset();
    
    // Close modal after showing success
    setTimeout(closeModal, 2800);
    
    // Clean up iframe
    setTimeout(() => iframe.remove(), 3000);
    
  } catch (error) {
    console.error('Modal form submission error:', error);
    const msg = typeof getTranslation === 'function' ? 'Something went wrong — please email directly.' : 'Something went wrong — please email directly.';
    showToast(msg);
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

// ── CONTACT FORM (using iframe method) ──
function bindContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', handleContactFormSubmit);
}

async function handleContactFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending…';
  btn.disabled = true;
  
  try {
    // Create a hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'contact-form-target-' + Date.now();
    document.body.appendChild(iframe);
    
    // Set form to submit to iframe
    const originalTarget = form.target;
    form.target = iframe.name;
    
    // Submit the form
    form.submit();
    
    // Wait a bit for submission to process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    const msg = typeof getTranslation === 'function' ? getTranslation('modal.success') : 'Message sent! Imamuddin will be in touch soon. ✦';
    showToast(msg);
    
    // Reset form
    form.target = originalTarget;
    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;
    
    // Clean up iframe
    setTimeout(() => iframe.remove(), 3000);
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    showToast('Something went wrong — please email directly.');
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ── UTILS ──
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
