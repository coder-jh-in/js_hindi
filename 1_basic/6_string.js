const name = "hitesh";
const repocount = 30;

// console.log(name + repocount + "value");

// string literals : called string interpolation
// console.log(`Hello my name is ${name} and age is ${repocount}`);

// Declaring
const strName = new String("hitesh");
console.log(strName);

console.log(strName.length);
console.log(strName.toUpperCase());
console.log(strName.charAt(3));
console.log(strName.indexOf("h"));

const newstr = strName.substring(0, 3);
console.log(newstr);

const anotherStr = strName.slice(-8, 4);
console.log(anotherStr);

const newStr1 = "    histt   ";
console.log(newStr1);
console.log(newStr1.trim());

let strChange = "newName&Change";
console.log(strChange.replace("&", "_"));

// string searching
console.log(strChange.includes("Name"));

const strSplit = "rakesh-raj-rohan-alice-susan";
const strArr = strSplit.split("-");
console.log(typeof strArr);
console.log(strArr);
