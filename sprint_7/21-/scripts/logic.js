import { createFieldModule } from './field.js';

export function createLogicModule() {
  const field = createFieldModule();

  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  function renderField() {
    table.innerHTML = '';

    const width = field.getWidth();
    const height = field.getHeight();
    const square = field.getSquarePos();
    const color = field.getSquareColor();

    for (let y = 0; y < height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < width; x++) {
        const cell = document.createElement('td');
        cell.style.width = '20px';
        cell.style.height = '20px';
        cell.style.border = '1px solid #ccc';

        if (x === square.x && y === square.y) {
          cell.style.backgroundColor = color;
        }

        row.appendChild(cell);
      }

      table.appendChild(row);
    }
  }

  function initializeListener() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          field.moveRight(1);
          break;
        case 'ArrowLeft':
          field.moveLeft(1);
          break;
        case 'ArrowUp':
          field.moveUp(1);
          break;
        case 'ArrowDown':
          field.moveDown(1);
          break;
        default:
          return;
      }

      renderField();
    });
  }

  function initializeField(x, y, color, width, height) {
    field.initialize(x, y, color, width, height);

    const app = document.querySelector('#app');
    app.innerHTML = '';
    app.appendChild(table);

    renderField();
    initializeListener();
  }

  return { initializeField };
}
