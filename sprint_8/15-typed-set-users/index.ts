type TUserType = {
  id: number;
  name: string;
};

const uniqueUsers: Set<TUserType> = new Set();

const user1: TUserType = { id: 1, name: 'Пользователь 1' };
const user2: TUserType = { id: 2, name: 'Пользователь 2' };

/** добавьте в коллекцию пользователей */
uniqueUsers.add(user1);
uniqueUsers.add(user2);
uniqueUsers.add(user1); // попытка добавить дубликат

console.log(uniqueUsers) // Посмотрите результат в консоли
