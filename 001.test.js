//Q1: what is the difference between let, const, var.

const x = 1; // constant value
x = 2; // gives errors


let y = 1;
y = 3; // this is ok to change

var z = 1; 
z = 4 // this is ok to change


// **Q2: what is the difference between var and let
// HW: find out


// Q3: what is developer console ? 
// HW: find out more about developer console

// Q4: what is ECMAscript ? 
// HW: find out more about this

// Q5: Where can you run javascript or what can you do with javascript ? 
// website in html and css, mobile phone app (ios and android), 
// HW: find out more about coffeescript, nodejs, typescript**, dart

// Q6: what does this code do ? 
alert("hello"); //pop up

// Q7: what is the difference between these two code snippets ? 
// 1: 
alert("hello"); alert("world");

// 2:
alert("hello");
alert("world");

// Q8: what are the two ways to comment the code ? and why do you comment the code ?
// single line commenting
/* 
multiple line
commenting...
...
...
*/

// Q9: what does this code do ?
"use strict"; // this code works the modern way
// HW

// Q10: which of these variable names are invalid ?
var a1 = 1; // ok
var _a = 2; // ok
var $a = 4; // ok
var 1a = 5; // not ok
let 我 = 10; // ok

// **Q11: what is the difference between null and undefined
// HW: very important for interview
var x;
console.log(x); // undefined
var heightOfThePerson = null; // we don't know, unknown

// Q12: what is the difference between alert, prompt, confirm ?
// HW: learn again

// Q13: 
var myName = "miki"
var myAddress = {city:"niigata", houseNumber: 208}
console.log(typeof(myName)) // string
console.log(typeof(myAddress)) // object
console.log(typeof(myAddress.city)) // string

// Q14: what is type conversion ? 
console.log("2" > 1) // true (type conversion)

// Q15: what is difference between == and ===
1 == "1" // false (will )
1 === "1" // false (will also check data type is equal or not)

// Q16:
null == undefined // false

// Q17:
for (let i = 10; i > 3; i--) { 
    console.log(i); // 10, 9, 8, 7, 6, 5, 4
}


// Q18:
// all numbers are true except 0 is false
// HW try while loop with just number in the statement
let i = 3;
while (i) {
  console.log( i-- );
} 

/*
Your score 9/18 (50%)
*/









