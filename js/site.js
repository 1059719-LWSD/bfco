/* Footer year */
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Simple gallery & variant sync for iCup */
  const main = document.querySelector('[data-gallery-main]');
  const thumbs = document.querySelectorAll('[data-gallery-thumb]');
  const select = document.querySelector('[data-variant-select]');
  const priceEl = document.querySelector('[data-price]');

  const priceMap = {
    charcoal: 249,
    vesuvius: 249,
    yuzu: 349
  };

  // Ensure default image appears
  if (main && !main.getAttribute('src')) {
    main.setAttribute('src', './img/icup-charcoal.webp');
  }

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      if (main && src) main.setAttribute('src', src);
    });
  });

  if (select) {
    select.addEventListener('change', (e) => {
      const val = e.target.value; // charcoal | vesuvius | yuzu
      const src = `./img/icup-${val}.webp`;
      if (main) main.setAttribute('src', src);
      if (priceEl && priceMap[val]) {
        priceEl.textContent = `$${priceMap[val]}`;
      }
    });
  }
});