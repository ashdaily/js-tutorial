// this is ok
var example1; //  declare a  variable without  giving  it any valu
name = "Ash";
console.log(example1)


// this is also ok
var example2 = "Ash";
console.log(example2)


// this is not ok
console.log(example3)  // undefined
var example3 = "Ash"


// this is ok
let example4 = "Ash";
console.log(example4)

// this is not ok
console.log(example5) // error
let example5 = "Ash";

// this is not ok
const example6; // error (you  need declare with a value for const)
example6 = "Ash"; // error

// this not ok too
console.log(example7);
const example7 = 7;

// this is  ok 
const example8 = "Ash"; 