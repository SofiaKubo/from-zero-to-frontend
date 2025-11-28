const url = 'https://webinars.webdev.education-services.ru/train/7/2/3/count';

let countRes = await fetch(url); //выполнить GET запрос по URL счётчика
let countValue = await countRes.text(); //получить тело запроса
console.log(`GET result ${countValue}`);

countValue++; //увеличим счётчик для проверки

console.log(`POST update ${countValue}`);
let updateRes = await fetch(url, {
  method: 'POST', //выполнить POST запрос
  body: countValue, //с телом countValue
});
let updateValue = await updateRes.text(); //прочесть тело ответа
console.log(`POST result ${updateValue}`);
