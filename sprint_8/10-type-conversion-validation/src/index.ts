const userInput: any = "Num 42";
let userNumber: number;

const convertedNumber = Number(userInput);

if (isNaN(convertedNumber)) {
  console.log("Некорректные данные");
} else {
  userNumber = convertedNumber;
}
