const nameElement = document.querySelector('input[name="name"]');
const agreementElement = document.querySelector('input[name="agreement"]');
const buttonElement = document.querySelector('button');

const values = {
  name: '',
  agreement: false,
};

const onChange = (e) => {
  buttonElement.disabled = nameElement.value && agreementElement.checked ? false : true;
};

nameElement.addEventListener('input', onChange);
agreementElement.addEventListener('change', onChange);
