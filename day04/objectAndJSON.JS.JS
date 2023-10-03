// Object destructuring 
const userList = {
    firstUserName: "Ram",
    secondUserName: "Rohit",
    thirdUserName: "Mohit",
    ageOfRam: 23,
    ageOfRohit: 45,
    ageOfMohit: 34
}

const { firstUserName, secondUserName } = userList
console.log(firstUserName);
console.log(secondUserName);