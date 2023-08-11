// ❕CALLBACK функції
// ❕Замикання
// ❕Стрілочні функції
// 🟩======================================================================================
// ❕Функція зворотного виклику (callback, колбек)
// ❕Функція може приймати інші функції як параметри
// ❕Функція яка передається іншій функції як аргумент називається функція зворотного виклику
//   (callback, колбек)
// ❕Функція яка приймає у якості параметрів інші функції або повертає функцію у якості результату
//  називається Функція вищого порядку (higher order function)
// 🟩======================================================================================

// // ❕callback це лише ім'я змінної, але найчастіше вони називаються саме так
// fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };
// fnB = function (number) {
//   console.log(`Це лог при виклику fnB:`,number);
// };

// fnA(`Hello`, fnB);

// 🟩======================================================================================

// // ❕Функція doMath(a,b,callback)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);

// // ❕Інлайн колбеки( анонімна функція-тому що не має імені)
// // ❕Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом,
// //  її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });

// 🟩======================================================================================
// // ❕Відкладений виклик: реєстрація подій

// const buttonRef = document.querySelector(`.js-button`);

// // const handleBtnClick = function () {
// //   console.log(`Кліп по кнопці ⏹` + Date.now());
// // };

// // buttonRef.addEventListener(`click`, handleBtnClick);

// // ❕Інлайн колбек
// buttonRef.addEventListener(`click`, function () {
//   console.log(`Кліп по кнопці ⏹` + Date.now());
// });

// 🟩======================================================================================

// // ❕Відкладений виклик: геолокація
// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// 🟩======================================================================================

// // ❕Відкладений виклик: інтервали
// const callback = function () {
//   console.log(`Через 2 секунди всередині колбека в таймауті`);
// };
// console.log(`В коді перед таймаутом`);
// setTimeout(callback, 2000);
// console.log("В коді після таймауту");

// 🟩======================================================================================

// // ❕Відкладений виклик: http-виклику
// // API URL: https://pokeapi.co/api/v2/pokemon

// const onRequestSuccess = function (response) {
//   console.log(
//     `Виклик функції onRequestSuccess після успішної відповіді бекенда:`
//   );
//   console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);

// console.log(`перед fetch`);
// console.log(`після fetch`);

// 🟩======================================================================================
// ❕Фільтр

// const filter = function (array, test) {
//   const filterArray = [];
//   for (const el of array) {
//     console.log(el);
//     // console.log(test(el));
//     const passed = test(el);

//     if (passed) {
//       filterArray.push(el);
//     }
//   }
//   return filterArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };
// const r1 = filter([1, 2, 3, 4, 5, 6], callback1);
// console.log(r1);
// const r2 = filter([3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 6;
// });
// console.log(r2);

// const fruits = [
//   { name: `🍈`, quantity: 30, isFresh: true },
//   { name: `🍎`, quantity: 40, isFresh: false },
//   { name: `🥭`, quantity: 50, isFresh: true },
//   { name: `🍒`, quantity: 90, isFresh: false },
// ];
// // ❕Ця функція перевикористовується
// // const filter = function (array, test) {
// //     const filterArray = [];
// //     for (const el of array) {
// //       console.log(el);
// //       // console.log(test(el));
// //       const passed = test(el);

// //       if (passed) {
// //         filterArray.push(el);
// //       }
// //     }
// //     return filterArray;
// //   };

// getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 50;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// 🟩======================================================================================
// // ❕Замикання
// // ❕Функція яка повертіється під час виклику буде мати доступ
// // ❕до усіх локальних змінних (області видимості)
// // ❕батьківської функції(тої з якої її повернули)
// // ❕це називається "замикання"

// const fnA = function (parametr) {
//   const innerVariable = `Значення внутрішньої змінної функції fnA`;

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log(`Це виклик innerFunction`);
//   };
//   return innerFunction;
// };

// const fnB = fnA(5555);
// fnB();
// console.log(fnB);

// 🟩======================================================================================
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} готує ${dish}`);
// };

// makeDish(`Mango`, `пиріжок`);
// makeDish(`Mango`, `омлет`);
// makeDish(`Mango`, `чай`);

// makeDish(`Poly`, `котлети`);
// makeDish(`Poly`, `супчик`);
// makeDish(`Poly`, `кава`);

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish} `);
  };
  return makeDish;
};

const mango = makeSheff(`Mango`);
const poly = makeSheff(`Poly`);

mango(`пиріжок`);
mango(`омлет`);
mango(`чай`);
poly(`котлети`);
poly(`супчик`);
poly(`каву`);
// 🟩======================================================================================

// 🟩======================================================================================
