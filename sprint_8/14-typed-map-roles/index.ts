const userRoles = new Map<number, string>();

// Ваш код

userRoles.set(1, 'Администратор');
userRoles.set(2, 'Модератор');
userRoles.set(3, 'Пользователь');

const userRole = userRoles.get(2); // "Модератор"
