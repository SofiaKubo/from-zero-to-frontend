for (let i = 1; i < 10; i++) {
  const button = document.createElement('button');
  button.textContent = i.toString();
  button.type = 'button';

  document.forms.pinpad.append(button);
}

const onClick = (e) => {
  const button = e.target;

  if (button.tagName !== 'BUTTON') return;

  const screen = document.forms.pinpad.elements.screen;
  screen.value += button.textContent;
};

document.forms.pinpad.addEventListener('click', onClick);
