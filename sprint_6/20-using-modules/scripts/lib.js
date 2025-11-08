import { createElement, isPlainObject, setElementData } from './utils.js';

/**
 *  Создает поле для формы
 *
 *  @param {string} name - Атрибут name для поля ввода
 *  @param {string} type - Атрибут type для поля ввода
 *  @param {string} label - Метка для поля ввода
 *  @param {object} props - Дополнительные атрибуты для поля ввода
 */
export function generateField(name, type, label, props) {
  return createElement('label', props, [createElement('span', {}, label), createElement('input', { type, name })]);
}

/**
 *  Создает кнопку
 *
 *  @param {string} type - Атрибут type для поля кнопки
 *  @param {string} text - Текст для кнопки
 *  @param {object} props - Дополнительные атрибуты для кнопки
 */
export function generateButton(type, text, props) {
  return createElement('button', props, [text]);
}

/**
 *  Создает fieldset
 *
 *  @param {string} label - Легенда
 *  @param {object} schema - Схема с описанием полей
 *  @param {object} props - Дополнительные атрибуты
 */
export function generateFieldset(label, schema, props) {
  const elements = schema.map((description) => generateField(...Object.values(description)));
  const legend = createElement('legend', {}, label);

  return createElement('fieldset', props, [legend, ...elements]);
}

/**
 *  Создает fieldset
 *
 *  @param {string} name - Атрибут name для формы
 *  @param {object} schema - Схема с описанием полей
 *  @param {object} props - Дополнительные атрибуты
 *  @param {function} validate - Колбек для валидации формы
 *  @param {function} submit - Обработчик события submit
 */
export function generateForm(name, schema, props, validate, submit) {
  const form = createElement('form', { name, ...props });

  if (Array.isArray(schema.fieldsets)) {
    for (let fs of schema.fieldsets) {
      form.append(generateFieldset(...Object.values(fs)));
    }
  }

  if (Array.isArray(schema.buttons)) {
    for (let button of schema.buttons) {
      form.append(generateButton(...Object.values(button)));
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log('Invalid form');
      return;
    }

    submit();
  });

  return form;
}
