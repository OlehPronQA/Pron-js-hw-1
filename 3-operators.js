// +

console.log("te" + "xt");
console.log(2 + 2);

console.log(2 + "2");
console.log(2 + +"2");

// Інкремент/Декремент

let incr = 10;
let decr = 10;

/*incr++;
decr--;

console.log(incr);
console.log(decr);

++incr
--decr

console.log(incr);
console.log(decr);

console.log(incr++);
console.log(decr--)
console.log(incr);
console.log(decr);
*/
console.log(++incr);
console.log(--decr);
console.log(incr);
console.log(decr);

// < , >

console.log(5 < 2);
console.log(5 > 2);

console.log(5 <= 2);
console.log(5 >= 2);

console.log(5 % 2);

// =

console.log(2 * 2 == 4);
console.log(2 * 2 == "4");
console.log(2 * 2 === 4);

// Логічні оператори "і" та "або"

let isChecked = false;
let isClosed = true;

//console.log(isChecked && isClosed); // і
//console.log(isChecked || isClosed); // або

// Оператор заперечення "!"

console.log(!isChecked);
console.log(!isClosed);

// Task. Я хочу купити картоплю фрі та гамбургер, якщо обидві страви є в наявності, то я їх купую і буду ситим

const hamburger = 1;
const fries = 1;

if (hamburger && fries) {
  console.log(`Я ситий`);
}

// false - 0, "", null, undefined, NaN

