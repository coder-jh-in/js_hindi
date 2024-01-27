const myArr = [1, 2, 3, 4, 5];
const arr = new Array(1, 2, 3, 4);

// Array Method
/*
    arr.push(6) // add at the end "6"
    arr.unshift(0)  // add at the begin "0"

    arr.pop()   // delete last value
    arr.shift() // deleter first element value


    // element value present or not Result Type:: Bollean(true, false)
    arr.includes(3) // Output: true

    // give index of provided value
    arr.indexOf(3)  // Output: 2

    // .join() : binds all element value and convert into string
    arr.join(); // Output: "1,2,3,4"

    // slice : give copy data of original array without changing it
    // splice : cut the portion of given range of original array, => it manipulate the original array

*/

const newArr = arr.join();
console.log(newArr);
console.log(typeof newArr);

console.log(arr.includes(3));
console.log(arr.indexOf(3));

// slice, splice

console.log(arr);
const myn1 = arr.slice(1, 3);
console.log("Slice", myn1);
console.log(arr);

const myn2 = arr.splice(1, 3);
console.log("Splice", myn2);
console.log(arr);
