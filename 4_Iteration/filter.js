const coding = ["cpp", "python", "r", "js", "c", "ruby"];

const values = coding.forEach((item) => item);

console.log(values); // It return undefined value

// To solve the above problem
// map, filter, reduce : They return values

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNum = myNum.filter((num) => num >= 4 && num % 2 == 0);
console.log(newNum);
