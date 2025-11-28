fetch('https://swapi.nomoreparties.co/people') //используйте fetch
  .then((res) => {
    console.log(`${res.status} ${res.statusText}`); // выведите код и сообщение статуса
    console.log(res); // выведем результат, можно изучить объект, хотя в нём почти ничего нет
    res
      .text() //запросите и выведите текст
      .then((text) => console.log(text));
  });
