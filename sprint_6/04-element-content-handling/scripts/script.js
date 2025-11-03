const nodes = document.querySelectorAll('.list li');

const productsElement = document.querySelector('.products');

let products = new Set();

nodes.forEach((element) => {
  const [name, priceText] = element.textContent.split(':');

  if (name) {
    products.add(name.trim());
  }
});

productsElement.textContent = `Мы купили: ${Array.from(products).join(', ')}.`;
