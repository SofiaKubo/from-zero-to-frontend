const books = [
  {
    title: 'Три мушкетера',
    author: 'Александр Дюма',
    year: 2005,
  },
  {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 2015,
  },
  {
    title: 'Московская сага',
    author: 'Василий Аксёнов',
    year: 2012,
  },
];

const bookTemplate = document.getElementById('book-template').content;

function createBook(template, book) {
  const clonedBookTemplate = template.cloneNode(true);
  const bookElement = clonedBookTemplate.firstElementChild;

  bookElement.querySelector('.title').textContent = book.title;

  const authorP = bookElement.querySelector('#author');
  authorP.append(String(book.author));

  const yearP = bookElement.querySelector('#publish-year');
  yearP.append(String(book.year));

  return bookElement;
}

const bookSectionTemplate = document.getElementById('book-list-template').content;

const bookSection = bookSectionTemplate.cloneNode(true).firstElementChild;

const main = document.querySelector('.main');

const bookList = bookSection.querySelector('.list');

const fragment = document.createDocumentFragment();

books.forEach((book) => {
  const bookElement = createBook(bookTemplate, book);

  const listItem = document.createElement('li');
  listItem.appendChild(bookElement);

  fragment.appendChild(listItem);
});

bookList.append(fragment);
main.append(bookSection);
