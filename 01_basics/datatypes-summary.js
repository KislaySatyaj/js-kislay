//how the data is kept into the memory and how it is accessed , based on it data is categorizide into two types

// primitive (call by value)
// 7 types : string,number,boolean,null,undefined , symbol,BigInt

// Refrence Type (Non-primitive)
//Array,Objects,Functions

const heros=["shaktimaan","naagraj","doga"];

let myObj={
    name:"kislay",
    age:21,

}

const myFunction= function(){
    console.log("Hello WOrld");
}

console.log(typeof(heros)); //object

let value=null
console.log(typeof(value)); //object

console.log(typeof myFunction);//function object

//javascript is a dynamically typed lanuage as the type of the variable is determined at the runtime by the value they hold.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

