(() => {
  'use strict';
  const canvas = document.querySelector('#water-bears');
  const toggle = document.querySelector('#motion-toggle');
  if (!canvas || !toggle) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) { toggle.hidden = true; return; }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const logo = new Image();
  let width = 0, height = 0, bears = [], frame = 0, last = 0;
  let paused = reduced.matches;
  let loaded = false;
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    bears = Array.from({ length: width < 600 ? 16 : 40 }, () => ({
      x: Math.random() * (width + 180) - 90,
      y: Math.random() * height,
      size: 25 + Math.random() * 44,
      speed: (8 + Math.random() * 15) * (Math.random() > .5 ? 1 : -1),
      phase: Math.random() * Math.PI * 2,
      opacity: .16 + Math.random() * .2
    }));
    if (loaded) draw(0);
  }
  function draw(delta) {
    ctx.clearRect(0, 0, width, height);
    for (const bear of bears) {
      bear.x += bear.speed * delta;
      bear.phase += delta * .65;
      if (bear.x > width + 90) bear.x = -90;
      if (bear.x < -90) bear.x = width + 90;
      ctx.save();
      ctx.globalAlpha = bear.opacity;
      ctx.translate(bear.x, bear.y + Math.sin(bear.phase) * 13);
      ctx.rotate(Math.sin(bear.phase * .7) * .13);
      ctx.scale(bear.speed < 0 ? -1 : 1, 1);
      // Render the mascot area from the original, unchanged square logo.
      ctx.drawImage(logo, 320, 385, 620, 490, -bear.size / 2, -bear.size * .395, bear.size, bear.size * .79);
      ctx.restore();
    }
  }
  function tick(time) {
    frame = 0;
    if (paused || document.hidden || !loaded) return;
    draw(last ? Math.min((time - last) / 1000, .05) : 0);
    last = time;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
    toggle.textContent = paused ? 'Resume animation' : 'Pause animation';
    toggle.setAttribute('aria-pressed', String(paused));
    if (!paused && !document.hidden && loaded) frame = requestAnimationFrame(tick);
  }
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('resize', resize, { passive: true });
  logo.onload = () => { loaded = true; resize(); toggle.hidden = false; sync(); };
  logo.onerror = () => { canvas.hidden = true; toggle.hidden = true; };
  resize();
  logo.src = 'tunvio.png';
})();
