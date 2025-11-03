const nodes = document.querySelectorAll('.list li');

let total = 0;

nodes.forEach((element) => {
  total += Number(element.dataset.minutes);
});

const dataTotal = document.querySelector('h3[data-total]');

dataTotal.dataset.total = total;
