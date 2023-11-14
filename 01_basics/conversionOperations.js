let score='33abc'

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber= Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)
// not a number , which means that the string type has been converted to number but it cant be displayed as a number

// "33"=> 33
// "33abc"=> NaN
// true=> 1; false=> 0
// null=>0; unidentified=>NaN
// above values are having the outputs when their type is being converted to Number

let isLoggedIn=1

let booleanIsLoggedIn= Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
// 1=>true,0=> false
// ""=>false (empty string then value is false else it gives true)
// "kislay"=> true

let someNUmber=33
let stringNumber=String(someNUmber)
console.log(typeof stringNumber)
console.log(stringNumber)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
 console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion