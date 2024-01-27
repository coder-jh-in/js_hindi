const num = 100;
// console.log(num);

const s_num = new Number(400);
// console.log(s_num);

// console.log(s_num.toString());
// console.log(s_num.toFixed(2));

const otherNum = 223.89;
// console.log(otherNum.toPrecision(4));

const hundred = 1000000;
// console.log(hundred.toLocaleString("en-IN"));'

// **************** Math ************************
console.log(Math);

// console.log(Math.abs(-4)); // only change negative to positive
// console.log(Math.round(4.8)); // rounde it
// console.log(Math.round(8.3));

// // top value round
// console.log(Math.ceil(3.2));

// // round botton value
// console.log(Math.floor(4.2));

// console.log(Math.min(3, 4, 2, 9));
// console.log(Math.max(3, 4, 2, 9));

// most used in Random
console.log(Math.random()); // random value : 0 - 1

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

min = 13;
max = 29;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
