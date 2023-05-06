let books = [
  {
    id: "1",
    title: "The Lord Of Ring",
    author: "John Ronald Reuel Tolkien",
    img: "https://ecsmedia.pl/c/the-lord-of-the-rings-w-iext127966933.jpg",
    plot: "Frodo Baggins, a hobbit, must destroy the Ring and prevent Sauron, the dark lord, from getting it and regaining his former power. We are given a basic good versus evil plot and are thrown into the Middle-World, a place that is home to hobbits, elves, dwarves, humans, wizards, and goblins.",
  },
  {
    id: "2",
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    img: "https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/820228109o.jpg",
    plot: "Geralt of Rivia is a Witcher. Trained at a young age at the stronghold of the Wolf School Witchers, he survived numerous brutal physical challenges to gain near-superhuman physical and mental abilities. Now he travels the Continent in the aftermath of the first major war between the Nilfgaard Empire and the Northern Kingdoms, killing monsters that hunt the lands.",
  },
  {
    id: "3",
    title: "Forest Song",
    author: "Larisa Petrovna Kosach-kvitka",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538362623l/42107352._SX318_.jpg",
    plot: "A forest nymph Mavka falls in love with a mortal youth Lukash causing a dramatic clash between the world of carefree beauty of the forest and the world of the humans filled with jealousy, passion, rivalry and evil.",
  },
];

const root = document.getElementById("root");
// const root = document.querySelector('#root');
// console.log(root)

const div1 = document.createElement("div");
const div2 = document.createElement("div");

div1.classList.add("left");
div2.classList.add("right");

root.append(div1, div2);
const title = document.createElement("h1");
title.textContent = "Libruary";

const list = document.createElement("ul");
list.classList.add("list");

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.classList.add("add");

div1.append(title, list, addBtn);

function renderList() {
  const markup = books
    .map(
      ({ id, title }) =>
        `<li id=${id} class='item'><p class='item-title'>${title}</p><button class='delete'>Delete</button><button class='edit'>Edit</button></li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
  const items = document.querySelectorAll(".item");
  items.forEach((item) => item.addEventListener("click", itemClickHandler));
}
renderList();

function itemClickHandler(e) {
  // console.log(e);
  if (e.target.nodeName === "P") {
    renderPreview(e.target.textContent);
  }
}

function renderPreview(text) {
  const book = books.find(({ title }) => title === text);
  // console.log(book);
  const markup = createPreviewMarkup(book);
  div2.innerHTML = "";
  div2.insertAdjacentHTML("afterbegin", markup);
}

function createPreviewMarkup({ id, title, author, img, plot }) {
  return `<div data-id=${id}>
  <h2>${title}</h2>
  <p>${author}</p>
  <img srv="${img}" alt="${title}">
  <p>${plot}</p>
  </div>`;
}
