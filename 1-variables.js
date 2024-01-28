let number = 5;
const userScore = 100;

// let 5number - так не можна
// let /number - так не можна

// camelCase - назва починається з мал. літери і якщо є друге слово, то воно буде з великої
// snake_case - назва з мал. літери, але слова розділяються _ , дають назви гілкам

// number number number - рівні змінні

number = 10;
console.log(number);

const obj = {
  age: 10,
  nextObj: {
    one: 1,
    two: 2,
  },
};
obj = 44; // переназначити константу не можна
obj.age = 44; // переназначити частину об'єкта в константі можна
console.log(obj);

let firstName = "Oleh";
console.log(firstName);

// Область видимості
{
  let firstName = "Oleh";
  console.log(firstName);
}

console.log(firstName);