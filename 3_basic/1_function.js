// Rest Operator
function restOperator(...num1) {
  return num1;
}
// console.log(restOperator(100, 399, 288, 300, 400, 3000));

const user = {
  username: "hitesh",
  price: 199,
};
function handleObje(obj) {
  return `${obj.username}, you have to give ${199} for this watermelon.`;
}
console.log(handleObje(user));
console.log();

const myArr = [1, 2, 3, 4, 5];
function getArr(arr) {
  return arr[1];
}
const getdArr = function (arr) {
  return arr[0];
};
console.log(getArr(myArr));
console.log(getdArr(myArr));
