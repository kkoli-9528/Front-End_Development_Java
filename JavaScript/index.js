// 1. Ways to print in Javascript
//console.log("Hello, World!!!");
//document.write("This is document write");
//alert("me");

// 2. Javascript console API
// console.log("Hello, World!!!", 4 + 6, "Another Log");
// console.warn("This is warning");
// console.error("This is an error");

// 3. JavaScript Variables:-
// What are variables - Cointainers to store data values
var number1 = 34;
var number2 = 76;


// 4. JavaScript Datatypes:-

// Numbers:-
var num1 = 192;
var num2 = 118;


// String:-
var str1 = "I am Kunal Koli";
var str2 = 'I am Software Engineer';


// Objects:-
var marks = {
    Kunal: 99.99,
    Bhagu: 64.78,
    Gattu: 88.89
}


// Boolean:-
var a = true;
var b = false;


// Undefined:- 
// Variable which is not initialized has default value as undefined.
var und;


// Null:-
// Null means nothing has been kept here.
var empty = null;


/* Two types of datatypes:- 1. Primitives Datatype:- Numbers, String, Boolean, Symbols 
                            2. Reference Datatype:- Arrays and Objects
*/

//Arrays:-
var arr = [1, 2, "bablu", 4, 5];

// Operators In JavaScript:-

// Arithematic Operators
var a = 100;
var b = 10;

// console.log("The value of a + b ", a+b); 
// console.log("The value of a - b ", a-b);
// console.log("The value of a * b ", a*b);
// console.log("The value of a / b ", a/b);

// Assignment Operations

var c = b;

// c += 2;
// console.log("The value of c ", c);
// c -= 2;
// console.log("The value of c ", c);
// c *= 2;
// console.log("The value of c ", c);
// c /= 2;
// console.log("The value of c ", c);

// Comparision Operator
var x = 34;
var y = 68

// console.log( "x =", x,"," ,"y =", y);
// console.log( "Equals to",x == y);
// console.log( "Greater than equals to",x >= y);
// console.log( "Less than equals to", x <= y);
// console.log( "Greater than ", x > y);
// console.log( "Less than ", x < y);

// Logical Operators

// Logical And Operator:
/*
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
*/

// Logical OR Operator:
/*
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
*/

// Logical NOT Operator:
/*
console.log(!false);
console.log(!true);
*/

// Functions In JavaScript:-
// DRY = Do Not Repeat Yourself
/*function add(a, b) {  // Function initialization and definition

    return (a + b) / 2;
}


c1 = add(4, 6);    // Function call
c2 = add(14, 16);
*/

// console.log(c1, c2);

// Conditionals in JavaScript:-
var age = 31;

// Single if statement:-
/*
if( age > 18){
    console.log("You can drink");
}

// if - else statement:-
if( age > 18){
    console.log("You can drink");
}else{
    console.log("You cannot drink");
}

// if - else ladder statement:-

if( age > 2 && age < 10){
    console.log("You are not a kid");
}else if(age > 11 && age < 18){
    console.log ("You are a teen");
}else if(age > 19 && age < 35){
    console.log("You are an Adult");
}else{
    console.log("Senior Citizen ");
}
*/

// Loops in JavaScript:-

// For loop:-
/*
var arr1 = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr1.length; i++){  
    console.log(arr1[i]);
}
*/

// For-each loop:-
/*
arr1.forEach(function (element) {
    console.log(element);
})
*/

// const ab= 10;
// ab = ab + 1;

let j = 0;
/*while( j < arr1.length){
    console.log(arr1[j]);
    j++;
}*/

/*do{
    console.log(arr1[j]);
    j++;
}while( j < arr1.length);
*/

// Jump Statement

/*
for(let i = 0; i < 10; i++){
    if ( i == 8){
        break;
    }
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if ( i == 5){
        continue;
    }
    console.log(i);
}
*/

// Array Methods:-

/*
let MyArray = ["Fan", "Camera", 34, 12, null, true];

console.log(MyArray.length);    // Length of an array

MyArray.pop();                  // Pop element from end of array               
console.log(MyArray);

MyArray.push("Kunal");          // Push element from end of array
console.log(MyArray);

MyArray.shift();                // Shift element from start of an array
console.log(MyArray);    

MyArray.unshift("HAHAHA")       // Unshift element from start of an array
console.log(MyArray);
*/

// String Methods:-

/*
let sen = "Kunal is a good boy good";

console.log(sen.length);                        // Lenght of the String

console.log(sen.indexOf("good"));               // Index of the first letter of the word ( Search from Start )

console.log(sen.lastIndexOf("good"));           // Index of the first letter of the word ( Search from End )

console.log(sen.slice(0,10));                   // Slice from index [0] to index [9]

console.log(sen.replace("Kunal", "HAAAAAA"));   // Replace first word from second, at first occurence
*/

// Dates in JavaScript:-

let myDate = new Date();
console.log(myDate);                            // Current Date

console.log(myDate.getDay());                   // Day in numbers

console.log(myDate.getFullYear());              // Current Year 

console.log(myDate.getMinutes());               // Current Minutes

console.log(myDate.getHours());                   // Current Hour

// DOM Manipulation:-

