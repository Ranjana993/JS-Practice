// singleton

// Object.create() => constructor way of creating 


// object literals 
// using Symbol
const myKey1 = Symbol("key1")
const myInfo = {
    name:"Ranjana",
    lastName :"Yadav",
    age:22,
    email:"ranjana@gmail.com",
    phone:123456789,
    // myKey1 : "tester" // wrong for Symbol 
    [myKey1] : "tester" // right for Symbol 
}

// console.log(myInfo);
// console.log(myInfo.name);
// console.log(myInfo["name"]);
// console.log(myInfo[myKey1]);
// console.log(myInfo);


myInfo.greet = function() {
    console.log("Hello users ");
}
myInfo.greet1 = function() {
    console.log(`Hello ${this.name} `);
}
console.log(myInfo.greet());
console.log(myInfo.greet1());