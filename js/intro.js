/* ── KATIB IMAMUDDIN — INTRO CALLIGRAPHY ANIMATION ── */
/*
  HOW TO SWAP IN YOUR REAL CALLIGRAPHY:
  1. Trace your calligraphy in Inkscape or Illustrator (see README)
  2. Export as SVG — make sure each stroke is a separate <path>
  3. Open the SVG file, copy all <path> elements
  4. In index.html, find the #intro-overlay section
  5. Replace the placeholder <path> elements with your paths
  6. Add class="sig-stroke" to each path
  7. Add class="sig-dot" to any dot/circle elements
  8. Adjust STROKE_TIMING below to match the number of strokes
  9. Make sure paths follow natural pen direction (right → left for Arabic)
*/

(function () {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  // Skip on repeat visits within the session
  if (sessionStorage.getItem('katib-intro-seen')) {
    overlay.remove();
    return;
  }
  sessionStorage.setItem('katib-intro-seen', '1');

  // ── TIMING CONFIG ──
  // One entry per .sig-stroke path, in order.
  // delay: ms after animation starts; duration: ms to draw that stroke.
  // Adjust these when you swap in your real calligraphy.
  const STROKE_TIMING = [
    { delay: 0,    duration: 1800 }, // stroke 1 — main baseline
    { delay: 350,  duration: 850  }, // stroke 2 — ascending loop
    { delay: 900,  duration: 700  }, // stroke 3 — cup/bowl
    { delay: 1700, duration: 750  }, // stroke 4 — tail flourish
  ];

  const DOTS_DELAY    = 2050; // ms — when dots appear
  const TEXT_DELAY    = 2250; // ms — when name text fades in
  const DISMISS_DELAY = 3700; // ms — when overlay starts fading out
  const FADE_MS       = 800;  // ms — fade-out duration

  function dismiss() {
    overlay.classList.add('intro-out');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, FADE_MS + 50);
  }

  function run() {
    const strokes = overlay.querySelectorAll('.sig-stroke');
    const dots    = overlay.querySelectorAll('.sig-dot');
    const nameEl  = overlay.querySelector('.intro-name');
    const subEl   = overlay.querySelector('.intro-sub');

    // Set all strokes invisible (dashoffset = full path length)
    strokes.forEach(path => {
      const len = path.getTotalLength ? path.getTotalLength() : 600;
      path.style.strokeDasharray  = len;
      path.style.strokeDashoffset = len;
    });

    // One double-rAF ensures the browser paints the invisible state
    // before we set the target (dashoffset = 0), triggering the transition
    requestAnimationFrame(() => requestAnimationFrame(() => {
      strokes.forEach((path, i) => {
        const t = STROKE_TIMING[i] || { delay: i * 500, duration: 1000 };
        path.style.transition = `stroke-dashoffset ${t.duration}ms ease-in-out ${t.delay}ms`;
        path.style.strokeDashoffset = 0;
      });
    }));

    setTimeout(() => {
      dots.forEach(d => d.classList.add('sig-dot-visible'));
    }, DOTS_DELAY);

    setTimeout(() => {
      if (nameEl) nameEl.classList.add('intro-visible');
      if (subEl)  subEl.classList.add('intro-visible');
    }, TEXT_DELAY);

    setTimeout(dismiss, DISMISS_DELAY);
  }

  // Click / tap anywhere to skip
  overlay.addEventListener('click', dismiss);

  // Prevent page scroll while overlay is up
  document.body.style.overflow = 'hidden';

  // Short delay to ensure fonts and SVG geometry are ready
  setTimeout(run, 150);
})();
