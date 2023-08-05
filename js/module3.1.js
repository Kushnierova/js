// const booklist = {
//   name: `Мої книжки`,
//   readBooks: [`Відьмак`, "Гоббіт", "Володар перснів", "Сільмаріліон", "Дюна"],
// };
// // Створення нової
// booklist.unReadBooks = [`Проклята`, "Із крові і попелу"];
// // Перевизначення вже існуючого
// booklist.name = `Книжки для мене`;

// console.log(booklist);
// console.log(booklist.name);
// console.log(booklist.readBooks);

// const propertyName = `name`;
// // Два записи знизу є ідентичними
// console.log(booklist[`name`]);
// console.log(booklist[propertyName]);

// // ===========================
// const username = `Mango`;
// const email = `mango@gmail.com`;

// const signupData = {
//   //   username: username,
//   //   email: email,
//   // внизу ідентичний запис(якщо ім'я ключа таке саме як ім'я змінної)

//   username,
//   email,
// };

// console.log(signupData);
// ===================================================================
// // Властивості які обчислюються
// // <input name=`color` value=`tomato`
// const inputName = `color`;
// const inputValue = `tomato`;

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData); //{color: 'tomato'}

// ===================================================================
// // Тип посилання {}==={}
// console.log([] === []); //false
// const a = { x: 1, y: 2 };
// const b = a;
// console.log({ x: 1, y: 2 } === { x: 1, y: 2 }); //false
// console.log(b === a); //true
// ===================================================================
// Масиви і функції це теж ОБ'ЄКТИ
// Arrays
// const a = [1, 2, 3];

// a.hello = `:)`;

// console.log(a);
// // Functions

// const fn = function () {
//   console.log("hello");
// };
// fn.hello = `:)`;
// console.dir(fn.hello);

// ==========================================================================
// // Методи об'єкту і this при зверненні до властивостей в методах

// const booklist = {
//   name: `Книжки для мене`,
//   readBooks: [`Відьмак`, "Гоббіт", "Володар перснів", "Сільмаріліон", "Дюна"],
//   unReadBooks: [`Проклята`, "Із крові і попелу"],
//   //   //   getName: function () {
//   //   //     console.log("Так це getName:)");
//   //   //   },
//   //   // Це стара форма запису,далі нова форма МЕТОДУ ОБ'ЄКТА
//   //   getName() {
//   //     console.log("Так це getName:)");
//   //   },
//   changeName(newName) {
//     // console.log(`this всередині changeName:`, this);
//     this.name = newName;
//   },
//   addReadBook(newBook) {
//     this.readBooks.push(newBook);
//   },
//   addUnReadBooks(newBook) {
//     this.unReadBooks.push(newBook);
//     this.countUnReadBooks = this.unReadBooks.length;
//   },
//   getCountReadBooks() {
//     return this.readBooks.length;
//   },
//   getCountUnReadBooks() {
//     return this.unReadBooks.length;
//   },
// };

// console.log(booklist.getCountReadBooks()); //5
// // console.log(booklist);
// // booklist.getName();
// booklist.changeName(`My books`);
// // console.log(booklist);

// booklist.addReadBook(`Бути чи мати`);
// booklist.addUnReadBooks(`Два капітани`);
// console.log(booklist);

// console.log(booklist.getCountReadBooks()); //6

// ========================================================================
// Перебор об'єкта з допомогою for ... in і Object.keys|value|entries
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;
// Отримуємо keys
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   //   Пошук value
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// console.log(`totalFeedback:`,totalFeedback);
// ========================
// Отримуємо value

// const values = Object.values(feedback)

// for(const value of values){
//     totalFeedback += value;
// }
// console.log(`totalFeedback:`,totalFeedback);
// // ==============================
// // Отримуємо масив [ключ б значення]
// const entries = Object.entries(feedback)

// for(const entrie of entries){
//     console.log(entrie)
// }

// =============================================================
const friends = [
  { name: `Monica`, online: true },
  { name: `Rachel`, online: true },
  { name: `Joey`, online: false },
  { name: `Phoebe`, online: true },
  { name: `Chandler`, online: false },
  { name: `Ross`, online: false },
];

console.table(friends);

// Шукаємо друга по імені

const findFriendByName = function (allFriends, name) {};

console, log(findFriendByName(friends, `Rachel`));
console, log(findFriendByName(friends, `Chandler`));

// Отримуємо імена усіх друзів

const getAllNames = function (allFriends) {};

console.log(getAllNames(friends));

// Отримуємо імена лише тих друзів які онлайн
const getOnlineFriends = function (allFriends) {};

console.log(getOnlineFriends(friends));
