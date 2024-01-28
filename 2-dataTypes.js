/*
Прості або примітиви типи даних:
- числа
- текст
- логічний тип
- null
- undefined 
- Symbol
- BigInt

Об'єкти:
- об'єкт {} 
- функції 
- масиви
- регулярні вирази
- помилки
- об'єкт дати

*/

// number
let number = 5;
let floatNumber = 5.5;

// infinity
console.log(4 / 0); // infinity
console.log(-4 / 0); // -infinity

console.log("text" * 3); // NaN (Not a number)

// boolean
let isExist = true; // = false

// null, undefined
let valuse = null;
console.log(valuse);

let undef;
console.log(undef);

// об'єкт
let object = {};
let person = {
  name: "Oleh",
  age: 29,
  qwe: true,
  asd: {
    key1: true,
    key2: "text",
  },
};

console.log(person);

person.age = 10;

console.log(person);

//Конкатенація - спосіб об'єднання рядків і змінних

console.log(
  "Me name is " + person.name + " , I'm " + person.age + " years old."
);

//Інтерполяція - спосіб об'єднання рядків і змінних (альтернатива конкатенації)

console.log(`Me name is ${person.name}, I'm ${person.age} years old.`);

let url = "https://example.com";
let endpoint = "/profile";

console.log(`${url}${endpoint}`);

// Array
// index =    0       1          2            3
let arr = ["text", 20, { name: "Oleh" }, [1, 2, 3]];

console.log(arr[1]);

//Приклад: Чомк масив являється об'єктом? Різниця
let numArray = [1, 2, 3];
let numObj = { a: 1, b: 2, c: 3 };

console.log(numArray[0]);
console.log(numObj.a);

let someObjArr = {
  text: 1,
  1: 2,
  2: 3,
  3: 4,
};

let someArray = [1, 2, 3, 4];
console.log(someObjArr["text"]);
console.log(someArray[0]);

// Дії з різними типами даних

let someText = " Hello world! ";

console.log(someText.length);
console.log(someText.substring(1, 6));
console.log(someText.slice(1, 6));
console.log(someText.toLowerCase());
console.log(someText.toUpperCase());
console.log(someText.trim());
console.log(someText.charAt());
console.log(someText[1]);

// Що ми можемо робити з масивами

let myArr = [];

console.log(myArr.push(" "));
console.log(myArr.push("Hello"));
console.log(myArr.push(" "));
console.log(myArr.push("world!"));
console.log(myArr.length);

console.log(myArr);
console.log(myArr.pop());
console.log(myArr);

// Робота з числами
let someNumber = 12.4;
console.log(someNumber.toFixed());
console.log(Math.round(someNumber));

let someParameter = "12.5px";
console.log(parseInt(someParameter));
console.log(parseFloat(someParameter));
