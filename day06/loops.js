//  Loops and Iterations 

//? For loop

for (let i = 0; i < 10; i++) {
    // console.log(i + 1);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        // console.log(i + 1, j + 1);
    }
}



// Table from 1 to 10 ;

for (let i = 1; i <= 10; i++) {
    // console.log("Value is ", i);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j} `);
    }
}

// break and continue 

//? Break ....
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        // console.log(` Value of i is ${i}`);
        break;
    }
    // console.log(` Value of i is ${i}`);
}

//?  Continue.....
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        // console.log(` Value of i is ${i}`);
        continue;
    }
    // console.log(` Value of i is ${i}`);
}







// While loop and do while loop.....

//? while loop 

// let index = 0;
// while (index <= 10) {
//     console.log(`Value is  ${index}`);
//     index++;
// }

// array 
// let myArr = ["a" , "b" , "c" , "d"];
// let index = 0 ;
// while(index <myArr.length){
// console.log(`Value is  ${myArr[index]}`);
//         index++;
// }


//? DO WHILE LOOP ....

let score = 1;
do {
    // console.log(`Score is ${score}`);
    score++;
}
while (score <= 10)


//? FOR OF LOOP

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const num of arr) {
    // console.log(`Value is ${num}`);
}


const greetings = "Hello world!";
for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    // console.log(`Value is ${greet}`);
}





// Maps ...
const map = new Map();
map.set('j&k', 121);
map.set('In', 23);
map.set('Pk', 45);
map.set('Aust', 65);

// console.log(map);
for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key , value);
}

//? For in loop

const myObj = {
    js: "Js stands for javaScript",
    cpp: "cppp stands for c++",
    swift: "Swift is for swift by apple "
}
for (const key in myObj) {
    const element = myObj[key];
    // console.log(` ${element}`);
}

const myProgrammingLan = ["js", "c", "c++", "python", "java"]

for (const key in myProgrammingLan) {
    const element = myProgrammingLan[key];
    // console.log(` ${element}`);
}




//?  forEach loop

// const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function (i) {
// console.log(`Value is ${i }`);
// })

// coding.forEach(function (item, index, arr) {
// console.log(`Value is ${item, index, arr }`);
// })


const langRecord = [
    {
        name: "JavaSript",
        file: ".js"
    },

    {
        name: "Python",
        file: ".py"
    },
    {
        name: "c++",
        file: ".cpp"
    },
    {
        name: "c",
        file: ".c"
    }

]

langRecord.forEach((item) => {
    // console.log(item.name);
})




// filter , map and reduce 


// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);



const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = myNum.filter((num) => {
//     return num > 5;
// })
// console.log(res);

const newNums = [];
myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];



const userBooks = books.filter((item) => item.genre === "History")
// console.log(userBooks);




// ? Map 
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map(item =>{
//     return item+10
// })
// console.log(newNumbers);



// ? reduce 
const myNumbers = [1, 2, 3, 4, 5];

const res = myNumbers.reduce((acc, curr) => {
    return acc + curr
}, 0)

// console.log(res);



const shoppingCart = [
    {
        itemNane: "js",
        price: 2999
    },
    {
        itemNane: "android",
        price: 3999
    },
    {
        itemNane: "Mobile",
        price: 5999
    }
]

const price = shoppingCart.reduce((acc, item) => {
    return item.price + acc
}, 0)
console.log(price);