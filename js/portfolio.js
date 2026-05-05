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
  { folder: 'posters',           label: 'Posters',            filter: 'posters' },
  { folder: 'pamphlets',         label: 'Pamphlets',          filter: 'pamphlets' },
  { folder: 'calendars',         label: 'Calendars',          filter: 'calendars' },
  { folder: 'wedding-stationery',label: 'Wedding Stationery', filter: 'wedding-stationery' },
  { folder: 'receipt-books',     label: 'Receipt Books',      filter: 'receipt-books' },
  { folder: 'certificates',      label: 'Certificates',       filter: 'certificates' },
  { folder: 'custom-artwork',    label: 'Custom Artwork',     filter: 'custom-artwork' },
  { folder: 'brand-identity',    label: 'Brand Identity',     filter: 'brand-identity' },
];

// ── STATE ──
let allItems = [];       // flat array of all portfolio items across categories
let activeFilter = 'all';

// ── BOOT ──
document.addEventListener('DOMContentLoaded', () => {
  loadAllManifests();
  bindFilterButtons();
  bindModal();
  bindContactForm();
});

// ── LOAD ALL MANIFESTS ──
async function loadAllManifests() {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '<div class="portfolio-loading">Loading portfolio…</div>';

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
  renderPortfolio('all');
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
  container.innerHTML = `<button class="filter-btn active" data-filter="all">All</button>`;

  activeCats.forEach(cat => {
    const count = allItems.filter(i => i.filter === cat.filter).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = cat.filter;
    btn.textContent = `${cat.label} (${count})`;
    container.appendChild(btn);
  });

  bindFilterButtons();
}

// ── RENDER PORTFOLIO GRID ──
function renderPortfolio(filter) {
  activeFilter = filter;
  const grid = document.getElementById('portfolioGrid');
  const items = filter === 'all' ? allItems : allItems.filter(i => i.filter === filter);

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="portfolio-empty">
        ${filter === 'all'
          ? 'Portfolio coming soon — check back shortly.'
          : 'No items in this category yet.'}
      </div>`;
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

  return `
    <article class="portfolio-item" data-filter="${escapeHTML(item.filter)}">
      ${artworkHTML}
      <div class="portfolio-item-info">
        <h3>${escapeHTML(item.title)}</h3>
        <span>${escapeHTML(item.categoryLabel)}</span>
      </div>
      <div class="portfolio-overlay">
        <p>${escapeHTML(item.description)}</p>
        <button class="btn-like"
          onclick='openModal(${JSON.stringify(item.title)}, ${JSON.stringify(item.categoryLabel)})'>
          Request Similar ✦
        </button>
        ${overlayExtra}
      </div>
    </article>`;
}

// ── FILTER BUTTON BINDING ──
function bindFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderPortfolio(this.dataset.filter);
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
  const ref = `${title} (${categoryLabel})`;
  document.getElementById('modalRef').textContent = `Inspired by: ${ref}`;
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

async function handleModalSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('modalForm');
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/mkoybgqn', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('modal-success').style.display = 'block';
      setTimeout(closeModal, 2800);
    } else {
      showToast('Something went wrong — please email directly.');
    }
  } catch {
    showToast('Something went wrong — please email directly.');
  } finally {
    btn.textContent = 'Send Request →';
    btn.disabled = false;
  }
}

// ── CONTACT FORM ──
function bindContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/mkoybgqn', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        showToast('Message sent! Imamuddin will be in touch soon. ✦');
        form.reset();
      } else {
        showToast('Something went wrong — please email directly.');
      }
    } catch {
      showToast('Something went wrong — please email directly.');
    } finally {
      btn.textContent = 'Send Enquiry';
      btn.disabled = false;
    }
  });
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
