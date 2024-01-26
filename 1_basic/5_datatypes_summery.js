// Primitive data type

const score = 100;
const scoreValue = 33.33;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 333333333333333333333434n;
console.log(typeof bigNumber);

// Non-primitive => call by referenc
// Array, Ojbect, Functions

const heros = ["superman", "spiderman", "heman"];
const myobj = {
  name: "raksh",
  age: 33,
};

const myfunction = function () {
  return 3 + 2;
};

console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myfunction);
