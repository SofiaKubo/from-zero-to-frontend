const user = {
  name: 'Хабаров Валентин',
  age: 35,
  email: 'habar@yandex.ru',
};

function createTitle(name) {
  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = name;
  return title;
}

function createCard(user) {
  const card = document.createElement('article');
  card.classList.add('card');

  const title = createTitle(user.name);
  card.append(title);
  return card;
}

document.querySelector('.main').append(createCard(user));
