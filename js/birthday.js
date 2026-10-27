/* Letter typewriter */
if ($("#letterText")) {
  const t = birthdayConfig.letter.replace("Your Name", birthdayConfig.husbandName), el = $("#letterText"); let i = 0;
  const type = () => { el.textContent = t.slice(0, ++i);
    if (i < t.length) setTimeout(type, 45);
    else { $(".cursor").classList.add("hidden"); [$("#letterEnd"), $("#letterNext")].forEach(e => e.classList.remove("hidden")); } };
  setTimeout(type, 800);
}
/* Miss me */
$("#missBtn")?.addEventListener("click", e => { heartBurst(e.currentTarget, 26); $("#missMsg").classList.remove("hidden");
  document.body.style.boxShadow = "inset 0 0 160px rgba(255,77,141,.5)"; setTimeout(() => document.body.style.boxShadow = "", 3000); });
/* Heart, reasons, love meter */
$("#bigHeart")?.addEventListener("click", e => { $("#heartMsg").textContent = "I love you ❤️"; heartBurst(e.currentTarget, 12); });
let last = -1;
$("#reasonBtn")?.addEventListener("click", () => { const r = birthdayConfig.reasons; let n; do n = ~~rand(0, r.length); while (n === last && r.length > 1); last = n;
  const c = $("#reasonCard"); c.style.opacity = 0; setTimeout(() => { c.textContent = r[n] + " ❤️"; c.style.transition = "opacity .6s"; c.style.opacity = 1; }, 200); });
$("#meterBtn")?.addEventListener("click", () => { $("#meterFill").style.width = "100%"; let n = 0;
  const id = setInterval(() => { $("#meterTxt").textContent = ++n + " %"; if (n >= 100) { clearInterval(id); setTimeout(() => $("#meterTxt").innerHTML = "∞ %<br><span class='script'>Our love cannot be measured.</span>", 300); } }, 25); });
/* Birthday finale */
$("#blowBtn")?.addEventListener("click", e => {
  document.body.classList.add("out"); e.currentTarget.classList.add("hidden");
  $("#finale").classList.remove("hidden"); startConfetti(); heartBurst($(".cake"), 30);
  if (!audio.paused || birthdayConfig.music) setMusic(true);
  setTimeout(() => { const f = $("#finalMsg"); f.classList.remove("hidden"); $$(".fl", f).forEach((el, i) => setTimeout(() => el.classList.add("in"), 1500 + i * 2500)); f.scrollIntoView({ behavior: "smooth" }); }, 6000);
});
