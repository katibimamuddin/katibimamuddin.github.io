// ── intro.js ──────────────────────────────────────────────────────────────
// Controls the loading screen overlay.
// The SVG animation plays once (6.71s):
//   0–6.38s  strokes draw right→left
//   6.38s    fill snaps to black
//   6.55s    hold (fully drawn + filled)
//   6.71s    SVG clears itself
// Then this script fades the overlay out and reveals the site.
// ─────────────────────────────────────────────────────────────────────────

(function () {
  const SVG_DURATION   = 6710;   // ms — must match dur in loading.svg
  const FADE_DELAY     = 200;    // ms after SVG ends before fade starts
  const FADE_DURATION  = 800;    // ms for overlay to fade out

  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  // Prevent scrolling while overlay is visible
  document.body.style.overflow = 'hidden';

  // Skip button
  const skipBtn = overlay.querySelector('.intro-skip');
  if (skipBtn) {
    skipBtn.addEventListener('click', dismiss);
  }

  // Also allow click anywhere on overlay to skip
  overlay.addEventListener('click', dismiss);

  // Auto-dismiss after animation completes
  const autoTimer = setTimeout(dismiss, SVG_DURATION + FADE_DELAY);

  let dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);

    // Fade the overlay out
    overlay.style.transition = `opacity ${FADE_DURATION}ms ease`;
    overlay.style.opacity = '0';

    setTimeout(function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, FADE_DURATION);
  }
})();
