import { renderUsers, initializeApp, getAllUsers } from './utils.js';

const searchInput = document.querySelector('#searchInput');
const refreshButton = document.querySelector('#refreshButton');

// Функция фильтрации пользователей - нужно реализовать!
function filterUsers(query) {
  // Получить всех пользователей через getAllUsers()
  const allUsers = getAllUsers();
  // Если поиск пустой, показать всех пользователей
  if (!query) {
    renderUsers(allUsers);
    return;
  }
  // Отфильтровать пользователей по имени (игнорируя регистр)
  const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  // Отрисовать отфильтрованных пользователей
  renderUsers(filteredUsers);
}

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  filterUsers(query);
});

refreshButton.addEventListener('click', initializeApp);

initializeApp();
