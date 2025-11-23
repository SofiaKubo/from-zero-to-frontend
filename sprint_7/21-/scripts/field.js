export function createFieldModule() {
  const state = {
    width: 10,
    height: 10,
    square: {
      x: 0,
      y: 0,
      color: 'green',
    },
  };

  function initialize(x, y, color, width, height) {
    state.square.x = x;
    state.square.y = y;
    state.square.color = color;
    state.width = width;
    state.height = height;
  }

  function moveRight(step) {
    state.square.x = state.square.x + step;
  }

  function moveLeft(step) {
    state.square.x = state.square.x - step;
  }

  function moveUp(step) {
    state.square.y = state.square.y - step;
  }

  function moveDown(step) {
    state.square.y = state.square.y + step;
  }

  function getWidth() {
    return state.width;
  }

  function getHeight() {
    return state.height;
  }

  function getSquarePos() {
    return { x: state.square.x, y: state.square.y };
  }

  function getSquareColor() {
    return state.square.color;
  }

  return {
    initialize,
    moveRight,
    moveLeft,
    moveUp,
    moveDown,
    getWidth,
    getHeight,
    getSquarePos,
    getSquareColor,
  };
}
