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
    if (results[0].status === 'rejected') {
      throw new Error('Ошибка при загрузке пользователей');
    }
    if (results[1].status === 'rejected') {
      throw new Error('Ошибка при загрузке задач');
    }
    if (results[2].status === 'rejected') {
      throw new Error('Ошибка при загрузке новостей');
    }
    renderUsers(results[0].value.data);
    renderTasks(results[1].value.data);
    renderNews(results[2].value.data);
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
