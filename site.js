// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Active nav highlight by URL path
  const path = location.pathname.replace(/\/+/g, '') || '/';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const norm = href.replace(/\/+/g, '');
    if (norm && path.endsWith(norm)) a.classList.add('active');
  });
});