const journey = document.querySelector('.journey');
const motion = window.matchMedia('(min-width: 801px) and (prefers-reduced-motion: no-preference)');
const stops = [...journey.querySelectorAll('[data-stop]')];
const scenes = [...journey.querySelectorAll('[data-scene]')];
let frame = null;

function updateScene() {
  frame = null;
  const readingLine = window.innerHeight * 0.56;
  const current = stops.reduce((selected, stop) => {
    return stop.getBoundingClientRect().top <= readingLine ? stop : selected;
  }, stops[0]);
  for (const scene of scenes) {
    scene.classList.toggle('is-active', scene.dataset.scene === current.dataset.stop);
  }
}

function onScroll() {
  if (motion.matches && frame === null) frame = requestAnimationFrame(updateScene);
}

function syncLayout() {
  document.documentElement.classList.toggle('js-story', motion.matches);
  onScroll();
}

if ('requestAnimationFrame' in window) {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  motion.addEventListener('change', syncLayout);
  syncLayout();
}
