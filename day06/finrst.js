// if statement

const isLoggedUser = true
if (isLoggedUser) {
    // console.log("YES");
}

if (!isLoggedUser) {
    // console.log("NO");
}

// < , > , <= , >= , != , !== , == , === , ! 
// const temperature = 30;
// if (temperature > 50) {
//     console.log("greater then expected ");
// }
// else {
//     console.log("less then expected ");
// }


// const balance = 1000;
// if (balance > 500) console.log("Test pass")


// const balance = 1000;
// if (balance < 500) {
//     console.log("Less than 500 ");
// }
// else if (balance < 750) {
//     console.log("Less than 750 ");
// }
// else if (balance < 900) {
//     console.log("Less than 900 ");
// }
// else {
//     console.log("Less than 1500 ");
// }


const useLoggedIn = true;
const debit = true;
if (useLoggedIn && debit) {
    console.log("Allowed ");
}






// SWITCH CASE :

const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Fab");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April ");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;
    default:
        console.log("Nothing matched ");
        break;
}



// TRUTHY AND FALSY......

// Truthy => [] , true , "0" , 'false' , " " , {} , function(){} ,  

// Falsy => false , 0 , "", -0 , bigInt 0n , null , undefined , NaN 


// EXTRA  CHECKING ....


const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty ");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty ");
}



// Nullish Coaliscing Operator (?? ) : null and undefined

// let val1;
// val1 = 1 ?? 12;
// val1 = null ?? 12;
// val1 = undefined ?? 23;
// val1 = null ?? 12 ?? 1123;

// console.log(val1);

// ternery operator ...
2 === 2 ? console.log("Equal ") : console.log("Not Equal");