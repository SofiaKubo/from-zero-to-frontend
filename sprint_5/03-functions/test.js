function extractUserData(fromDate, toDate) {
  const logEntries = [
    {
      date: '2023-01-01',
      user: { name: 'Alice', age: 28, email: 'alice@example.com' },
    },
    {
      date: '2023-01-02',
      user: { name: 'Bob', age: 35, email: 'bob@example.com' },
    },
    {
      date: '2023-01-03',
      user: { name: 'Alice', age: 28, email: 'alice@example.com' },
    },
    {
      date: '2023-01-04',
      user: { name: 'Charlie', age: 30, email: 'charlie@example.com' },
    },
    {
      date: '2023-01-05',
      user: { name: 'Bob', age: 35, email: 'bob@example.com' },
    },
    {
      date: '2023-01-06',
      user: { name: 'Alice', age: 28, email: 'alice@example.com' },
    },
    {
      date: '2023-01-07',
      user: { name: 'David', age: 40, email: 'david@example.com' },
    },
    {
      date: '2023-01-08',
      user: { name: 'Alice', age: 28, email: 'alice@example.com' },
    },
    {
      date: '2023-01-09',
      user: { name: 'Charlie', age: 30, email: 'charlie@example.com' },
    },
    {
      date: '2023-01-10',
      user: { name: 'Bob', age: 35, email: 'bob@example.com' },
    },
  ];

  return logEntries;
}

function transformUserData(rawData) {
  const userSummary = {};

  for (const entry of rawData) {
    let name = entry.user.name;

    // Если пользователь уже есть в объекте userSummary, увеличиваем счетчик
    if (userSummary[name]) {
      userSummary[name].count += 1;
    } else {
      // Если пользователь встречается впервые, создаем новый объект
      userSummary[name] = {
        shortInfo: `${name}, ${entry.user.age}`,
        count: 1,
      };
    }
  }
  for (let name of Object.keys(userSummary)) {
    if (userSummary[name].count <= 1) {
      delete userSummary[name];
    }
  }
  return Object.values(userSummary);
}

function loadUserSummaryData(transformedData, callback) {
  console.log(transformedData);
  callback('done');
}

let rawData = extractUserData('2024-01-01', '2024-01-31');
let transformedData = transformUserData(rawData);
loadUserSummaryData(transformedData, (result) => console.log(result));
