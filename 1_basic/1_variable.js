const accountId = 32323;
let accountName = "Rakesh";
var accountPassword = 32433; // not use anymore
accountCity = "pune"; // bad practice

// undefined
let accountState;
console.log(accountState);

// accountId = 3343 // not allowed
//Scope
{
  let scopee = "4ak";
}

/*

Prefer not to use var
:: because of issue in block scope and functional scope

*/

console.table([accountId, accountName, accountPassword, accountCity]);
