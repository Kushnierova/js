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

// for (const friend of friends) {
//   console.log(friend.name);
//   friend.newprop = 555;
// }
// friends[1].newprop = 666;
// console.table(friends);

// ==============================================================
// Шукаємо друга по імені

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend.name);
//     // console.log(friend.name === friendName);
//     if (friend.name === friendName) {
//       return `Name: "${friendName}" is in the array;`;
//     }
//   }
//   return `Name "${friendName}" is not in the array;`;
// };

// console.log(findFriendByName(friends, `Rachel`));
// console.log(findFriendByName(friends, `Robin`));

// ==========================================================
// Отримуємо імена усіх друзів

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     // console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

// ================================================================
// Отримуємо лише тих друзів які онлайн

// const getOnlineFriends = function (allFriends) {
//   const namesFriendsIsOnline = [];
//   for (const friend of allFriends) {
//     // if(friend.online === true){ це тема що if (friend.online) {
//     if (friend.online) {
//       namesFriendsIsOnline.push(friend);
//     }
//   }
//   return namesFriendsIsOnline
// };

// console.log(getOnlineFriends(friends));

// ================================================================
// Отримуємо імена лише тих друзів які not онлайн
// const getOfflineFriends = function (allFriends) {
//   const namesFriendsIsOffline = [];
//   for (const friend of allFriends) {
//     //if (friend.online===false) { це те саме що if (!friend.online) {
//     if (!friend.online) {
//       namesFriendsIsOffline.push(friend.name);
//     }
//   }
//   return namesFriendsIsOffline;
// };

// console.log(getOfflineFriends(friends));
// ===============================================================
// Повернути друзів які онлайн і які не онлайн
// const getFriendByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend.name);
//       continue;
//     }
//     friendsByStatus.offline.push(friend.name);
//   }
//   return friendsByStatus;
// };

// console.log(getFriendByOnlineStatus(friends));

// ==============================================================
// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };
// console.log(Object.keys(x).length);
