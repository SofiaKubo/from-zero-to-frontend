const passwordElement = document.querySelector('input[name="password"]');
const repeatPasswordElement = document.querySelector('input[name="repeatPassword"]');

const values = {
  password: '',
  repeatPassword: '',
};

const onInput = (e) => {
  values[e.target.name] = e.target.value;

  const isValid = values.password && values.password === values.repeatPassword;

  [passwordElement, repeatPasswordElement].forEach((el) => {
    el.classList.toggle('valid', isValid);
  });
};

passwordElement.addEventListener('input', onInput);
repeatPasswordElement.addEventListener('input', onInput);
