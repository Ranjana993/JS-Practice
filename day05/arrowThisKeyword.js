const user = {
    user_name: "Ranjana",
    age: 22,
    welcomeMessage: function () {
        // console.log(`Hello ${this.user_name} , welcome to team `);
        // console.log(this);
    }
}
user.welcomeMessage()
// console.log(this);


// function myFun(){
//     const user_name = "raam"
//     console.log(this.user);
// }
// myFun();

// function myFun() {
//     const user_name = "raam"
//     console.log(this.user_name);
// }
// myFun();


// const myFun = () => {
//     const user_name = "raam"
//     console.log(this.user_name);
// }
// myFun();



// ARROW FUNCTION.....
const sayHi = () => {
    return "hii ";
}
const sayHello = () => "hello";
const sayHlo = () => ("hlo ")

// console.log(sayHi())
// console.log(sayHello());
// console.log(sayHlo());




