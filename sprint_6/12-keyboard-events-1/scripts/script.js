document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.ctrlKey && e.key === 'H') {
    console.log('Вы нажали Shift+Ctrl+H');
  }
});
