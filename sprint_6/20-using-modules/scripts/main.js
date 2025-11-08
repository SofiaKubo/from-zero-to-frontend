import { generateForm } from './lib.js';

const schema = {
  fieldsets: [
    {
      label: 'Контактные данные',
      schema: [
        { name: 'name', type: 'text', label: 'Имя:', props: { class: 'field' } },
        { name: 'email', type: 'email', label: 'Email:', props: { class: 'field' } },
        { name: 'telegram', type: 'text', label: 'Telegram:', props: { class: 'field' } },
      ],
      props: { class: 'container' },
    },
  ],
  buttons: [{ type: 'submit', text: 'Проверить' }],
};

function validate() {
  for (let field of schema.fieldsets[0].schema) {
    if (!document.forms.contacts.elements[field.name].value) {
      return false;
    }
  }

  return true;
}

function submit() {
  alert('Контактные данные успешно сохранены!');
}

const app = document.querySelector('#app');

app.append(generateForm('contacts', schema, { class: 'container' }, validate, submit));
