/**
 * Проверка на простой объект
 */
export function isPlainObject(obj) {
  const prototype = Object.getPrototypeOf(obj);
  return prototype === Object.getPrototypeOf({}) || prototype === null;
}

export function isBoolean() {
  return typeof v === 'boolean';
}

/**
 * Устанавливает dataset атрибуты элемента
 */
export function setElementData(el, data) {
  for (const key in data) {
    el.dataset[key] = String(data[key]);
  }
}

// Создает DOM-элемент
export function createElement(
  tagName, // Используемый тег
  props, // Объект с атрибутами элементы (опциональный)
  children // Дочерний элемент (опциональный)
) {
  const element = document.createElement(tagName);
  if (props) {
    for (const key in props) {
      const value = props[key];
      if (isPlainObject(value) && key === 'dataset') {
        setElementData(element, value);
      } else if (key === 'class') {
        value.split(' ').forEach((s) => element.classList.add(s.trim()));
      } else {
        element[key] = isBoolean(value) ? value : String(value);
      }
    }
  }
  if (children) {
    for (const child of Array.isArray(children) ? children : [children]) {
      element.append(child);
    }
  }
  return element;
}
