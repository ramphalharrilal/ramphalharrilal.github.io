const photo = document.querySelector('.hero-photo');
const replay = document.querySelector('#replay');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let reveal;

function play() {
  reveal?.cancel();
  if (motion.matches) return;
  reveal = photo.animate(
    [{ transform: 'translate(-3%, 6%) scale(1.43)' }, { transform: 'none' }],
    { duration: 4700, easing: 'cubic-bezier(.2,.7,.25,1)' }
  );
}

function syncMotion() {
  replay.hidden = motion.matches;
  play();
}

if (typeof photo.animate === 'function') {
  replay.addEventListener('click', play);
  motion.addEventListener('change', syncMotion);
  syncMotion();
}
