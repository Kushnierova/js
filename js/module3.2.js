// ❗Операція spread (розпилення)
// ❗Array.prototype.concat() і аналог через spread

// 🟩===========================================================================================

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// ❗...-це і є операція spread, вона є більш новим аналогом операції .concat
// const numbers2 = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers2); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// ❗Можна розпиляти масиви і додавати примітиви
// const numbers3 = [1, 2, 3, ...[4, 5, 6], 7, 8, 9];
// console.log(numbers3);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

// 🟩========================================================================================

// // Пошук самої маленької температури(числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.min(temps)); //NaN
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.min(...temps)); //12

// 🟩======================================================================================

// const x = [1, 2, 3];
// const y = [...x];

// console.log(x === y); //false
// ❗ Тому що при розпиленні створюється копія масиву, перший масив залишається не змінним
// const q = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const w = [...q];

// q[1].b = 1000;
// //❗ Буде змінено в усих масивах

// console.log(`q:`, q);
// console.log(`w:`, w);

// console.log(q === w); //false ❗,тому в масивів різне посилання(зроблена копія через розпилення)
// console.log(q[0] === w[0]); //true ❗,тому що в обох масивах лежить посилання на один ітой самий об'єкт

// 🟩====================================================================================

// // ❕Зшиваємо декілька масивів в один через concat() і spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// 🟩==============================================================================================
// //❕ Розпилення об'єктів
// // Object.prototype.assing() і spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // // ❗Старий спосіб
// // const c = Object.assign({}, a, b);
// // console.log(c); //{x: 0, y: 2, z: 3}

// const AB = { ...a, ...b };
// const BA = { ...b, ...a };
// const ABC = { ...a, ...b, x: 2 };

// console.log(AB); //{x: 0, y: 2, z: 3}
// console.log(BA); //{x: 1, z: 3, y: 2}
// console.log(ABC); //{x: 2, y: 2, z: 3}
// // ❗Чим правіше проект в розпиленні,тим він важливіший

// 🟩======================================================================================

// // ❕Деструктуризація об'єкта
// // ❕Значення за замовчуванням
// // ❕Ім'я змінної відменне від імені властивості

// const booklist = {
//   name: `Мої книжки`,
//   readBooks: [`Відьмак`, "Гоббіт", "Володар перснів", "Сільмаріліон", "Дюна"],
//   unReadBooks: [`Проклята`, "Із крові і попелу"],
// };
// //✅ З Деструктуризацією
// const {
//   name: titleOfBooklist,
//   readBooks,
//   unReadBooks,
//   languages = [`ua`, `en`, `pl`],
// } = booklist;
// //  ❕languages = [`ua`, `en`, `pl`] - це значення за замовчуванням,
// //  ❗якщо в об'єкті його немає, він буде доданий,
// //  ❗якщо він вже є в об'єкті, значення з деструктуризації буде проігноровано

// //  ❕name: titleOfBooklist - це перейменування в дестуктуризації
// console.log(`readBooks:`, readBooks, `unReadBooks:`, unReadBooks);
// console.log(`languages:`, languages);
// console.log(`name:`,titleOfBooklist)

// // ❌Без деструктуризації
// console.log(
//   `readBooks:`,
//   booklist.readBooks,
//   `unReadBooks:`,
//   booklist.unReadBooks
// );

// 🟩====================================================================================
// ❕Глибока деструктуризація

const profile = {
  name: `James Fraser`,
  tag: `Jamie`,
  country: `Scotland`,
  avatar: `https://en.wikipedia.org/wiki/Jamie_Fraser_(character)#/media/File:Jamie_Fraser_(Outlander_TV).jpg`,
  status: {
    followers: 200000,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, country, avatar } = profile;

console.log(name, tag, country, avatar);

// ❕Деструктуризація масиву

const rgb = [255, 100, 80];
// 🟩======================================================================================

// 🔄 ЗАДАЧА 1
// //❕ Працюємо з колекцією товарів в корзині:
// // items
// // { name: `🍷`, price: 30 }
// // { name: `🍝`, price: 60 }
// // { name: `🍟`, price: 40 }
// // { name: `🍧`, price: 20 }
// // getItems() повертає продукти
// // add(product) додає продукти
// // remove(productName) видалити продукт
// // clear очищає корзину товарів
// // countTotalPrice рахує загальну суму товарів
// // increaseQuantity збільшити кількість товару
// // decreaseQuantity зменшити кількість товару

// const cart = {
//   items: [
//     { name: `🍷`, price: 30 },
//     { name: `🍝`, price: 60 },
//     { name: `🍟`, price: 40 },
//     { name: `🍧`, price: 20 },
//   ],
//   getItems() {
//     return cart.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     const items = this.items;
//     for (const item of items) {
//       if (item.name === productName) {
//         items.splice(item.name.length + 1);
//       }
//     }
//   },
//   clear() {},
//   countTotalPrice() {
//     const items = this.items;
//     let countTotalPrice = 0;
//     for (const item of items) {
//       countTotalPrice += item.price;
//     }
//     return countTotalPrice;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// // console.table(cart.getItems());

// cart.add({ name: `🍩`, price: 40 });
// cart.add({ name: `🍱`, price: 100 });
// cart.add({ name: `🍕`, price: 90 });
// cart.add({ name: `🍔`, price: 110 });

// console.table(cart.getItems());

// cart.remove(`🍧`);
// console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity(`🍝`);
// // console.table(cart.getItems());

// // cart.decreaseQuantity(`🍟`);
// // cart.decreaseQuantity(`🍟`);
// // console.table(cart.getItems());

// console.log(`Total:`, cart.countTotalPrice());
