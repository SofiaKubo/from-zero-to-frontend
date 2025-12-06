import { fetchUsersPage } from './api.js';
import { renderUsers, renderPaginationInfo, renderPagination, hideLoader, showLoader, showError } from './utils.js';

const refreshButton = document.querySelector('#refreshButton');

const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let totalPages = 1;
let totalUsers = 0;

// Функция загрузки страницы - нужно реализовать!
async function loadPage(page) {
  // Показать загрузчик
  showLoader();
  // Загрузить данные с сервера
  try {
    const data = await fetchUsersPage(page, ITEMS_PER_PAGE);

    // Обновить глобальные переменные (currentPage, totalPages, totalUsers)
    currentPage = data.pagination.currentPage;
    totalPages = data.pagination.totalPages;
    totalUsers = data.pagination.totalUsers;
    // Отрисовать пользователей
    renderUsers(data.data);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, totalUsers);
    // Отрисовать информацию о пагинации
    renderPaginationInfo({
      startIndex: startIndex,
      endIndex: endIndex,
      totalUsers: totalUsers,
    });
    // Отрисовать навигацию
    renderPagination(
      {
        currentPage: data.pagination.currentPage,
        totalPages: data.pagination.totalPages,
        hasPrevPage: data.pagination.hasPrevPage,
        hasNextPage: data.pagination.hasNextPage,
        prevPage: data.pagination.prevPage,
        nextPage: data.pagination.nextPage,
      },
      loadPage
    );
    // Скрыть загрузчик
    hideLoader();
    // Обработать ошибки
  } catch (error) {
    showError(error.message);
  }
}

// Функция инициализации
async function initializeApp() {
  await loadPage(1);
}

refreshButton.addEventListener('click', () => {
  loadPage(currentPage);
});

initializeApp();
