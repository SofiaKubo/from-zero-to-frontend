//функция для извлечения списка участников лотереи
function getLotteryGuests() {
  const lotteryParticipants = [
    { name: 'Микки Маус', numbers: [1, 2, 3, 4, 5], wins: 2 }, //каждый элемент содержит имя участника, его загаданные номера и количество побед
    { name: 'Гуффи', numbers: [5, 6, 7, 8, 9], wins: 1 },
    { name: 'Дональд Дак', numbers: [3, 4, 7, 8, 9], wins: 3 },
    { name: 'Багз Банни', numbers: [2, 4, 6, 8, 1], wins: 0 },
    { name: 'Том', numbers: [1, 3, 5, 7, 9], wins: 4 },
    { name: 'Джерри', numbers: [1, 6, 9, 2, 3], wins: 5 },
  ];

  return lotteryParticipants;
}

//функция приветствует участников и записывает название команды участника, проверяя условия поиска
function doGreetingGuests(guests) {
  guests.forEach((guest, index) => {
    let command;
    if (index % 2 === 0) {
      command = 'Чётные';
    } else {
      command = 'Нечётные';
    }
    guest.command = command;
    console.log(`Приветствуем, ${guest.name}! Вы в команде ${command}.`);
  });
}

//функция проставляет гостям первоначальное значение счётчика совпадений в лотерее, оно равно 0
function doInitialCount(guests) {
  guests.forEach((guest) => (guest.count = 0));
}

let guests = getLotteryGuests();

console.log('Начинаем наш очередной розыгрыш лотереи 3 из 5');

doGreetingGuests(guests);

doInitialCount(guests);

//эта функция проверяет, отгадал ли гость очередной выпавший номер и увеличивает счётчик совпадений count
function checkGuestNumbers(guests, nextNumber) {
  guests.forEach((guest) => {
    let nextIndex = guest.numbers.indexOf(nextNumber);
    if (nextIndex !== -1) {
      //игрок угадал номер
      guest.numbers.splice(nextIndex, 1);
      guest.count++;
      console.log(`Участник ${guest.name} отгадал число ${nextNumber}, угадано ${guest.count} из 5`);
    }
  });
}

console.log('Приступим к розыгрышу.');

let pastNumbers = [];

//главный цикл лотереи, выполняется пока не найден победитель, пока не закончились номера или пока не закончились шаги в лотерее
for (let round = 0; round < 128 && pastNumbers.length < 10; round++) {
  console.log(`Раунд ${round}.`);
  let nextNumber = Math.round(Math.random() * 9);
  if (!pastNumbers.includes(nextNumber)) {
    console.log(`Выпал номер ${nextNumber}`);
    checkGuestNumbers(guests, nextNumber);
    let winner = guests.find((guest) => guest.count === 5);
    if (winner) {
      console.log(`Ура, у нас есть победитель, это ${winner.name}`);
      winner.wins++;
      break;
    }
    pastNumbers.push(nextNumber);
  }
}

//функция выполняет поиск гостей с заданным числом побед
function findGuestByWins(guests, wins) {
  let winsIndex = [];
  guests.forEach((guest) => winsIndex.push(guest.wins));
  let guestIndex = winsIndex.indexOf(wins);
  if (guestIndex !== -1) {
    return guests[guestIndex];
  } else {
    return null;
  }
}

let cheerGuest = findGuestByWins(guests, 0);
if (cheerGuest) {
  console.log(`Дорогой ${cheerGuest.name} получает поощрительный приз!`);
}
