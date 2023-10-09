# JS-Practice 🔥
This is my practice repo where I try to go from basic to advanced concepts.


## Let, const and var ...

### Var :

Var is a global scope variable when we declare outside any function. This means that any variable that is declared with var outside a function block is available for use in the whole window.


### Let :


### Const :


# Data Types  :

🔵 Primitive = > Number, String, Boolean, null, undefined, Symbol, Bigint 

🔵 Non Primitive (Refrence Type ) = >   Array , Object ,  function 


 Number: store only number value.
 
 bigint: Store the large value of integer type.

 string  : store only string .

 boolean: Store only true or false 

 undefined: special type in data type in js.

 null: standalone value it's a type  empty value.Null is an object 

 symbol: used for unique values.

 object : 


# Array :

JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed. The Javascript Arrays are not associative in nature.
Arrays are used when we have a list of items. An array allows you to store several values with the same name and access them by using their index

# Methods 

* push() => add elements to the end of the array 

* pop() => remove elements to the end of the array

* unshift() => add elements to the start of the array 

* shift() => remove elements to start of the array

* includes() => return true or false based on the operation of finding elements.

* indexOf() => return the index of elements 

* join() => join the array elements by commas and pipes.

* slice() => return the elements method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.


### Methods ( iterative)

* every()

* filter()

* find()

* findIndex()

* findLast()

* findLastIndex()

* flatMap()

* forEach()

* map()

* some()


## Shallow Copy 

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change.

## Deep copy 

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 


## Scope (Local Vs Global )

### Scope : 

The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use.


JavaScript has 3 types of scope:

* Block scope
* Function scope
* Global scope

### Global Scope: 

The default scope for all code running in script mode.
```
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

### Block Scope : 

Variables declared inside a { } block cannot be accessed from outside the block.

```bash 
{
  var x = 1;
}
console.log(x); // 1
```




### Function Scope 

A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. 

```
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```


## Immediately Invoked Function Invocatoion Expression  (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

`(function () {
  // code 
})();`



## JavaScript Execution Context 

* Global Execution Context

* Function Execution Context

* Eval Execution Context




# DOM MANIPULATION

* document 

* ducument.getElementById()

* ducument.getElementByClassName()

* * ducument.querySelector()

*  ducument.querySelectorAll()

* childNode();



# Events 

* type

* timeStamp

* defaultPrevented

* target

* toElement

* srcElement

* currentTarget

* clientX

* clientY

* screenX

* screenY

* altKey

* ctrlKey

* shiftKey

* keyCode




### Bubbling : 

### Capturing : 



## Async in Js

### Blocking         Vs       Non Blocking 

 Blocking: 
    * Block the flow of program
    * Read the file sync


Non Blocking 
    * do not block the execution 
    * Read file async
