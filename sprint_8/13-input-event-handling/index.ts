function handleInputChange(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    console.log(`Значение поля ввода: ${event.target.value}`);
  }
}

// Найти поле ввода с id "my-input" и сохранить его в переменную myInput
const myInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#my-input');

if (myInput) {
  myInput.addEventListener('input', handleInputChange);
}
