// ❕Перебираючі методи масиву

// 🟩======================================================================================

// // ❕Метод sort()
// // ❕Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.
// // сoртує літери по юнікoрну(спочатку великі,потім маленькі)

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(`numbers`, numbers); //numbers (5)▶[1, 2, 3, 6, 9]

// const letters = [`b`, `a`, `B`, `A`];
// letters.sort();
// console.log(`letters`, letters); //letters (4)▶['A', 'B', 'a', 'b']

// // ❕Власна умова для sort
// // ❕Сортуємо по зростанню (стандартно)

// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(numbers); //[1, 2, 3, 6, 9]

// // ❕Сортуємо по зменшенню

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log(numbers); //[9, 6, 3, 2, 1]

// // ❕Так як sort сортує вихідний масив, треба створювати копію

// // const copy = [...numbers];
// // console.log(copy === numbers); //false

// // console.log(`copy`, copy); //[9, 6, 3, 2, 1]
// // console.log(`numbers`, numbers); //[9, 6, 3, 2, 1]
// // copy.sort();
// // console.log(`copy`, copy); //[1, 2, 3, 6, 9]
// // console.log(`numbers`, numbers); //[9, 6, 3, 2, 1]

// // ❕або одразу викликати sort на копії

// const ascSortedNumbers = [...numbers].sort();
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);

// console.log(`ascSortedNumbers`, ascSortedNumbers); //[1, 2, 3, 6, 9]
// console.log(`descSortedNumbers`, descSortedNumbers); //[9, 6, 3, 2, 1]
// console.log(`numbers`, numbers); //[9, 6, 3, 2, 1]

// 🟩======================================================================================

const players = [
  { id: `player-1`, name: `Mango`, timePlayer: 310, online: false },
  { id: `player-2`, name: `Poly`, timePlayer: 470, online: true },
  { id: `player-3`, name: `Kiwi`, timePlayer: 230, online: true },
  { id: `player-4`, name: `Ajax`, timePlayer: 150, online: false },
  { id: `player-5`, name: `Chelsey`, timePlayer: 80, online: true },
];

const sortedByBestPlayer = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayer - prevPlayer.timePlayer;
});
console.table(sortedByBestPlayer);
// 🟩======================================================================================

// 🟩======================================================================================

// 🟩======================================================================================

// 🟩======================================================================================

// 🟩======================================================================================

// 🟩======================================================================================

// 🟩======================================================================================
