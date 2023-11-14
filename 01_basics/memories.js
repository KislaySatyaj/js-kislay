//stack(primitive), Heap(Non-Primitive)

// whenever stack memory is used which means we get a copy of the variable used , so the changes done will not reflect into the original value

//whenever Heap Memory is used which means we get the refrence of the variable that is of the original so, any changes done will reflect into the original value


//**********************************//
//stack example
let myYoutubename="Drolo" //stack

let anotherName=myYoutubename
anotherName="Kislay"

console.log(myYoutubename);
console.log(anotherName);

//************************************//
// heap example 
let userOne={
    email: "user@google.com",
    upi:"user@oksbi"
}

let userTwo=userOne

userTwo.email="kislay@google.com"

console.log(userOne.email);
console.log(userTwo.email);