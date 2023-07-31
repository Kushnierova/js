const friends = [`Monica Geller`, `Lily Aldrin`, `Barney Stinson`, `Ted Mosby`];

// console.log(friends);
// console.table виведення масива табличкою;
// console.table(friends);

// .length - довжина з 0(перший елемент це 0);
// console.log(friends.length);

// Знайти останній індекс;
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// Звернення до елементу масива;
// console.log([`Monica`, `Rachel`, `Joey`, `Phoebe`, `Chandler`, `Ross`][0]);
console.log(friends[0]);

//Змінити ячейку в масиві;
friends[3] = `Chandler Bing`;

// Метод .split
// const name = "Monica";
// console.log(name.split("")); // ['M', 'o', 'n', 'i', 'c', 'a']

const stringOfFriends = "Monica, Rachel, Joey, Phoebe, Chandler, Ros";
console.log(stringOfFriends.split(", ")); // ['Monica', 'Rachel', 'Joey', 'Phoebe', 'Chandler', 'Ros']

// Метод indexOf()
// indexOf(value) повертає перший індекс, в якому елемент зі значенням value
// був знайдений в масиві, або число -1, якщо такий елемент відсутній.
//  Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

console.log(friends.indexOf("Monica Geller")); // 0
console.log(friends.indexOf("Robin Scherbatsky")); // -1

//==================================================================================== Метод includes()
// includes(value) перевіряє, чи містить масив елемент зі значенням value і
// повертає true або false відповідно. Застосування цього методу корисне в ситуаціях,
// коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).

console.log(friends.includes("Monica Geller")); // true
console.log(friends.includes("Marshall Eriksen")); // false

console.table(friends);

// ========================================================================================Метод slice()
// slice(begin, end) повертає новий масив,
//  що містить копію частини вихідного масиву, не змінюючи його.
console.log(friends.slice(1, 3)); // ['Lily Aldrin', 'Barney Stinson']

// Зробити з масиву string
let string = ``;
for (const friend of friends) {
  string += friend + `,`;
}

// console.log(string.slice(0, string.length - 1)); //Monica Geller, Lily Aldrin, Barney Stinson, Chandler Bing
// console.log(string); //Monica Geller, Lily Aldrin, Barney Stinson, Chandler Bing,

// Метод slice не деструктивний, він лише повертає нову копію
string = string.slice(0, string.length - 1);
console.log(string); //Monica Geller, Lily Aldrin, Barney Stinson, Chandler Bing

//=========================================================================================Метод join
const string2 = friends.join(", ");
console.log(string2); //Monica Geller, Lily Aldrin, Barney Stinson, Chandler Bing
//============================================================================================ Метод splice()

// Щоб видалити елементи в масиві, передаються два аргументи.
// splice(position, num)

const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]

// Для того, щоб додати один або декілька елементів в масив,
// необхідно передати три або більше аргументи, за такої умови,
//  другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)
friends.splice(5, 0, "Ross Geller");
console.log(friends); // ['Monica Geller', 'Lily Aldrin', 'Barney Stinson', 'Chandler Bing', 'Ross Geller']

// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// splice(position, num, new_element_1, new_element_2, ...)

friends.splice(2, 1, "Phoebe Buffay");
console.log(friends); // ['Monica Geller', 'Lily Aldrin', 'Phoebe Buffay', 'Chandler Bing', 'Ross Geller']

// Заміняємо один елемент (з індексом 2) на декілька.

friends.splice(1, 1, `Rachel Green`, `Joey Tribbiani`);
console.log(friends); // ['Monica Geller', 'Rachel Green', 'Joey Tribbiani', 'Phoebe Buffay', 'Chandler Bing', 'Ross Geller']

// ======================================================ЛЕКЦІЯ

const a = [1, 2, 3];
const b = a;

console.log(`a:`, a); //[1, 2, 3];
console.log(`b:`, b); //[1, 2, 3];

a[0] = 500;

console.log(`a:`, a); //[500, 2, 3];
console.log(`b:`, b); //[500, 2, 3];

console.log(a === b); //true
// Тому що в змінних лежить одне й те саме посилання на масив.

console.log([1, 2, 3] === [1, 2, 3]); //false
//Тому що посилання на різні ячейки в пам'яті

// Перебор по ітерації масива

//Так робити не треба, неможливо перебрати масив з 1000 елементів
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[5]);

// for (let i = 0; i < friends.length; i += 1) {
//Додаємо до кожного елемента масиву `*`
//   friends[i] += `*`;
//   console.log(friends[i]);
// }

//Краще робити так(якщо не потрібен індекс,або не потрібно змінювати елемент)

for (let friend of friends) {
  console.log(friend);
}

//ЗАДАЧА 1
//Порахувати загальну суму покупок в корзині

const carts = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// 1 перебрати масив
// зробити перемінну total
// додати всі числа
for (let cart of carts) {
  console.log(cart);
  total += cart;
}
console.log(`Total:`, total);

//додати податок до кожного елемента масиву
const tax = 0.2;
let totalWithTax = 0;

for (let i = 0; i < carts.length; i += 1) {
  carts[i] = carts[i] * tax + carts[i];
  console.log(carts[i]);
  totalWithTax += Math.round(carts[i]);
}
console.log(`Total+tax=`, totalWithTax);

// ЗАДАЧА 2

// Напиши скрипт який буде підраховувати суму всіх парних і всіх не парних чисел в масиві

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let totalEven = 0;
let totalOdd = 0;

for (let number of numbers) {
  if (number % 2 === 0) {
    totalEven += number;
  } else {
    totalOdd += number;
  }
}
console.log("Сума парних чисел:", totalEven);
console.log("Сума не парних чисел", totalOdd);

// ЗАДАЧА 3
// Напиши скрипт пошуку логіна
//
// Якщо логін знайдено, вивести повідомлення 'Вітаємо, [логін]'
// Якщо логін не знайдено, вивести повідомлення 'Пробачте, такого логіну як [логін] не знайдено'
const logins = [`jnknkknk`, `kiwi12345`, `poly12345`, `nklnklnkj`];
const loginFind = `poly12345`;
let mes = "";

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginFind) {
//     mes = `Вітаємо, ${login}`;
//     break;
//   }
//   mes = `Пробачте, такого логіну як ${login} не знайдено`;
// }

// for (let login of logins) {
//   if (login === loginFind) {
//     mes = `Вітаємо, ${login}`;
//     break;
//   }
//   mes = `Пробачте, такого логіну як ${login} не знайдено`;
// }
// console.log(mes);

// // МЕТОД .INCLUDES

// console.log(logins.includes(`kiwi12345`)); //true
// console.log(logins.includes(`kiwi`)); //false
// console.log(logins.includes(loginFind)); //true

// // ТЕРНАРНИЙ ОПЕРАТОР

// const mess = logins.includes(loginFind)
//   ? `Вітаємо, ${loginFind}`
//   : `Пробачте, такого логіну як ${loginFind} не знайдено`;

// console.log(mess);

// ЗАДАЧА 4

// Напиши скрипт пошуку найменшого часла в масиві
// при умові що всі числа в масиві різні  не повторюються

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// цей масив вже є зверху

let smallestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {
  console.log(number);
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(`smallestNumber:`, smallestNumber);

//   Напиши скрипт найбільшого числа

let biggestNumber = numbers[0];

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}
console.log(`biggestNumber:`, biggestNumber);

// ==========================================
const title = `Top 10 benefits of React framework`;

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(` `);
// const slug1 = words.join(`-`);

const slug1 = title.toLowerCase().split(` `).join(`-`);

console.log(slug1);
