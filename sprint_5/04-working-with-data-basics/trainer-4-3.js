function getProducts() {
  const products = [
    {
      subcategory: 'Корм для хомячков',
      category: 'Товары для животных',
      animal: 'Хомячки',
      price: 5.99,
      inStock: true,
    },
    {
      subcategory: 'Домик для хомячков',
      category: 'Товары для животных',
      animal: 'Хомячки',
      price: 12.99,
      inStock: true,
    },
    {
      subcategory: 'Колесо для хомячков',
      category: 'Товары для животных',
      animal: 'Хомячки',
      price: 7.49,
      inStock: false,
    },
    {
      subcategory: 'Клетка для хомячков',
      category: 'Товары для животных',
      animal: 'Хомячки',
      price: 29.99,
      inStock: true,
    },
    {
      subcategory: 'Наполнитель для клетки хомячков',
      category: 'Товары для животных',
      animal: 'Хомячки',
      price: 3.99,
      inStock: true,
    },
    { subcategory: 'Игрушки для кошек', category: 'Товары для животных', animal: 'Кошки', price: 9.99, inStock: true },
    { subcategory: 'Кошачий корм', category: 'Товары для животных', animal: 'Кошки', price: 14.99, inStock: true },
    { subcategory: 'Кошачий лоток', category: 'Товары для животных', animal: 'Кошки', price: 19.99, inStock: false },
    { subcategory: 'Шампунь для кошек', category: 'Товары для животных', animal: 'Кошки', price: 6.99, inStock: true },
    { subcategory: 'Шампунь для собак', category: 'Товары для животных', animal: 'Собаки', price: 8.99, inStock: true },
    { subcategory: 'Корм для собак', category: 'Товары для животных', animal: 'Собаки', price: 19.99, inStock: false },
    { subcategory: 'Миска для собак', category: 'Товары для животных', animal: 'Собаки', price: 5.49, inStock: true },
    {
      subcategory: 'Игрушки для собак',
      category: 'Товары для животных',
      animal: 'Собаки',
      price: 10.99,
      inStock: true,
    },
  ];
  return products;
}

function filterProductsBy(products, filter) {
  return products
    .filter((product) => !filter.category || product.category === filter.category)
    .filter((product) => !filter.animal || product.animal === filter.animal)
    .filter((product) => !filter.subcategory || product.subcategory === filter.subcategory);
}

let products = getProducts();
let productsForAnimalHamster = filterProductsBy(products, {
  category: 'Товары для животных',
  animal: 'Хомячки',
  subcategory: 'Корм для хомячков',
});
console.log(productsForAnimalHamster);
