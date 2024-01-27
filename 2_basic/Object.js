// singleton
// Object.create

// object literal

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Hitesh",
  "full name": "hitesh choudhary",
  [mySymbol]: "mykey1",
  age: 22,
  location: "Jaipur",
  email: "hitesh@gmail.com",
  isLoggedIn: false,
  LastLoginDay: ["monday", "tuesday"],
};

console.log(jsUser.name);
console.log(jsUser["full name"]);

// accessing symbol datatype
console.log(jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]);

//
//
//
//

jsUser.email = "rakesh@gmail.com";
// Object.freeze(jsUser);   // it freeze ojbect jsUser : means we can't change anything after writing this line
jsUser.email = "htsrak@gmail.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("Halo");
  console.log(`Hello ${this["full name"]}`);
};

console.log(jsUser.greeting);
console.log(jsUser.greeting());
