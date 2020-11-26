function example1(){
    return "mojo jojo"
}

// arrow function style 1
const example2 = () => {
    console.log("bla bla step 1")
    console.log("bla bla step 2")
    return "mojo jojo"
}

// arrow function style 2
const example3 = () => "mojo jojo" // this function body  will be of just on line


// calling is same
example1() 
example2()
example3()


// this function is same as 
const fullName = (firstName, lastName) => firstName + lastName
fullName("Ash", "Vardhan")

// this function
function fullName(firstName, lastName){
    return firstName + lastName
}
fullName("Ash", "Vardhan")