// 2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно. Результат виводити в консоль

const lower_price = 1000;
const top_price = 1900;
const price_value = 900;

if (price_value >= lower_price && price_value <= top_price) {
  console.log("Значення ціни товару знаходиться між 1000 та 1900");
} else {
  console.log("Значення ціни товару не знаходиться між 1000 та 1900");
}
