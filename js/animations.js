/* Ambient background: floating hearts + twinkling stars (CSS-driven, light) */
(function () {
  const fx = $("#fx"), small = innerWidth < 600;
  for (let i = 0; i < (small ? 10 : 18); i++) {
    const h = document.createElement("span"); h.className = "fx-h"; h.textContent = ["❤","💗","🌸","✨"][i % 4];
    h.style.cssText = `left:${rand(0, 100)}%;font-size:${rand(14, 32)}px;animation-duration:${rand(12, 26)}s;animation-delay:-${rand(0, 20)}s`;
    fx.appendChild(h);
  }
  for (let i = 0; i < (small ? 30 : 60); i++) {
    const s = document.createElement("span"); s.className = "fx-s";
    s.style.cssText = `left:${rand(0, 100)}%;top:${rand(0, 100)}%;animation-delay:-${rand(0, 3)}s`; fx.appendChild(s);
  }
})();

/* Hearts burst from an element */
function heartBurst(el, n = 18) {
  const r = el.getBoundingClientRect();
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span"); h.className = "hp"; h.textContent = ["❤️","💕","💖","✨"][i % 4];
    const a = rand(0, 6.28), d = rand(80, 200);
    h.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px`;
    document.body.appendChild(h); setTimeout(() => h.remove(), 1300);
  }
}

/* Confetti on #confetti canvas */
function startConfetti(ms = 9000) {
  const c = $("#confetti"); if (!c) return; const x = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const cols = ["#ff4d8d","#c13ab6","#b9a6ff","#ffc3a0","#8ecbff","#fff"];
  const ps = Array.from({ length: 140 }, () => ({ x: rand(0, c.width), y: rand(-c.height, 0), w: rand(6, 11), v: rand(2, 5), s: rand(-1, 1), c: cols[~~rand(0, 6)], r: rand(0, 6) }));
  const end = Date.now() + ms;
  (function f() {
    x.clearRect(0, 0, c.width, c.height);
    ps.forEach(p => { p.y += p.v; p.x += p.s; p.r += .1; if (p.y > c.height) { p.y = -10; p.x = rand(0, c.width); }
      x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(0, 0, p.w, p.w * .6); x.restore(); });
    Date.now() < end ? requestAnimationFrame(f) : x.clearRect(0, 0, c.width, c.height);
  })();
}

/* 3D card tilt (desktop pointers) */
function tilt(el) {
  const inner = el.firstElementChild;
  el.addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return; const r = el.getBoundingClientRect();
    inner.style.transform = `rotateY(${((e.clientX - r.left) / r.width - .5) * 14}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 14}deg)`; });
  el.addEventListener("pointerleave", () => inner.style.transform = "");
}
