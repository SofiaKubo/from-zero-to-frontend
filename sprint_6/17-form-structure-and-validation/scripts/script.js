const contactsElement = document.querySelector('form[name="contacts"]');
const nameElement = document.querySelector('input[name="name"]');
const emailElement = document.querySelector('input[name="email"]');
const telegramElement = document.querySelector('input[name="telegram"]');

const values = {
  name: '',
  email: '',
  telegram: '',
};

const onChange = (e) => {
  values[e.target.name] = e.target.value;
};

const onSubmit = (e) => {
  e.preventDefault();

  const form = document.forms.contacts;
  const fields = ['name', 'email', 'telegram'];

  const missing = fields.filter((key) => !form.elements[key].value.trim());

  if (missing.length === 0) {
    alert('Принято!');
  } else {
    alert('Необходимо заполнить поля: ' + missing.join(', '));
  }
};

contactsElement.addEventListener('submit', onSubmit);
nameElement.addEventListener('change', onChange);
emailElement.addEventListener('change', onChange);
telegramElement.addEventListener('change', onChange);
