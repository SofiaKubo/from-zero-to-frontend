function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const card = document.querySelector('.card');
const container = document.querySelector('.container');

function updateCard() {
  const r = container.scrollLeft;
  const area = Math.PI * r * r;
  card.textContent = `Радиус: ${r}, Площадь: ${area.toFixed(2)}`;
}

container.addEventListener('scroll', throttle(updateCard, 300));
