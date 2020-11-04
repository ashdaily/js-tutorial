// string interpolation
const firstName = "Duck";
const lastName = "Donald";

// usage number 1
console.log(`${firstName} ${lastName}`)

// usage number 2
const fullName = `${firstName} ${lastName}`; // firstName +  " " + lastName 


// usage number 3 
function makeFullName(firstName, lastName){
    return firstName + " " + lastName
}

const myName = "Ash";
const age = 18;
const introduction = `${myName} is ${age >= 18 ? "Adult" : "Not Adult"}` // ${here you can write javascript}
console.log(introduction)