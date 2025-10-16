function getShipmentProducts() {
  const products = [
    { name: 'Смартфон', dimensions: { length: 15, width: 7, height: 1 }, shipment: 'sea' },
    { name: 'Телевизор', dimensions: { length: 100, width: 60, height: 10 }, shipment: 'railway' },
    { name: 'Ноутбук', dimensions: { length: 35, width: 25, height: 3 }, shipment: 'auto' },
    { name: 'Холодильник', dimensions: { length: 70, width: 70, height: 180 }, shipment: 'sea' },
    { name: 'Пылесос', dimensions: { length: 50, width: 30, height: 30 }, shipment: 'railway' },
  ];

  return products;
}

function groupByShipment(products) {
  let groups = {};
  products.forEach((product) => {
    if (!groups[product.shipment]) {
      groups[product.shipment] = { list: [], count: 0 };
    }
    groups[product.shipment].list.push(product);
    groups[product.shipment].count++;
  });
  return groups;
}

let reducedGroups = products.reduce((groups, product) => {
  if (!groups[product.shipment]) {
    groups[product.shipment] = { list: [], count: 0 };
  }
  groups[product.shipment].list.push(product);
  groups[product.shipment].count++;
  return groups;
}, {});

let products = getShipmentProducts();

let groups = groupByShipment(products);

console.log(groups);
console.log(reducedGroups);
console.log(JSON.stringify(groups, null, 2));
console.log(JSON.stringify(reducedGroups, null, 2));
