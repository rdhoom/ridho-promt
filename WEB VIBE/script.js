// ====== EDIT DATA PROYEK KAMU DI SINI ======
const projects = [
  { title: 'WEATHERLY', desc: 'Aplikasi cuaca dengan data real-time, grafik, dan prakiraan yang rapi.', tags: ['React', 'JavaScript', 'API'], link: '#', bg: '#6ec1f0', art: '24°C' },
  { title: 'TASKFLOW', desc: 'Aplikasi manajemen tugas dengan papan kanban dan pengingat harian.', tags: ['Node.js', 'MongoDB'], link: '#', bg: '#ffd84d', art: '✓✓✓' },
  { title: 'PORTOFOLIO KLIEN', desc: 'Website company profile yang cepat, responsif, dan SEO friendly.', tags: ['HTML', 'CSS', 'JS'], link: '#', bg: '#ff9f5a', art: '</>' }
];

let i = 0;
const $ = id => document.getElementById(id);

function render() {
  const p = projects[i];
  $('art').style.background = p.bg;
  $('art').textContent = p.art;
  $('p-title').textContent = p.title;
  $('p-desc').textContent = p.desc;
  $('p-link').href = p.link;
  $('p-tags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
  $('dots').innerHTML = projects.map((_, n) =>
    `<button class="${n === i ? 'on' : ''}" aria-label="Proyek ${n + 1}" data-n="${n}"></button>`).join('');
}
$('prev').onclick = () => { i = (i - 1 + projects.length) % projects.length; render(); };
$('next').onclick = () => { i = (i + 1) % projects.length; render(); };
$('dots').onclick = e => { if (e.target.dataset.n) { i = +e.target.dataset.n; render(); } };
render();

// Menu mobile
const burger = document.querySelector('.burger'), menu = $('menu');
burger.onclick = () => burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
menu.onclick = e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } };

// Tahun footer
$('year').textContent = new Date().getFullYear();

// Foto cadangan jika assets/foto.jpg belum ada
const ph = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400"><rect width="300" height="400" fill="#c4f252"/><circle cx="150" cy="160" r="60" fill="#000"/><path d="M40 400c0-90 50-130 110-130s110 40 110 130z" fill="#000"/><text x="150" y="385" font-family="monospace" font-size="14" text-anchor="middle" fill="#c4f252">taruh foto di assets/foto.jpg</text></svg>');
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => { img.src = ph; }, { once: true });
});
