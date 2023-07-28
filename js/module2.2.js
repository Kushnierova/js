// const add = function (a, b) {
//   console.log(`Виконується функція add`);
//   console.log(a);
//   console.log(b);
//   console.log(`Результат множення дорівнює: ${a * b}`);
//   return a + b;
// };

// const r1 = add(2, 3);
// console.log(`r1:`, r1);
// const r2 = add(5, 7);
// console.log(`r2:`, r2);
// const r3 = add(8, 3);
// console.log(`r3:`, r3);
// ===============================================================================

// const fn = function (value) {
//   console.log(1);
//   console.log(2);
//   if (value < 50) {
//     return `Менше ніж 50`;
//   }
//   return `Більше ніж 50`;
// };
// console.log(fn(10));

// console.log(fn(100));

// const fnA = function () {
//   console.log(`Виконується функія A`);
// };

// const fnB = function () {
//   console.log(`Виконується функія B`);
// };
// const fnC = function () {
//   console.log(`Виконується функія C`);
// };

// fnA();
// fnB();
// fnC();
// ==============================================Переписування коду на функції
//ЗАДАЧА 1
//Порахувати загальну суму покупок в корзині

// const calculateTotalPrice = function (items) {
//   console.log(items);

//   let total = 0;

//   for (let item of items) {
//     // console.log(item);
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 124]));
// console.log(calculateTotalPrice([6, 28, 105, 35, 72, 17, 120]));
// console.log(calculateTotalPrice([54, 38, 108, 70, 92, 28, 130]));
// ===============================================================================

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems([`Mang0`, `Kiwi`, `Poly`, `Ajax`]);
// logItems([1, 2, 3, 4, 5]);
// logItems([`кіт`, `пес`, `кролик`, `папуга`]);

// ================================================================================
const logins = [`jnknkknk`, `kiwi`, `poly12345`, `nklnklnkj`];
// const loginFind = `poly12345`;

// const message = logins.includes(loginFind)
//   ? `Вітаємо, ${loginFind}`
//   : `Пробачте, такого логіну як ${loginFind} не знайдено`;

// console.log(message);
const findLogin = function (allLogins, loginFind) {
  console.log(allLogins);
  
};

console.log(findLogin(logins, `avocado`));
console.log(findLogin(logins, `orange`));
console.log(findLogin(logins, `apple`));
console.log(findLogin(logins, `kiwi`));
