const userObj = {
    username: "Ranjana",
    loginCount: 2,
    email: "ranjana@gamil.com",
    signin: true,
    isUser: function () {
        console.log("Yes....", this.username);
    }
}

// console.log(userObj.username);
// console.log(userObj.isUser());

// const promiseone = new Promise()
// const date = new Date();

function User(username, loginCount, email) {
    this.username = username;
    this.loginCount = loginCount;
    this.email = email
    return this
}

const userone = new User("Ranajna", 3, "abc@gmail.com")
const userTwo = new User("Ranajna Yadav", 3, "abc@gmail.comm")
console.log(userTwo.constructor);


//! NOTE: 'new kyeword' create an empty object  which we call Instance  . A constructor function is called for new keyword . 