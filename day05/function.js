function sayMyName() {
    console.log("My name is Ranjana");
}
// sayMyName()

function addTwoNum(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNum(2,3);
// addTwoNum(2,"3");
// addTwoNum("2",3);
// addTwoNum(2,null);
// addTwoNum();


function returnNumAdd(num1, num2) {
    return num1 + num2;
}
// const res = returnNumAdd(2,4)
// console.log(res);



function isUserLoggedin(userName) {
    if (!userName) {
        return `User not found .. `
    }
    return `${userName} just logged in .`;
}
// console.log(isUserLoggedin("Ram"));
function addNumbers(...num) {
    return num;
}
// console.log(addNumbers(2,3,4,5));



// Functions with Object 
const user = {
    name: "Ranjana",
    age: 22
}

function showMyDetails(info) {
    return `My name is ${info.name} and my age is ${info.age}`;
}
// console.log(showMyDetails(user));
console.log(showMyDetails({
    name: "Ranjana",
    age: 22
}));

// function with array 
const prices = [100, 200, 300, 400];
function showPrices(getPrice) {
    return `Your price is ${getPrice[2]}`
}
// console.log(showPrices(prices));
console.log(showPrices([100, 200, 300, 400]));


