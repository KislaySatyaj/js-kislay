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