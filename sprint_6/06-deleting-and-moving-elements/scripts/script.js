const animals = document.querySelector('.animals-list');
const birds = document.querySelector('.birds-list');

const items = animals.querySelectorAll(':scope > li');

const birch = items[1];
const tit = items[3];

birch?.remove();
tit && birds.appendChild(tit);
