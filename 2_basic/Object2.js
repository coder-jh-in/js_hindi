const tinderUser1 = new Object();
const tinderUser = {};

//
//
const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

const obj3 = { obj1, obj2 };
console.log(obj3);

// merge two ojects
// const obj4 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

//
//
//

const users = [
  {
    id: 1,
    name: "raksh",
  },
  {
    id: 2,
    name: "rajesh",
  },
  {
    id: 3,
    name: "ramesh",
  },
];

console.log(users[0].name);

// extracting all key of obje in an array
const keyArray = Object.keys(users[0]);
console.log(keyArray);

// also extract values
const valueArray = Object.values(users[0]);
console.log(valueArray);

// another important method
console.log(Object.entries(users));

console.log(users[0].hasOwnProperty("id"));
