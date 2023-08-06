// =============================================================
// Працюємо з колекцією товарів в корзині:
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
  items: [
    { name: `🍷`, price: 30 },
    { name: `🍝`, price: 60 },
    { name: `🍟`, price: 40 },
    { name: `🍧`, price: 20 },
  ],
  getItems() {
    return cart.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    // const items = this.items;
    // for(const item of items){
    // lengthProductName = this.item.indexOf(productName);
    // console.log(lengthProductName)
    // this.items.splice(lengthProductName, 1);
    }
  },
  clear() {},
  countTotalPrice() {
    const items = this.items;
    let countTotalPrice = 0;
    for (const item of items) {
      countTotalPrice += item.price;
    }
    return countTotalPrice;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: `🍩`, price: 40 });
cart.add({ name: `🍱`, price: 100 });
cart.add({ name: `🍕`, price: 90 });
cart.add({ name: `🍔`, price: 110 });

console.table(cart.getItems());

cart.remove(`🍧`);
console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity(`🍝`);
// console.table(cart.getItems());

// cart.decreaseQuantity(`🍟`);
// cart.decreaseQuantity(`🍟`);
// console.table(cart.getItems());

console.log(`Total:`, cart.countTotalPrice());
