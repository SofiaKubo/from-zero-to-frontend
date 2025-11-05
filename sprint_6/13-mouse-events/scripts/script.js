const card = document.querySelector('.card');

let isDragging = false;
const cursorPosition = { x: 0, y: 0 };

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  if (cursorPosition.x === 0 && cursorPosition.y === 0) {
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;
  }
});

card.addEventListener('mouseup', () => {
  isDragging = false;
});

card.addEventListener('mousemove', (e) => {
  if (!isDragging) {
    return;
  }

  e.stopPropagation();
  e.preventDefault();

  const newPositionX = e.clientX - cursorPosition.x;
  const newPositionY = e.clientY - cursorPosition.y;

  e.currentTarget.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
});
