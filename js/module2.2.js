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
// =======================================================================================

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems([`Mang0`, `Kiwi`, `Poly`, `Ajax`]);
// logItems([1, 2, 3, 4, 5]);
// logItems([`кіт`, `пес`, `кролик`, `папуга`]);

// =====================================================================================
// const logins = [`jnknkknk`, `kiwi`, `poly12345`, `nklnklnkj`];
// // Варіант 1
// // const loginFind = `poly12345`;

// // const message = logins.includes(loginFind)
// //   ? `Вітаємо, ${loginFind}`
// //   : `Пробачте, такого логіну як ${loginFind} не знайдено`;

// // console.log(message);
// const findLogin = function (allLogins, loginFind) {
//   // Варіант 2
//   //   console.log(allLogins);

//   //   for (const login of logins) {
//   //     if (login === loginFind) {
//   //      return `Вітаємо, ${loginFind}`;
//   //     }
//   //   }
//   //   return `Пробачте, такого логіну як ${loginFind} не знайдено`;
//   // Варіант 3
//   return allLogins.includes(loginFind)
//     ? `Вітаємо, ${loginFind}`
//     : `Пробачте, такого логіну як ${loginFind} не знайдено`;
// };
// console.log(findLogin(logins, `avocado`));
// console.log(findLogin(logins, `orange`));
// console.log(findLogin(logins, `apple`));
// console.log(findLogin(logins, `kiwi`));

// ===================================================================================
// // Напиши скрипт пошуку найменшого часла в масиві
// // при умові що всі числа в масиві різні  не повторюються

// // console.log(smallestNumber);
// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     //   console.log(number);
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// //   Напиши скрипт найбільшого числа
// const findBiggestNumber = function (numbers) {
//   let biggestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   }
//   return biggestNumber;
// };
// console.log(findBiggestNumber([3, 8, 12, -2, 15]));
// console.log(findBiggestNumber([100, 54, 8, 12, 47]));
// console.log(findBiggestNumber([7, 21, 84, 15, 4]));

// ===================================================================================

// const changeCase = function (string) {

//   const letters = string.split(``);
//   let invertedString = ``;

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }
//   return invertedString;
// };

// console.log(changeCase(`frghBUJKNhdf`));
// console.log(changeCase(`frGVJHBfhdf`));

// ===================================================================================
// // const title = `Top 10 benefits of React framework`;

// // const normalizedTitle = title.toLowerCase();
// // const words = normalizedTitle.split(` `);
// // const slug1 = words.join(`-`);

// // const slug1 = title.toLowerCase().split(` `).join(`-`);

// // console.log(slug1);

// const slugify = function (string) {
//   //   const normalizedString = string.toLowerCase();
//   //   const words = normalizedString.split(` `);
//   //   const slug1 = words.join(`-`);

//   return string.toLowerCase().split(` `).join(`-`);
// };

// console.log(slugify(`Top 10 benefits of React framework`));
// ===================================================================================
// // Псевдомасив arguments і Array.from і ...

// const fn = function () {
//   console.log(arguments);

//   // Перетворюємо псевдомасив(не має всіх методів) на масив
//   const args = Array.from(arguments);
//   console.log(args);
// //   І тепер у масиву є всі методи
// };

// fn(1, 2, 3);
// fn(5, 7, 8, 9);
// fn(7, 5, 4, 6, 10);
// Але це застарілий метод, далі більш новий
// ===================================================================================
// const fn = function (...args) {
//   console.log(args);
// };
// fn(1, 2, 3);
// fn(5, 7, 8, 9);
// fn(7, 5, 4, 6, 10);
// ====================================================================================

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn(`hello`, 1, 2, 3);
// fn(`aloha`, 1, 2, 3, 4);
// fn(`hi`, 1, 2, 3, 4, 5, 6);
// ===================================================================================
//  Напиши функцію для додавання будь якої кількості аргументів(чисел)
// Операція ...(rest)
// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 5, 6, 4, 7, 8));
// ===========================================================================

// Напиши функцію filterNumbers(array [,number1,...]) яка:
// -першим аргументам приймає масив чисел;
// -після першого аргумента може бути довільна
// кількість інших аргументів які будуть числами;
// -Функція повинна повернути новий масивБ в якому будуть аргументи тільки ті
// починаючи з другого для якого є аналог в оригінальному масиві.

// const filterNumbers = function (array, ...args) {
//   //   console.log(`array:`, array);
//   //   console.log(`args:`, args);

//   const uniqueElements = [];

//   for (const element of array) {
//     // console.log(element);
//     // console.log(args.includes(element));

//     if (args.includes(element)) {
//       //   console.log(`${element} є в обох частинах функції`);
//       uniqueElements.push(element);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// ===============================================================================
// Така ж функція, але на пошук слів, вибрати екранізовані книги
// const filterWords = function (array, ...args) {
//   const uniquElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniquElements.push(element);
//     }
//   }
//   return uniquElements;
// };
// console.log(
//   filterWords(
//     ["Відьмак", "Володар перснів", "Гобіт"],
//     "Відьмак",
//     "Володар перснів",
//     "Гобіт",
//     "Друзі"
//   )
// );
// console.log(
//   filterWords(
//     ["Проклята", "Володар перснів"],
//     "Проклята",
//     "Володар перснів",
//     "Як я зустрів вашу маму",
//     "Друзі"
//   )
// );
// console.log(
//   filterWords(
//     ["Соляріс", "Сільмаріліон", "Мистетство любити", "Бути чи мати"],
//     "Соляріс",
//     "Острів проклятих"
//   )
// );
// =============================================================================

