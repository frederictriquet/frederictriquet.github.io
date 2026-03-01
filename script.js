const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.lang === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
