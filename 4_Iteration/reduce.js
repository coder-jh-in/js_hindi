const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shopping_card = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Python ",
    price: 3999,
  },
  {
    itemName: "Data Science",
    price: 5999,
  },
];
const priceToPay = shopping_card.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
