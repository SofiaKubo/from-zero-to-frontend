const text = document.querySelector('.text');

document.addEventListener('keydown', (e) => {
  text.textContent = `Вы нажали: ${e.key} ${e.code}`;
});
