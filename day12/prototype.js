// let myName = "Ranjana     "
// let mychannel = "yadav     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Ranjana = function () {
    console.log(`Ranjana is present in all objects`);
}

Array.prototype.heyRanjana = function () {
    console.log(`Ranjana says hello`);
}

// heroPower.Ranjana()
// myHeros.Ranjana()
// myHeros.heyRanjana()
// heroPower.heyRanjana()

// inheritance

const User = {
    name: "Ranjana",
    email: "rk@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Ranjana     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Ranjana".trueLength()
"tring".trueLength()