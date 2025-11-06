const addButton = document.querySelector('[name="add"]');
const removeButton = document.querySelector('[name="remove"]');
const addressContainer = document.querySelector('.address-container');
const controlsElement = document.querySelector('#controls');

let count = 1;

const onSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const result = {
    phone: formData.get('phone'),
    addresses: formData.getAll('addresses[]'),
  };

  console.log(result);
};

const onAdd = () => {
  count++;

  const newAddressLabel = document.createElement('label');
  newAddressLabel.classList.add('field');
  const newSpan = document.createElement('span');
  newSpan.textContent = 'Адрес ' + count + ':';
  const newAddressInput = document.createElement('input');
  newAddressInput.type = 'text';
  newAddressInput.name = 'addresses[]';

  newAddressLabel.append(newSpan);
  newAddressLabel.append(newAddressInput);
  addressContainer.insertBefore(newAddressLabel, controlsElement);

  if (count > 1) {
    removeButton.disabled = false;
  }
};

const onRemove = () => {
  const lastFields = Array.from(document.querySelectorAll('.field'));

  addressContainer.removeChild(lastFields.pop());

  count--;

  if (count === 1) {
    removeButton.disabled = true;
  }
};

addButton.addEventListener('click', onAdd);
removeButton.addEventListener('click', onRemove);
document.forms.addressForm.addEventListener('submit', onSubmit);
