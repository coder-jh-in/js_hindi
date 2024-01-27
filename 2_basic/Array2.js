const marvel = ["thor", "spiderman", "ironman"];
const dc = ["flash", "superman", "batman"];

// concat return a new array
const newArr = marvel.concat(dc);

console.log(newArr);

// Spread Operator (...)
const spreadArray = [...marvel, ...dc];
console.log(spreadArray);

//
//
// **************************
const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [1, 2, 3], 10];
const merge_all_sub_elemnt_in_one_Array = anotherArray.flat();
console.log(merge_all_sub_elemnt_in_one_Array);

//
//
// *************** Converting String to Array *********************

const str = "Hitesh";
const newStringArray = Array.from(str);
console.log(newStringArray);

let score1 = 100;
let score2 = 200;
let score3 = 300;
const newArray1 = Array.of(score1, score2, score3);
console.log(newArray1);
