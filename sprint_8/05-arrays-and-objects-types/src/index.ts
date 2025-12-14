const array1: string[] = ["a", "b", "c"];
const array2: number[] = [1, 2, 4];
const array3: boolean[] = [true, false];
const array4: (string|number|boolean)[] = ["a", 2, true];


const obj: {firstValue: string, secondValue: number, thirdValue: boolean} = {
  firstValue: "myString",
  secondValue: 123,
  thirdValue: false,
};


const obj1: {firstValue: string | number, secondValue?: number, thirdValue: boolean | string} = {
  firstValue: "myString",
  secondValue: 123,
  thirdValue: false,
};

const obj2: any = {
  firstValue: 123,
  thirdValue: "myString",
};
