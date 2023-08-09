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
// ❕Відкладений виклик: інтервали
const callback = function () {
  console.log(`Через 2 секунди всередині колбека в таймауті`);
};
console.log(`В коді перед таймаутом`);
setTimeout(callback, 2000);
console.log("В коді після таймауту");
// 🟩======================================================================================
