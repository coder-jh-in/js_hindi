// dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);

// Specific date
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-01-23"); // YY-MM-DD
// let myCreatedDate = new Date("01-23-2024"); // MM-DD-YY

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// TimeStamp
let myCreatedDate = new Date("01-23-2024"); // MM-DD-YY
let myTimeStamp = Date.now(); // milisecond for couting or comparing or other stuff
// console.log(myTimeStamp); // output: milisecond value

// console.log(myCreatedDate.getTime()); // get value in milisecond

// to compare : only use seconds
// console.log(Math.floor(Date.now() / 1000)); // get value in seconds

// **********************
let newDate = new Date();
// console.log(newDate);

// console.log(newDate.getMonth() + 1); // found month in number {start with 0:jan, 1:feb ....[solve: by adding +1]}

// console.log(newDate.getDay());

//
const d = newDate.toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timeZone: "UTC",
});
console.log(d);
