/* ===== EDIT ME: all personal content lives here ===== */
const birthdayConfig = {
  name: "Shazia",
  husbandName: "aslam",
  music: "assets/music/music.mp3", // put your mp3 here
  letter: `My dearest Shazia,

Today the miles between us feel bigger than ever, but they cannot touch what we share.

You are in my thoughts when I wake, in my prayers at night, and in every quiet moment in between.

Distance can change where I am standing. It can never change where my heart belongs.

Happy Birthday, my love.

— ${"your ASLAM"}`,
  // Replace each img with your real photo (e.g. assets/images/photo1.jpg)
  memories: [
    { img: "assets/images/photo1.jpg", date: "Add date", title: "The Day We Met", text: "The day my life quietly changed forever." },
    { img: "assets/images/photo2.jpg", date: "Add date", title: "Our First Conversation", text: "I did not know then how much I would treasure your voice." },
    { img: "assets/images/photo3.jpg", date: "Add date", title: "That One Special Moment", text: "A moment I replay in my heart again and again." },
    { img: "assets/images/photo4.jpg", date: "Add date", title: "The Laughs We Shared", text: "Your laughter is my favourite sound in the world." },
    { img: "assets/images/photo5.jpg", date: "Add date", title: "The Moments I Wish I Could Relive", text: "Every one of them, with you beside me." }
  ],
  // Add as many reasons as you like
  reasons: ["Your smile","Your kindness","Your beautiful heart","The way you understand me","Your patience","Your presence","Your laughter","The comfort you give me","The way you make ordinary moments special","Your gentle voice","Your strength","The way you care for everyone","Your warm hugs","Your sense of humour","How you believe in me","Your prayers for me","Your eyes","How you listen","Your loyalty","How you forgive","Your quiet courage","The home you make of any place","Your sweet messages","Simply being you"]
};
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rand = (a, b) => Math.random() * (b - a) + a;

/* Scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: .2 });
$$(".reveal,.tl").forEach(el => io.observe(el));

/* Smooth page transitions */
$$("a[href$='.html']").forEach(a => a.addEventListener("click", e => {
  e.preventDefault(); document.body.classList.add("leaving");
  setTimeout(() => location.href = a.getAttribute("href"), 400);
}));

/* Music (never autoplays; remembers choice across pages) */
const audio = new Audio(birthdayConfig.music); audio.loop = true;
const musicBtn = $("#musicBtn");
function setMusic(on) {
  musicBtn.classList.toggle("on", on); $("#musicTxt").textContent = on ? "Music Off" : "Music On";
  try { localStorage.setItem("music", on ? "1" : "0"); if (on) localStorage.setItem("t", audio.currentTime); } catch (e) {}
  on ? audio.play().catch(() => musicBtn.classList.remove("on")) : audio.pause();
}
musicBtn.onclick = () => setMusic(audio.paused);
try { if (localStorage.getItem("music") === "1") { audio.currentTime = +localStorage.getItem("t") || 0; document.addEventListener("click", () => audio.paused && localStorage.getItem("music") === "1" && setMusic(true), { once: true }); } } catch (e) {}
addEventListener("pagehide", () => { try { localStorage.setItem("t", audio.currentTime); } catch (e) {} });
