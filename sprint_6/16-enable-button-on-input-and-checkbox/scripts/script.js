const nameElement = document.querySelector('input[name="name"]');
const agreementElement = document.querySelector('input[name="agreement"]');
const buttonElement = document.querySelector('button');

const values = {
  name: '',
  agreement: false,
};

const onChange = (e) => {
  values[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim();

  const isValid = values.name && values.agreement;

  buttonElement.disabled = !isValid;
};

nameElement.addEventListener('input', onChange);
agreementElement.addEventListener('change', onChange);
