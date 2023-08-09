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

// const profile = {
//   name: `James Fraser`,
//   tag: `Jamie`,
//   country: `Scotland`,
//   avatar: `https://th.bing.com/th/id/R.d8aa6cf865b57021130a37617af18c37?rik=hvxJETzkAW5jog&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2015%2f04%2fjamie-outlander-heughan.jpg&ehk=gIzFfgfgntIi3R3nc8sMdkV%2ftgJGE6pz%2fHODaol9bTU%3d&risl=&pid=ImgRaw&r=0`,
//   stats: {
//     followers: 200000,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   country,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, country, avatar, followers, views, likes);

// 🟩======================================================================================
// // ❕Деструктуризація масиву

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// // console.log(red, green, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const rating = Object.values(authors);

// console.log(Math.max(...rating));

// const keys = Object.keys(authors);

// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }

// const entries = Object.entries(authors);

// for (const entry of entries) {
//   // console.log(entry);
//   // const name = entry[0];
//   // const rating = entry[1];

//   // ❕Такий самий запис,але деструктуризацією
//   const [name, rating] = entry;

//   console.log(name, rating);
// }

// // ❕Аналогічний запис фора, деструктуризація в самому форі
// for (const [name, rating] of entries) {

//   console.log(name, rating);
// }
// 🟩======================================================================================
// ❕Операція rest (Збір)

// const profile = {
//   name: `James Fraser`,
//   tag: `Jamie`,
//   country: `Scotland`,
//   avatar: `https://th.bing.com/th/id/R.d8aa6cf865b57021130a37617af18c37?rik=hvxJETzkAW5jog&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2015%2f04%2fjamie-outlander-heughan.jpg&ehk=gIzFfgfgntIi3R3nc8sMdkV%2ftgJGE6pz%2fHODaol9bTU%3d&risl=&pid=ImgRaw&r=0`,
//   stats: {
//     followers: 200000,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // const { name, tag, location } = profile;

// // const restProps = {
// //   avatar: profile.avatar,
// //   stats: profile.stats,
// // };
// // ❕Аналогічний запис //restProps це просто ім'я змінної
// const { name, tag, country, ...restProps } = profile;

// console.log(name, tag, country);
// console.log(restProps);
//  🟩======================================================================================
// Патерн "Об'єкт налаштувань"
// деструктуризація паткрна-об'єкта в пдписі функції
// rest при деструктуризації в підписі

// ❕Це деструктуризація всередині (бажано робити коли багато аргументів)
// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     country,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;
//   console.log(name, tag, country, avatar, followers, views, likes);
// };

// ❕Це деструктуризація в підписі (будемо робити коли аргументів не багато)
// const showProfileInfo = function ({
//   name,
//   tag,
//   country,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(name, tag, country, avatar, followers, views, likes);
// };

// const profile = {
//   name: `James Fraser`,
//   tag: `Jamie`,
//   country: `Scotland`,
//   avatar: `https://th.bing.com/th/id/R.d8aa6cf865b57021130a37617af18c37?rik=hvxJETzkAW5jog&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2015%2f04%2fjamie-outlander-heughan.jpg&ehk=gIzFfgfgntIi3R3nc8sMdkV%2ftgJGE6pz%2fHODaol9bTU%3d&risl=&pid=ImgRaw&r=0`,
//   stats: {
//     followers: 200000,
//     views: 4827,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile);

//  🟩======================================================================================
// // ❌Запис функції який буквально нічого не говорить, так робити не треба
// const fn = function (a, b, c, d, e, f) {};

// fn(10, 5, true, [], {}, 6);
// // ✅Аналогічний правильний запис, це і є патерн об'єкт налаштувань(якщо більше 3х аргументів)
// const fn2 = function (params) {};

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// });

// 🟩======================================================================================
// 🔄 ЗАДАЧА 1
//❕ Працюємо з колекцією товарів в корзині:
// items
// { name: `🍷`, price: 30 }
// { name: `🍝`, price: 60 }
// { name: `🍟`, price: 40 }
// { name: `🍧`, price: 20 }
// getItems() повертає продукти
// add(product) додає продукти
// remove(productName) видалити продукт
// clear очищає корзину товарів
// countTotalPrice рахує загальну суму товарів
// increaseQuantity збільшити кількість товару
// decreaseQuantity зменшити кількість товару

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        console.log(`Цей товар вже є в корзині:`, product.name);
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    // for (const item of items) {
    //   console.log(item);

    //   if (item.name === productName) {
    //     console.log(`Треба видалити цей продукт:`, productName);
    //     items.splice(item.name.length+1, 1);
    //   }
    // }

    for (let i = 0; i < items.length; i += 1) {
      const item = this.items[i];
      console.log(item);
      if (item.name === productName) {
        console.log(`Треба видалити цей продукт:`, productName);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    // ❕Внизу дрібна деструктуризація
    //     for (const item of items) {
    //   total += item.price * item.quantity;}
    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());
cart.add({ name: `🍷`, price: 30 });
cart.add({ name: `🍟`, price: 40 });
cart.add({ name: `🍟`, price: 40 });
cart.add({ name: `🍕`, price: 90 });
cart.add({ name: `🍕`, price: 90 });
cart.add({ name: `🍕`, price: 90 });
cart.add({ name: `🍧`, price: 20 });

console.table(cart.getItems());

cart.remove(`🍧`);
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity(`🍝`);
// console.table(cart.getItems());

// cart.decreaseQuantity(`🍟`);
// cart.decreaseQuantity(`🍟`);
// console.table(cart.getItems());

console.log(`Total:`, cart.countTotalPrice());
