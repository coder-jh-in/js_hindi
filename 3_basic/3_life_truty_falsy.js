// Immediately Invoked  Function Expression (IIFE)
// ()() : FIRST IS FOR FUNCTION DEFINITION AND SECOND IS FOR FUNCTION CALL

(function chai() {
  //   console.log(`DB C/ONNECTED`);
})();

// arrow function IIFE with parameter
((name) => {
  //   console.log(`${name}, welcome to Wonderland.`);
})("Rahul");

// Truthy & Falsy values
// Falsy Value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Value
// "0", 'false', " ", [], {}, function(){},

const userEmail = "gandu@goat.in";

if (userEmail.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Truthy Values");
}

const emptyOjb = {};
if (Object.keys(emptyOjb).length) {
  console.log("Ojbect is empty");
} else {
  console.log("Obj is not empty");
}
