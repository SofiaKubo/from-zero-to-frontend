const plus = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const calculate = (func, x, y) => {
  return func(x, y);
};

const resultPlus = calculate(plus, 3, 4);
const resultMinus = calculate(minus, 3, 4);

const resultSq = calculate(
  (a, b) => {
    return Math.pow(a, b);
  },
  3,
  4
);

console.log(resultPlus);
console.log(resultMinus);
console.log(resultSq);
