// footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// simple form demo
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
function validEmail(v){return /.+@.+\..+/.test(v)}
if (form){
form.addEventListener('submit', async (e)=>{
e.preventDefault();
const data = Object.fromEntries(new FormData(form).entries());
if(!data.name || !validEmail(data.email) || !data.message){
statusEl.textContent = 'please fill all fields.'; return;
}
statusEl.textContent = 'sending…';
await new Promise(r=>setTimeout(r,600));
statusEl.textContent = 'thanks — we\'ll reply soon.';
form.reset();
});
}