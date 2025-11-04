const main = document.querySelector('.main');
const paragraph = document.querySelector('.paragraph');

const clonedParagraph = paragraph.cloneNode(true);

for (let i = 0; i < 5; i++) {
  const clonedParagraph = paragraph.cloneNode(true);
  main.appendChild(clonedParagraph);
}
