// .js means javascript file
// you can write your code inside this file

/*
this is
double line comment
*/

// search about what is nodejs


// adding two number
var x = 10 // = is called assignment operator
var y = 11
var name = "miki"
var pi = 3.14
var person = "John Doe"
var answer = 'Yes I am!'; // it's ok not to use semicolon

// const
const myName = "ash" // this is constant
// constant means never changes

//myName = "miki" // myName cannot change now

var myName1 = "ash" // this is variable
myName1 = "miki" // variable can be changes later


let myName2 = "ash" // this is let
myName2 = "ash" // let can be changed sometimes


var favNum = 10


console.log("doing sum", favNum+10)
console.log("doing minus", favNum-10)
console.log("doing multiplication", favNum*10)
console.log("doing power", favNum**3) // かける　ばつ
console.log("doing divide", favNum/3)
console.log("doing divide", favNum/3)
console.log("doing modulus", favNum%3) //残り
favNum = ++favNum
console.log("doing increment", favNum) 
favNum = --favNum
console.log("doing decrement", favNum)

x = 10
y = x
y // is 10
y += 5 // adds 5 to y (same as y = y + 5)
console.log("y is now:", y)
y -= 10
console.log("y is now:", y)
y *= 10 // multiply 10 to y
console.log("y is now:", y)


var firstName = "miki"
var lastName = "asano"

var fullName = firstName + " " + lastName  // adding strings is also called concatenation or concat
console.log(fullName, "is beautiful")