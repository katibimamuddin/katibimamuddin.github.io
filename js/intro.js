// ── intro.js ──────────────────────────────────────────────────────────────
// Controls the loading screen overlay.
// The SVG animation plays once (5s), strokes draw then hold.
// After all strokes finish (~2.25s) + a brief hold, loading_done.svg fades in.
// Text appears after the done state has fully faded in.
// ─────────────────────────────────────────────────────────────────────────

(function () {
  const SVG_DURATION   = 5000;   // ms — must match dur in loading.svg
  const FADE_DELAY     = 200;    // ms after SVG ends before overlay fades
  const FADE_DURATION  = 800;    // ms for overlay to fade out
  const DONE_DELAY     = 2500;   // ms — brief hold after all strokes finish (~2.25s)
  const DONE_FADE_MS   = 600;    // ms — must match .intro-done CSS transition

  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  document.body.style.overflow = 'hidden';

  const skipBtn = overlay.querySelector('.intro-skip');
  if (skipBtn) skipBtn.addEventListener('click', dismiss);
  overlay.addEventListener('click', dismiss);

  const autoTimer = setTimeout(dismiss, SVG_DURATION + FADE_DELAY);

  const doneTimer = setTimeout(function () {
    const doneEl = overlay.querySelector('.intro-done');
    if (doneEl) doneEl.classList.add('visible');
  }, DONE_DELAY);

  const textTimer = setTimeout(function () {
    const nameEl = overlay.querySelector('.intro-name');
    const subEl  = overlay.querySelector('.intro-sub');
    if (nameEl) nameEl.classList.add('intro-text-show');
    if (subEl)  subEl.classList.add('intro-text-show');
  }, DONE_DELAY + DONE_FADE_MS);

  let dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);
    clearTimeout(doneTimer);
    clearTimeout(textTimer);

    overlay.style.transition = `opacity ${FADE_DURATION}ms ease`;
    overlay.style.opacity = '0';

    setTimeout(function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, FADE_DURATION);
  }
})();
