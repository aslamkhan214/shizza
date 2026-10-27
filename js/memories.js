const grid = $("#memoryGrid"), modal = new bootstrap.Modal("#memModal");
birthdayConfig.memories.forEach(m => {
  const col = document.createElement("div"); col.className = "col-12 col-sm-6 col-lg-4 mem reveal";
  col.innerHTML = `<div class="glass mem-in"><div class="ph"><img src="${m.img}" alt="${m.title}" loading="lazy" onerror="this.style.display='none'"></div><small>${m.date}</small><h3>${m.title}</h3><p>${m.text}</p></div>`;
  col.onclick = () => { $("#mImg").src = m.img; $("#mImg").style.display = ""; $("#mDate").textContent = m.date; $("#mTitle").textContent = m.title; $("#mText").textContent = m.text; modal.show(); };
  grid.appendChild(col); tilt(col); io.observe(col);
});
$("#mImg").onerror = e => e.target.style.display = "none";
