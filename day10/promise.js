// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolved ");
//         resolve()
//     }, 1000)
// });

// promiseOne.then(function () {
//     console.log("Promies consumed")
// })

// second way ..

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("rewsolve 2 ");
//         resolve();
//     })
// }).then(function () {
//     console.log("Promies consumed 2 ")
// })



// Third way...

// const promiseThird = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ username: "JS  USER ", email: "abc@gmail.com" })
//     }, 1000);
// })

// promiseThird.then(function (user) {
// console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
// if (!error) {
//             resolve({ username: "rk", password: 1234 })
//         } else {
//             reject("something went wrong")
//         }
//     }, 1000);
// })



// promiseFour
//     .then(function (user) {
//         console.log(user);
//         return user.username
//     })
//     .then(function (username) {
//         console.log(username);
//     })
//     .catch(function (err) { console.log(err) })
//     .finally(function () {
//         console.log("Promies is either resolved or rejected")
//     })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javaScript", password: 1234 })
//         } else {
//             reject("ERR: javaScript went wrong")
//         }
//     }, 1000);
// })

// async function fucntionFive() {
//     try {
//         const res = await promiseFive
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fucntionFive()



// async function fetchUser() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")

//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } 
// fetchUser()


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
