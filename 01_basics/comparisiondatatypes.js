console.log("2">1) // comparision operator converts the string "2" to a number
console.log("02">1)

console.log(null > 0) // false
console.log(null==0)  // false
console.log(null>=0)  // true 

// equality check == and comparisions work differently (> < >= <=)
// comparisions convert null to a number,treating it as 0.
//thats why null>=0 is true and null>0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// we mostly avoid the above comparisions of undefinied and null 

// false in all three cases

// strict check ===, checks values along with datatypes

console.log("2"===2);