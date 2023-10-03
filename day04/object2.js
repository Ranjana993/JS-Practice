// const user = new Object() // singleton
const user = {} // non singleton
user.id= "1";
user.name="Ranjana";
user.age = 22;

// console.log(user);



const userInfo = {
    name:"Ranjana",
    age :22 ,
    email:"ranjana@gmail.com",
    fullName:{
        firstName:"Ranjana",
        middle:"Kumari",
        lastName:"Yadav"
    }
}
// console.log(userInfo.fullName);

const obj1 = {1 :"a",2:"b"};
const obj2 = {3:"c" , 4:"d"};

// const obj3 = {obj1,obj2}; // first  way 
// const obj3 = Object.assign({}, obj1 , obj2)  // second way 
// const obj3 = {...obj1 , ...obj2}   // third way
// console.log(obj3);




// Getting keys and values from object ....
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.hasOwnProperty("yadava"));