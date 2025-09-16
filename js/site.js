
// simple utility to mark current nav link active across pages
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)) a.classList.add('active');
  });
})();

// product gallery wiring (only runs on pages that have .gallery)
(function(){
  const main = document.querySelector('[data-gallery-main]');
  if(!main) return;
  const thumbs = [...document.querySelectorAll('[data-gallery-thumb]')];
  thumbs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const src = btn.getAttribute('data-src');
      if(src) main.src = src;
    });
  });

  const colorSel = document.querySelector('#color');
  const priceEl = document.querySelector('[data-price]');
  const prices = { charcoal: 249, vesuvius: 249, yuzu: 349 };
  if(colorSel && priceEl){
    const update = ()=>{
      const c = colorSel.value;
      main.src = `./img/icup-${c}.svg`;
      priceEl.textContent = `$${prices[c].toFixed(0)}`;
    };
    colorSel.addEventListener('change', update);
    update();
  }
})();
