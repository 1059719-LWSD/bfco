// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
navToggle.addEventListener('click', () => {
const open = nav.style.display === 'flex' || getComputedStyle(nav).display === 'flex';
nav.style.display = open ? 'none' : 'flex';
navToggle.setAttribute('aria-expanded', String(!open));
});
}


// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Contact form (client-side validation + demo submit)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
function setError(id, msg) {
const small = document.querySelector(`small[data-for="${id}"]`);
if (small) small.textContent = msg || '';
}
function validateEmail(v) { return /.+@.+\..+/.test(v); }


if (form) {
form.addEventListener('submit', async (e) => {
e.preventDefault();
setError('name'); setError('email'); setError('message');
const data = Object.fromEntries(new FormData(form).entries());
let ok = true;
if (!data.name || data.name.trim().length < 2) { setError('name', 'Please enter your name.'); ok = false; }
if (!validateEmail(data.email)) { setError('email', 'Please use a valid email.'); ok = false; }
if (!data.message || data.message.trim().length < 10) { setError('message', 'Tell us a bit more (~10+ chars).'); ok = false; }
if (!ok) return;


statusEl.textContent = 'Sending…';


// Demo submission: simulate latency; replace with your form endpoint
await new Promise(r => setTimeout(r, 700));
statusEl.textContent = 'Thanks! We\'ll get back to you shortly.';
form.reset();
});
}


// Fun hero canvas: simple particle flow field (lightweight CFD‑lite vibes)
(function flowField(){
const c = document.getElementById('flowCanvas');
if (!c) return; const ctx = c.getContext('2d');
const W = c.width, H = c.height; let t = 0;
const particles = Array.from({length: 500}, () => ({
x: Math.random()*W,
y: Math.random()*H,
a: Math.random()*Math.PI*2,
s: 0.5 + Math.random()*1.2
}));


function vectorField(x, y, time){
const u = Math.sin((y+time)*0.006) + Math.cos((x-time)*0.004);
const v = Math.cos((x+time)*0.006) - Math.sin((y-time)*0.004);
return [u, v];
}


function tick(){
t += 0.8;
ctx.fillStyle = 'rgba(12,15,26,0.2)';
ctx.fillRect(0,0,W,H);
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'lighter';
particles.forEach(p => {
const [u,v] = vectorField(p.x, p.y, t);
const nx = p.x + u * p.s, ny = p.y + v * p.s;
ctx.strokeStyle = 'rgba(128,164,255,0.25)';
ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
p.x = (nx + W) % W; p.y = (ny + H) % H;
});
requestAnimationFrame(tick);
}
ctx.fillStyle = '#0c0f1a'; ctx.fillRect(0,0,W,H); tick();
})();