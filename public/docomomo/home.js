// Peavey Plaza cinemagraph: motion is confined to the water in the licensed still.
(() => {
  const photo = document.querySelector('.hero-photo');
  const surface = document.querySelector('#water-motion');
  const toggle = document.querySelector('#motion-toggle');
  if (!photo || !surface || !toggle) return;
  const ctx = surface.getContext('2d');
  if (!ctx) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches, visible = true, ready = false, request = 0, last = -Infinity, origin = 0;
  const make = () => document.createElement('canvas');
  const falls = make(), pool = make(), layer = make();
  const lc = layer.getContext('2d');
  if (!lc) return;
  let width, height, scale;
  // Coordinates follow the original 640 x 427 photo, not the browser crop.
  const cascades = [
    [[0,247],[42,247],[54,261],[52,319],[0,319]],
    [[164,204],[178,200],[228,200],[230,217],[216,235],[157,238]],
    [[225,246],[263,244],[277,263],[270,280],[287,310],[279,323],[199,323],[211,297],[215,272]],
    [[281,241],[452,241],[450,260],[440,271],[444,299],[432,323],[304,325],[280,308],[275,290]],
    [[463,228],[508,226],[517,246],[510,280],[516,300],[468,299],[456,271]],
    [[562,206],[617,204],[621,222],[610,246],[614,269],[604,297],[554,298],[551,275],[557,252]]
  ];
  function paintMask(target, polygons, feather) {
    target.width = width; target.height = height;
    const c = target.getContext('2d');
    c.fillStyle = '#fff';
    c.filter = 'blur(' + feather * scale + 'px)';
    for (const points of polygons) {
      c.beginPath();
      points.forEach(([x,y],i) => {
        const px=x*width/640, py=y*height/427;
        if(i===0) c.moveTo(px,py); else c.lineTo(px,py);
      });
      c.closePath(); c.fill();
    }
    c.filter = 'none';
  }
  function prepare() {
    if (!photo.naturalWidth || !photo.naturalHeight) return;
    width = Math.min(photo.naturalWidth, 1080);
    height = Math.round(width*photo.naturalHeight/photo.naturalWidth);
    scale = width/640;
    surface.width = layer.width = width;
    surface.height = layer.height = height;
    paintMask(falls,cascades,2.5);
    paintMask(pool,[[[0,342],[640,342],[640,427],[0,427]]],5);
    ready = true;
    toggle.hidden = false;
    sync();
  }
  function shifted(mask, dx1, dy1, dx2, dy2, blend, opacity) {
    lc.globalCompositeOperation = 'source-over';
    lc.globalAlpha = 1;
    lc.clearRect(0,0,width,height);
    lc.drawImage(photo,dx1,dy1,width,height);
    lc.globalAlpha = blend;
    lc.drawImage(photo,dx2,dy2,width,height);
    lc.globalAlpha = 1;
    lc.globalCompositeOperation = 'destination-in';
    lc.drawImage(mask,0,0);
    lc.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = opacity;
    ctx.drawImage(layer,0,0);
    ctx.globalAlpha = 1;
  }
  function frame(now) {
    request = 0;
    if (!ready || paused || !visible || document.hidden) return;
    if (now-last >= 1000/24) {
      if (!origin) origin = now;
      const t = (now-origin)/1000;
      const p = (t/1.15)%1, q=(p+.5)%1;
      const blend = Math.pow(Math.cos(Math.PI*p),2);
      const sway = Math.sin(t*2*Math.PI/4.6)*.65*scale;
      ctx.clearRect(0,0,width,height);
      // Crossfade two vertically moving phases so the reset is invisible.
      shifted(falls,sway, p*11*scale, -sway, q*11*scale, blend,.88);
      // Gentle movement in the water's reflection; the stone edges remain still.
      const angle=t*2*Math.PI/4.6;
      shifted(pool,Math.sin(angle)*1.7*scale,Math.cos(angle)*.7*scale,
        Math.sin(angle+Math.PI)*1.1*scale,Math.cos(angle+Math.PI)*.5*scale,.3,.48);
      last=now;
    }
    request=requestAnimationFrame(frame);
  }
  function sync() {
    toggle.textContent = paused ? 'Play water motion' : 'Pause water motion';
    toggle.setAttribute('aria-pressed', String(!paused));
    if (paused || !visible || document.hidden || !ready) {
      if(request) cancelAnimationFrame(request);
      request=0;
      if(paused) ctx.clearRect(0,0,width||0,height||0);
      return;
    }
    if(!request) request=requestAnimationFrame(frame);
  }
  toggle.addEventListener('click',()=>{paused=!paused; sync();});
  const onPreference = () => {paused=preference.matches; sync();};
  if (preference.addEventListener) preference.addEventListener('change',onPreference);
  else if (preference.addListener) preference.addListener(onPreference);
  document.addEventListener('visibilitychange',sync);
  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries=>{visible=entries[0].isIntersecting; sync();});
    observer.observe(photo);
  }
  photo.addEventListener('load',prepare);
  if(photo.complete && photo.naturalWidth) prepare();
})();
