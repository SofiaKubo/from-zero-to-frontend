type UserData = {
  id: number;
  name: string;
};

async function fetchUserData(): Promise<UserData> {
  const response = await fetch('https://ourverycoolapiserver.ru/api/v1/user');
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Ошибка при получении данных');
  }
}

async function processUserData() {
   try {
    const userData = await fetchUserData();
    console.log(`User ID: ${userData.id}`);
    console.log(`User Name: ${userData.name}`);
  } catch (error) {
    console.error('Произошла ошибка', error);
  }
}

processUserData();
