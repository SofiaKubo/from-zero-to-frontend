const header = document.querySelector('.header h1');

const title = header.textContent.trim();

console.log(title);
header.textContent = title;

const nodes = document.querySelectorAll('.list li');

const totalPriceElement = document.querySelector('.totalPrice');

let totalPrice = 0;

nodes.forEach((element) => {
  const [name, priceText] = element.textContent.split(':');

  if (priceText) {
    const price = Number(priceText.replace('руб.', '').trim());
    totalPrice += price;
  }
});

totalPriceElement.textContent = `Итого: ${totalPrice} руб.`;
