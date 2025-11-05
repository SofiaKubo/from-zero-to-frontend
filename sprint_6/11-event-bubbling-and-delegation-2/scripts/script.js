const list = document.querySelector('.card-list');

list.addEventListener('click', (e) => {
  const card = e.target.closest('.card');

  if (!card) return;

  const text = card.querySelector('.text').textContent.trim();
  alert(text);
});
