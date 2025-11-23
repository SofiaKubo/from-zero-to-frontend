const card = document.querySelector('.card');
const container = document.querySelector('.container');

const lastScrollTop = 0;
const rect = card.getBoundingClientRect();
card.style.left = container.getBoundingClientRect().left + 'px';
card.textContent = `Left: ${card.style.left}`;

container.addEventListener('scroll', () => {
  const left = `${rect.left + container.scrollTop}px`;
  card.style.left = `${rect.left + container.scrollTop}px`;
  card.textContent = `Left: ${left}`;
});
