import { fetchUsers, fetchTasks, fetchNews } from './api.js';
import { renderUsers, renderTasks, renderNews, showLoader, hideLoader, showError, hideError } from './utils.js';

const refreshButton = document.querySelector('#refreshButton');

// Функция инициализации дашборда - нужно реализовать!
async function initializeDashboard() {
  // Показать индикатор загрузки
  showLoader();

  // Скрыть ошибки
  hideError();

  try {
    // Загрузить все данные параллельно с помощью Promise.allSettled()
    const results = await Promise.allSettled([fetchUsers(), fetchTasks(), fetchNews()]);
    // Вызвать соответствующие рендер-функции для полученных данных (лежат в res.value.data)

    // --- USERS ---
    if (results[0].status === 'fulfilled') {
      renderUsers(results[0].value);
    } else {
      console.error(results[0].reason);
      showError('Не удалось загрузить пользователей');
    }

    // --- TASKS ---
    if (results[1].status === 'fulfilled') {
      renderTasks(results[1].value);
    } else {
      console.error(results[1].reason);
      showError('Не удалось загрузить задачи');
    }

    // --- NEWS ---
    if (results[2].status === 'fulfilled') {
      renderNews(results[2].value);
    } else {
      console.error(results[2].reason);
      showError('Не удалось загрузить новости');
    }
    console.log('Дашборд инициализирован успешно');
  } catch (err) {
    // Показать ошибку пользователю
    showError(err.message);

    console.error('Ошибка инициализации:', err);
  } finally {
    // Скрыть индикатор загрузки
    hideLoader();
  }
}
// Привязать функцию инициализации к кнопке обновления и загрузке страницы
refreshButton.addEventListener('click', initializeDashboard);
document.addEventListener('DOMContentLoaded', initializeDashboard);
