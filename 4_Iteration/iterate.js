// Map
const map = new Map();

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

for (const [key, value] of map) {
  //   console.log(`${key}   :- ${value}`);
}

// Map is not iteratable
for (const key in map) {
  console.log(key); // wrong
}

// Object
const myObject = {
  js: "Javascript",
  cpp: "c++",
  c: "C",
  py: "Python",
};

for (const key in myObject) {
  //   console.log(`${key} is an extension of ${myObject[key]}`);
}

// Array
const programming = ["c", "c++", "python", "Javascript", "Java"];
for (const key in programming) {
  console.log(`${key} : ${programming[key]}`);
}
