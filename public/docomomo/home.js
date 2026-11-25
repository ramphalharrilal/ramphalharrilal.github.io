// Play the uploaded Canva clip; never substitute the previous simulated waterfall.
(() => {
  const video = document.querySelector('#hero-video');
  const button = document.querySelector('#video-toggle');
  const hero = document.querySelector('.hero');
  if (!video || !button || !hero) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true, userPaused = false, failed = false, initialized = false;
  function label() {
    button.textContent = video.paused ? 'Play waterfall video' : 'Pause waterfall video';
    button.setAttribute('aria-pressed', String(!video.paused));
  }
  function sync() {
    if (failed) return;
    if (preference.matches) {
      video.pause(); video.hidden = true; button.hidden = true; return;
    }
    if (!initialized) {
      initialized = true;
      video.muted = true;
      video.preload = 'auto';
      video.src = video.dataset.src;
      video.load();
    }
    button.hidden = false;
    if (userPaused || !visible || document.hidden) video.pause();
    else video.play().catch(label);
    label();
  }
  video.addEventListener('playing', () => { video.hidden = false; label(); });
  video.addEventListener('pause', label);
  video.addEventListener('error', () => {
    failed = true;
    video.hidden = true;
    button.hidden = true;
    console.warn('Peavey Plaza video failed to load; showing the original still photograph.', video.error);
  });
  button.addEventListener('click', () => {
    userPaused = !video.paused;
    sync();
  });
  if (preference.addEventListener) preference.addEventListener('change', sync);
  else if (preference.addListener) preference.addListener(sync);
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {visible = entries[0].isIntersecting; sync();}).observe(hero);
  }
  sync();
})();
