const button = document.querySelector('.button');

let maxClick = 5;

const handleClick = () => {
  maxClick--;

  button.textContent = `Счётчик: ${5 - maxClick}`;

  if (maxClick === 0) {
    button.removeEventListener('click', handleClick);
  }
};

button.addEventListener('click', handleClick);
