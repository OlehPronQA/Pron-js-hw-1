// 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

// const lower_price = 1000;
// const top_price = 1900;
// const price_value = 1500;

// if (price_value <= lower_price && price_value >= top_price){
//   console.log('Значення ціни товару не знаходиться між 1000 та 1900 включно')
// }else{
//   console.log('Значення ціни товару знаходиться між 1000 та 1900 включно')
// }

const lower_price = 1000;
const top_price = 1900;
const price_value = 1800;

if (!(price_value >= lower_price && price_value <= top_price)) {
  console.log("Значення ціни товару не знаходиться між 1000 та 1900 включно");
}else{
  console.log("Значення ціни товару знаходиться між 1000 та 1900 включно")
}
