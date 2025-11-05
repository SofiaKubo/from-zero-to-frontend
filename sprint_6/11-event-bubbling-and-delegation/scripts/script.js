const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

yellow.addEventListener('click', (e) => {
  alert('Вы кликнули на желтом поле!');
});

green.addEventListener('click', (e) => {
  e.stopPropagation();
});
