function createTitle(name) {
  const h2 = document.createElement('h2');
  h2.classList.add('title');
  h2.textContent = name;

  return h2;
}

function createField(key, value) {
  const p = document.createElement('p');
  const span = document.createElement('span');

  span.classList.add('field');
  span.textContent = `${key}: `;
  p.append(span, String(value));

  return p;
}

function createCard(user) {
  const card = document.createElement('article');
  card.classList.add('card');

  card.append(createTitle(user.name));

  const frag = document.createDocumentFragment();
  frag.append(createField('Возраст', user.age), createField('Email', user.email));

  card.append(frag);
  return card;
}

const container = document.createElement('ul');
container.classList.add('list');

users.forEach((u) => {
  const li = document.createElement('li');
  li.classList.add('list__item');
  li.append(createCard(u));
  container.append(li);
});

document.querySelector('.main').append(container);
