// Force remove backgrounds from hero value prop cards
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const cards = document.querySelectorAll('#home .grid.grid-cols-1 > div, #home .hero-value-prop, .hero-value-prop');
      cards.forEach(card => {
        card.style.background = 'transparent';
        card.style.backgroundColor = 'transparent';
        card.style.backgroundImage = 'none';
        card.style.backdropFilter = 'none';
        card.style.webkitBackdropFilter = 'none';
        card.style.border = 'none';
        card.style.boxShadow = 'none';
      });
    }, 100);
  });
}
