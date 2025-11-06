const degreesElement = document.querySelector('input[name="degrees"]');
const fahrenheitElement = document.querySelector('input[name="fahrenheit"]');

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

const onInput = (e) => {
  if (e.target.value !== '') {
    if (e.target === degreesElement) {
      fahrenheitElement.value = celsiusToFahrenheit(e.target.value);
    } else {
      degreesElement.value = fahrenheitToCelsius(e.target.value);
    }
  }
};

degreesElement.addEventListener('input', onInput);
fahrenheitElement.addEventListener('input', onInput);
